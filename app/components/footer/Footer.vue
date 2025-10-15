<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue';
import { ArrowRight } from 'lucide-vue-next';


</script>

<template>
     <div class="w-full h-[357px] px-20 bg-[#2F2F2F] space-y-6 text-white"
                style="font-family: 'Inter', sans-serif;">
                <div class="pt-22 flex ">
                    <div class="space-y-7.5 w-1/2">
                        <h1 class="font-semibold text-[50px] leading-7.5">QUE<span class="text-blue-500">WIE</span></h1>
                        <p class="font-medium text-lg leading-7.5 text-[#A6A6A6]">Get started now try our product</p>
                    </div>
                    <div class="flex items-end w-full relative">
                        <Input type="email" placeholder="Enter your email here"
                            class="h-15 rounded-[70px] px-11.25 border-2 border-[#A6A6A6]relative" />
                        <div class="rounded-full w-11.5 h-11.5 absolute flex right-0 bottom-0  m-2 bg-[#388FF0]">
                            <ArrowRight class="w-6 h-6 absolute left-1/2 top-1/2 -translate-1/2" />
                        </div>

                    </div>
                </div>
                <div class="flex justify-between items-end">
                    <div>
                        <img src="/images/Logo 1.png">
                        <p class="px-[10px] font-Inter font-medium font- text-lg leading-5">
                            Proudly supported by DOST-PCIEERD and the <br> Philippine Startup Ecosystem.
                        </p>
                    </div>
                    <div class="space-y-2 font-medium text-lg leading-7.5">
                        <div class="flex space-x-2.5 items-center justify-end">
                            <p> Terms and Condtions </p>
                            <div class="rounded-full w-1 h-1 bg-[#A6A6A6]"></div>
                            <p> Privacy Policy </p>
                        </div>
                        <div>
                            <p>© 2025 LinkNeX Solution. Copyright and rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
</template>