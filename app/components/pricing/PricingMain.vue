<script setup lang="ts"></script>

<template> 
<div>
    <div class=" w-full pt-23.5 pb-20 ">
                <div class="bg-[#3691EF] h-103"></div>

        <div class="bg-white  w-full max-w-[1920px] flex justify-center pt-20 ">
            <div class="-mt-100">
                <!-- First Grid -->
                <div class=" grid grid-cols-1 scale-105 sm:scale-100 w-70 sm:w-150 gap-5 md:w-180 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center text-center lg:w-250 xl:w-310 ">
                <PricingProps
                    color="#005684"
                    plan="BASIC"
                    pertransaction="6.00"
                    permonth="500-3,999"
                    description="<p>Perfect for small offices or <br> startups seeking a simple <br> yet reliable queue <br> management <br>solution with all essential <br> features and support <br>included. </p>"
                    subscribe="#"
                />
                <!-- Second Grid -->
                <PricingProps
                    color="#00CDEC"
                    plan="STANDARD"
                    pertransaction="5.00"
                    permonth="4,000-5,999"
                    description="<p>Ideal for growing organizations <br> that needed stable performance, <br> dependable maintenance, <br>and responsive technical <br> support. </p>"
                    subscribe="#"
                />
                <!-- Third Grid -->
                <PricingProps
                    color="#00E0B8"
                    plan="PROFESSIONAL"
                    pertransaction="4.00"
                    permonth="6,000-6,999"
                    description="<p>Best suited for mid-sized <br> enterprises or institutions  <br> handling moderate to high <br> service <br> demand, ensuring efficiency <br>through regular updates,<br> analytics, and system <br> optimization. </p>"
                    subscribe="#"
                />
                <!-- Fourth Grid -->
                 <PricingProps
                    color="#006FE0"
                    plan="ENTERPRISE"
                    pertransaction="3.00"
                    permonth="7,000 and above"
                    description="<p> Tailores for large enterprises <br> and government institutions  <br> managing high transaction <br> volumes. This plan provides the <br> most cost-effective rate while <br> maintaining premium<br> reliability, advanced features, <br> and priority system support.  </p>"
                    subscribe="#"
                />

                </div>
                
            </div>
            
        </div>
        
    </div>
</div>

</template>