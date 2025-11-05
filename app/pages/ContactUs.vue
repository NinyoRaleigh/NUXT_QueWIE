<script setup lang="ts">
import { ref } from 'vue'
import { Clock1, Mail, MapPin, PhoneCall } from 'lucide-vue-next';
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '~/components/ui/button';


const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const subject = ref('General Inquiry')
const message = ref('')
const sending = ref(false)
const success = ref(false)
const sent = ref('')

// required form
const sendMessage = async () => {
    if (!firstName.value || !email.value || !message.value) {
        return
    }
    // send sa server/api/send.ts
    sending.value = true
    try {
        const res = await $fetch('/api/send', {
            method: 'POST',
            body: {
                name: `${firstName.value} ${lastName.value}`,
                email: email.value,
                phone: phone.value,
                subject: subject.value,
                message: message.value,
            },
        })
        if (res.success) {
            success.value = true
            sent.value = 'Message sent successfully!'
            resetForm();

            setTimeout(() => {
                success.value = false
                sent.value = ''
            }, 3000)
        }


        // error
    } catch (err) {
        console.error(err)
        alert('Something went wrong while sending your message.')
    } finally {
        sending.value = false
    }
}

const resetForm = () => {
        firstName.value = ''
        lastName.value = ''
        email.value = ''
        phone.value = ''
        subject.value = ''
        message.value = ''
}
</script>


<template>
    <NuxtLayout name="marketing-layout">
        <div class="  lg:scale-83 xl:scale-100">
            <div class="py-30 lg:py-30 xl:pt-43.5 lg:pb-0 flex justify-center items-center md:px-40  xl:pb-20">
            <div v-show="success" class="absolute top-1/2 -translate-y-1/2 w-100 h-35 text-white bg-gray-50 flex flex-col space-y-4 overflow-hidden rounded-lg items-center z-50">
                <div class="bg-blue-500 w-full h-10 flex justify-center items-center"> 
                    <Mail/>
                </div>
                <div class="flex flex-col text-center text-green-400 space-y-2 items-center justify-center ">
                    <h1 class="font-semibold text-xl">Success</h1>
                    <p>{{ sent }}</p>
                </div>
            </div>
                <div
                    class="w-90 sm:w-150 md:w-170 lg:w-299 p-2.5 lg:flex justify-center lg:justify-between font-sans relative shadow-[0_0_60px_30px_#00000008] rounded-xl text-xs sm:text-sm md:text-base">
                    <!-- left -->
                    <div
                        class=" w-full lg:w-123 bg-primary rounded-t-lg rounded-bl-lg flex flex-col text-white py-5 lg:py-10 px-10 relative overflow-hidden">
                        <!-- circles -->
                        <div
                            class="w-35 h-35 sm:w-67.75 sm:h-67.75 bg-black absolute sm:-right-22.25 -bottom-10 -right-10 sm:-bottom-21.5 rounded-full">
                        </div>
                        <div
                            class="w-20 h-20 sm:w-34.5 sm:h-34.5 bg-gray-600 opacity-50 absolute right-10.5 bottom-10.5  sm:right-17.5 sm:bottom-17.5 rounded-full">
                        </div>


                        <div class="space-y-4">
                            <h1 class="text-xl sm:text-2xl md:text-3xl font-semibold leading-none">Contact Information
                            </h1>
                            <p class="leading-normal text-sm sm:text-lg md:text-lg text-gray-300"> For inquiries,
                                partnerships, and product
                                demonstrations, please reach out to us:</p>
                        </div>
                        <div class=" h-80 mt-21 relative">
                            <div class="space-y-8 flex flex-col ">
                                <div class="flex space-x-4">
                                    <PhoneCall />
                                    <p> +1012 3456 789 </p>
                                </div>
                                <div class="flex space-x-4" >
                                    <Mail />
                                    <p>
                                        <a href="mailto:someone@example.com"  class="hover:underline">supporthomi@gmail.com</a> <br>
                                        <a href="mailto:someone@example.com"  class="hover:underline">quewie@gmail.com </a>
                                    </p>
                                </div>
                                <div class="flex space-x-4">
                                    <MapPin />
                                    <p> Tacurong City, Sultan Kudarat</p>
                                </div>
                                <div class="flex space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 24"
                                        fill="white" stroke="#ffffff" stroke-width="0.5" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                    <a href="https://www.facebook.com/p/Quewie-61578924791980" class="hover:underline"> facebook.com/QUEWIE </a>
                                </div>
                                <div class="flex space-x-4">
                                    <Clock1 />
                                    <p> Business Hours: Monday to <br> Saturday, 8:00 AM – 5:00 PM <br> (GMT+8) </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex space-x-6 mt-9">
                            <a href=""> <NuxtImg class="w-7.5 h-7.5" alt="Twitter" src="/images/contactUs/twitter.webp" /> </a>
                            <a href=""> <NuxtImg class="w-7.5 h-7.5" alt="Instagram" src="/images/contactUs/Instagram.webp" /> </a>
                            <a href=""> <NuxtImg class="w-7.5 h-7.5" alt="Discord" src="/images/contactUs/discord.webp" /> </a>
                        </div>
                    </div>

                    <!-- right -->
                    <form @submit.prevent="sendMessage" action="/api/send" method="POST">
                        <div class=" flex-1 bg-white px-12.5 pt-15 text-gray-600 space-y-11.25">
                            <div class="md:flex space-x-9.5 space-y-4">
                                <!-- First Name -->
                                <div class="w-full md:w-69.5 flex-1  h-13.75  font-medium space-y-2 ">
                                    <Label class="leading-5">First Name</Label>
                                    <input v-model="firstName" required class="border-b-2 w-full outline-0 border-0" />
                                </div>
                                <!-- Last Name -->
                                <div class="w-full md:w-69.5 flex-1  h-13.75 font-medium space-y-2">
                                    <Label class="leading-5 text-black ">Last Name</Label>
                                    <input v-model="lastName" required class="border-b-2 w-full outline-0 border-0" />
                                </div>
                            </div>

                            <div class="md:flex space-x-9.5 space-y-4">
                                <!-- Email -->
                                <div class="w-full md:w-69.5 flex-1  h-13.75  font-medium space-y-2 ">
                                    <Label class="leading-5">Email</Label>
                                    <input v-model="email" required type="email" class="border-b-2 w-full outline-0 border-0" />
                                </div>
                                <!-- Phone Number -->
                                <div class="w-full md:w-69.5 flex-1  h-13.75 font-medium space-y-2">
                                    <Label class="leading-5 text-black ">Phone Number</Label>
                                    <input type="tel" v-model="phone" @input="phone = phone.replace(/\D/g,'')" pattern="09[0-9]{9}" title="Enter a valid PH number starting with 09" placeholder="" class="border-b-2 placeholder:text-black text-black w-full outline-0 border-0" />
                                </div>
                            </div>

                            <!-- Select Subject -->
                            <div class="text-black space-y-5">
                                <Label class="font-semibold">Select Subject?</Label>
                                <div class="flex">
                                    <RadioGroup v-model="subject"
                                        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex w-full">
                                        <div class="flex items-center space-x-2">
                                            <RadioGroupItem id="option-one" default-value="General Inquiry" />
                                            <Label for="option-one" class="text-xs">General Inquiry</Label>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <RadioGroupItem id="option-two" value="Product Inquiry" />
                                            <Label for="option-two" class="text-xs">Product Inquiry</Label>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <RadioGroupItem id="option-three" value="Pricing and Quotation" />
                                            <Label for="option-three" class="text-xs">Pricing and Quotation</Label>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <RadioGroupItem id="option-four" value="Technical Support" />
                                            <Label for="option-four" class="text-xs">Technical Support</Label>
                                        </div>
                                    </RadioGroup>

                                </div>
                            </div>

                            <div>
                                <div class=" font-medium h-14">
                                    <Label class="leading-5">Message</Label>
                                    <textarea required v-model="message" id="message" placeholder="Write your message.."
                                        class="w-full resize-none text-sm outline-0 border-0 border-b-2 pt-4 pl-2 flex items-center" />

                                </div>
                            </div>

                            <div class="w-full flex  justify-end ">
                                <Button class="px-12 h-13.5 bg-black" :disabled="sending" type="submit">
                                    {{ sending ? 'Sending...' : 'Send Message' }}
                                </Button>

                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>

    </NuxtLayout>

</template>
