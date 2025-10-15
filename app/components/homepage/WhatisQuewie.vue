<script setup lang="ts">
import Button from '../ui/button/Button.vue';

</script>

<template>
    <div class=" w-full h-233 relative" style="font-family: 'Poppins', sans-serif;">
        <!-- gray -->
        <div class="bg-gray-50 h-74.5 ">
            <!-- white box -->
            <div
                class="h-[799px] rounded-[20px] bg-white p-12 flex justify-center absolute left-23.5 top-18.5 right-20 flex-col">
                <div class="h-[697px]  relative  text-center ">
                    <!-- text -->
                    <div>
                        <h1 class="font-semibold text-[44px] leading-[180%]">What is <span
                                class="text-[#388FF0] ">QUEWIE? </span> </h1>
                        <p class="font-normal text-[22px] tracking-[2%] leading-[180%] text-[#696984]">QUEWIE is an
                            innovative Queue Management solution designed to eliminate the hassle <br> of long and
                            disorganized lines. It empowers users to book, place orders, track, and <br> manage their
                            queue position in real time.</p>
                    </div>
                    <!-- images -->
                    <div class="flex justify-between absolute w-full bottom-0 text-[16px] font-medium leading-[100%]">
                        <!-- left -->
                        <div class="relative">
                            <img src="/images/Rectangle 22.png" class="w-[539.54px] rounded-[20px]">
                            <div>
                                <Button
                                    class="absolute inset-0 flex rounded-[80px] h-[72.03px] w-[254.48px] text-white bg-transparent border left-1/2 top-[48%] -translate-1/2 items-center justify-center">
                                    For Administrator
                                </Button>
                            </div>
                        </div>
                        <!-- right -->
                        <div class="relative">
                            <img src="/images/rectangle23.png" class="w-[539.54px] h-[360.15px] rounded-[20px]">
                            <div>
                                <Button
                                    class="absolute inset-0 flex rounded-[80px] w-[250px]  h-[72.03px] text-white bg-[#388FF0] left-1/2 top-[50%] -translate-1/2 items-center justify-center">
                                    For Guest Experience
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[634px] bg-[#388FF0]"></div>
    </div>
</template>