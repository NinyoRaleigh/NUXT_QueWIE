<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue';
import { ArrowRight } from 'lucide-vue-next';


</script>

<template>
    <div class=" w-full flex justify-center bg-[#2F2F2F]">
        <div class="w-full flex flex-col max-w-[1920px] h-89.5 px-20  space-y-6 text-white font-inter justify-center ">
            <div class="pt-22 flex ">
                <div class="space-y-7.5 w-1/2">
                    <h1 class="font-semibold text-5xl leading-7.5">QUE<span class="text-blue-500">WIE</span></h1>
                    <p class="font-medium text-lg leading-7.5 text-gray-400bg-gray-400">Get started now try our product
                    </p>
                </div>
                <div class="flex items-end w-full relative">
                    <Input type="email" placeholder="Enter your email here"
                        class="h-15 rounded-full px-11.25 border-2 border-gray-400 relative" />
                    <div class="rounded-full w-11.5 h-11.5 absolute flex right-0 bottom-0  m-2 bg-[#388FF0]">
                        <ArrowRight class="w-6 h-6 absolute left-1/2 top-1/2 -translate-1/2" />
                    </div>

                </div>
            </div>
            <div class="flex justify-between items-end">
                <div>
                    <img src="/images/Logo 1.png">
                    <p class="px-2.5 font-inter font-medium text-lg leading-5">
                        Proudly supported by DOST-PCIEERD and the <br> Philippine Startup Ecosystem.
                    </p>
                </div>
                <div class="space-y-2 font-medium text-lg leading-7.5">
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

    </div>

</template>