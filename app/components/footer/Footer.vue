<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue';
import { ArrowRight } from 'lucide-vue-next';


</script>

<template>
    <div class=" w-full flex justify-center bg-[#2F2F2F]">
        <div
            class="w-full flex flex-col max-w-[1920px] px-10 md:px-20  space-y-6 text-white font-inter justify-center text-center  lg:text-start md:justify-center ">
            <div class="sm:pt-10  lg:flex ">
                <div class="sm:space-y-2 lg:space-y-5 lg:w-1/2 mt-5 ">
                    <h1 class="font-semibold text-3xl md:text-4xl leading-7.5">QUE<span class="text-blue-500">WIE</span>
                    </h1>
                    <p class="font-medium text-sm md:text-base leading-7.5 text-gray-400 ">Get started now try our product
                    </p>
                </div>
                <div class="flex items-end w-full relative">
                    <Input type="email" placeholder="Enter your email here"
                        class="h-13 rounded-full sm:px-11.25 border-2 placeholder:text-sm sm:placeholder:text-base border-gray-400 relative" />
                    <div class="rounded-full w-10 h-10 absolute flex right-0 bottom-1.5 mr-1.5  hover:cursor-pointer  bg-[#388FF0]">
                        <ArrowRight class="w-6 h-6 absolute left-1/2 top-1/2 -translate-1/2" />
                    </div>

                </div>
            </div>
            <div class="lg:block hidden">
                <div class="flex justify-between items-end pb-10">
                    <div >
                        <img src="/images/Logo 1.webp" class="w-95 hover:cursor-pointer">
                        <p class="px-2.5 font-inter font-medium leading-5">
                            Proudly supported by DOST-PCIEERD and the <br> Philippine Startup Ecosystem.
                        </p>
                    </div>
                    <div class=" space-y-2 font-medium leading-7.5">
                        <div class="flex space-x-2.5 items-center justify-end">
                            <p> Terms and Condtions </p>
                            <div class="rounded-full w-1 h-1 bg-gray-400"></div>
                            <p> Privacy Policy </p>
                        </div>
                        <div>
                            <p>© 2025 LinkNeX Solution. Copyright and rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:hidden block text-xs ">
                <div class="flex justify-center items-end pb-10 ">
                    <div class="flex flex-col justify-center items-center space-y-4">
                        <NuxtImg src="/images/Logo 1.webp" class="w-95" />
                        <p class="px-2.5 font-inter font-medium leading-5">
                            Proudly supported by DOST-PCIEERD and the Philippine Startup Ecosystem.
                        </p>
                    
                        <div class="flex space-x-1.5 sm:space-x-2.5 items-center justify-center hover:cursor-pointer">
                            <NuxtLink> <p> Terms and Condtions </p> </NuxtLink>
                            <div class="rounded-full w-1 h-1 bg-gray-400"></div>
                            <p> Privacy Policy </p>
                        </div>
                        <div>
                            <p>© 2025 LinkNeX Solution. Copyright and rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>