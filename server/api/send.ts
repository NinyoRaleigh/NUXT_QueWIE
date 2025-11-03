import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const data = await resend.emails.send({
      from: 'QUEWIE <onboarding@resend.dev>',
      to: ['ninoraleighparagas@gmail.com'],
      subject: `New message from ${body.name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });
    console.log('email sent', data);
    return { success: true, data }
  } catch (error) {
    return { success: false, error };
  }
})
