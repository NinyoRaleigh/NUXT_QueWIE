<script setup lang="ts">

</script>

<template>
    <div class="w-full pt-46 font-sans pb-50 flex justify-center" >
        <div class="px-17.5">
            <div class="flex flex-col justify-center items-center text-center">
                <h1 class="font-semibold text-6xl leading-tight">We’re Here to Help</h1>
                <p class="font-normal text-4xl leading-relaxed tracking-wide text-gray-500">Support that keeps your queues moving smoothly.</p>
            </div>
            <div class="mt-17 ">
                <SolutionsSolutionProps 
                title="CiviQ" 
                text="Government Offices" 
                description="streamlines citizen services through organized queue  flow, enabling digital ticketing and real-time updates. By reducing overcrowding in public halls and minimizing wait-related frustrations, it enhances transparency, improves service efficiency, and significantly reduces the volume of complaints." 
                image="/images/solutions/civiQ.webp" 
                link="/solutions_moreinfo/civiq" 
                />
                
                <SolutionsSolutionProps 
                title="HealtiQ" 
                text="Hospitals & Clinics" 
                description="helps prioritize patients based on urgency and schedule, enabling smoother check-ins through kiosks or mobile devices. It minimizes physical waiting by providing real-time updates and integrates seamlessly with existing health systems. By improving patient flow and reducing congestion, enhances the overall care experience while supporting safety, privacy, and operational efficiency." 
                image="/images/solutions/healthiQ.webp" 
                link="/solutions_moreinfo/healthiQ" 
                />

                <SolutionsSolutionProps 
                title="JoyQ" 
                text="Amusement Parks & Attractions" 
                description="Enhances guest experience by enabling mobile or kiosk ride bookings, reducing lines, and offering real-time updates. Supports VIP and express queues for efficient crowd management and greater satisfaction." 
                image="/images/solutions/joyQ.webp" 
                link="/solutions_moreinfo/joyQ" 
                />

                <SolutionsSolutionProps 
                title="FinQ" 
                text="Banks & Financial Institutions" 
                description="Optimizes customer flow by managing service-based queues with contactless ticketing, real-time updates, and dynamic teller assignments, ensuring faster and more organized banking transactions." 
                image="/images/solutions/finQ.webp" 
                link="/solutions_moreinfo/finQ" 
                />

                <SolutionsSolutionProps 
                title="ServiQ" 
                text="Retail & Service Centers" 
                description="Enhances customer experience through digital check-ins for services, real-time wait tracking, and queue analytics—enabling efficient staff allocation, reduced waiting time, and improved overall satisfaction." 
                image="/images/solutions/serviQ.webp" 
                link="/solutions_moreinfo/serviQ" 
                />

                <SolutionsSolutionProps 
                title="EduQ" 
                text="Schools & Universities" 
                description="simplifies student services by managing queues for registration, cashier, guidance, and other offices through a centralized system. It allows students to check in digitally and receive real-time notifications when it’s their turn, reducing idle time and congestion in service areas. By improving queue visibility and efficiency, enhances the overall student experience and supports smoother administrative operations." 
                image="/images/solutions/eduQ.webp" 
                link="/solutions_moreinfo/eduQ" 
                />
                <SolutionsSolutionProps 
                title="ExecuQ" 
                text="Corporate & BPO Offices" 
                description="Streamlines internal operations by managing queues for HR, IT support, facilities, and visitor appointments. Enables digital check-ins with real-time updates—improving response time, service visibility, and overall workplace efficiency." 
                image="/images/solutions/execuQ.webp" 
                link="/solutions_moreinfo/execuQ" 
                />

            </div>
        </div>
    </div>
</template>