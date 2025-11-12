<script setup lang="ts">

</script>

<template>
     <div class="w-full max-w-[1920px] font-sans flex justify-center pt-35 md:pt-40 lg:pt-46 xl:pt-50 pb-20 sm:pb-30 md:pb-35 lg:pb-40">
        <div class="px-5 sm:px-10 md:px-15 lg:px-17.5 xl:px-22 text-center flex flex-col justify-center items-center space-y-5 sm:space-y-7 md:space-y-10">
            <h1 class="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug">
                We’re Here to Help
            </h1>
            <p class="font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed tracking-wide text-gray-500 max-w-[950px]">
                Support that keeps your queues moving smoothly.
            </p>
      
            <div class=" ">
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
                description="enhances the guest experience by allowing visitors to book ride slots via mobile or kiosks, reducing the need for physical lines. With real-time ride availability and status updates, it minimizes wait times and boosts overall satisfaction. Also supports tiered queuing options like VIP or express access, helping operators manage crowd flow efficiently while maximizing enjoyment for all guests." 
                image="/images/solutions/joyQ.webp" 
                link="/solutions_moreinfo/joyQ" 
                />

                <SolutionsSolutionProps 
                title="FinQ" 
                text="Banks & Financial Institutions" 
                description="optimizes customer flow by managing queues based on service types such as deposits, inquiries, or loan processing. It enables contactless ticketing, real-time wait updates, and dynamic teller assignments to balance workloads efficiently. By reducing idle time and enhancing queue visibility, it improves customer satisfaction while ensuring faster, more organized banking transactions."  
                image="/images/solutions/finQ.webp" 
                link="/solutions_moreinfo/finQ" 
                />

                <SolutionsSolutionProps 
                title="ServiQ" 
                text="Retail & Service Centers" 
                description="enhances customer experience by enabling digital check-ins for service desks, returns, or consultations. It helps manage customer flow during peak hours with real-time wait tracking and automated notifications. By minimizing physical queues and providing queue analytics, it supports better staff allocation, faster service delivery, and increased customer satisfaction." 
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