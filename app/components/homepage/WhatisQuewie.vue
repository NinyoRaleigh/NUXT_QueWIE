<script setup lang="ts">
import Button from '../ui/button/Button.vue';

</script>

<template>
    <div class=" w-full  h-233 relative" style="font-family: 'Poppins', sans-serif;">
        <!-- gray -->
        <div class="bg-gray-50 h-74.5 ">
            <!-- white box -->
            <div
                class="h- rounded-3xl bg-white p-12 flex justify-center absolute left-23.5 top-18.5 right-20 flex-col">
                <div class="h-170  relative  text-center ">
                    <!-- text -->
                    <div class="space-y-4">
                        <h1 class="font-semibold text-4xl leading-normal">What is <span
                                class="text-[#388FF0] ">QUEWIE? </span> </h1>
                        <p class="font-normal text-xl tracking-wide leading-relaxed text-gray-500">QUEWIE is an
                            innovative Queue Management solution designed to eliminate the hassle <br> of long and
                            disorganized lines. It empowers users to book, place orders, track, and <br> manage their
                            queue position in real time.</p>
                    </div>
                    <!-- images -->
                    <div class="flex justify-between absolute w-full bottom-0 text-lg font-medium leading-normal">
                        <!-- left -->
                        <div class="relative">
                            <img src="/images/Rectangle 22.png" class="w-135 rounded-3xl">
                            <div>
                                <Button
                                    class="absolute inset-0 flex rounded-full h-18 w-64 text-white bg-transparent border left-1/2 top-[48%] -translate-1/2 items-center justify-center">
                                    For Administrator
                                </Button>
                            </div>
                        </div>
                        <!-- right -->
                        <div class="relative">
                            <img src="/images/rectangle23.png" class="w-135 h-90 rounded-3xl">
                            <div>
                                <Button
                                    class="absolute inset-0 flex rounded-full w-62.5 h-18 text-white bg-[#388FF0] left-1/2 top-[50%] -translate-1/2 items-center justify-center">
                                    For Guest Experience
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-158.5 bg-[#388FF0]"></div>
    </div>
</template>