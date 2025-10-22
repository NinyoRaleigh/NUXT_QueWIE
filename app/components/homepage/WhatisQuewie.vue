<script setup lang="ts">
import Button from '../ui/button/Button.vue';
</script>

<template>
    <div class="relative bg-[#388FF0] pt-20 pb-16 w-full font-[Poppins,sans-serif]">
        <!-- background block -->
        <div class="absolute top-0 w-full bg-gray-50 h-1/3"></div>

        <!-- white box -->
        <section
            class="relative left-1/2 -translate-x-1/2 bg-white rounded-3xl shadow-lg flex flex-col justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-8   max-w-screen-xl w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%]">
            <!-- title and text -->
            <div class="space-y-4 sm:space-y-6 md:space-y-8">
                <h1
                    class="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-normal md:leading-relaxed">
                    What is <span class="text-[#388FF0]">QUEWIE?</span>
                </h1>
                <p
                    class="font-normal text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed tracking-wide max-w-5xl mx-auto">
                    QUEWIE is an innovative Queue Management solution designed to eliminate the hassle of long and
                    disorganized
                    lines. It empowers users to book, place orders, track, and manage their queue position in real time.
                </p>
            </div>

            <!-- images section -->
            <div
                class="flex  flex-col lg:flex-row justify-center sm:justify-between items-center gap-6 lg:gap-10 mt-10 lg:mt-14 font-medium text-base sm:text-lg">
                <!-- left image -->
                <div
                    class="relative w-full max-w-md flex items-center justify-center xl:w-120  sm:w-90 sm:h-60 lg:w-100 lg:h-80 xl:h-90 lg:max-w-lg rounded-3xl overflow-hidden">
                    <img src="/images/Rectangle 22.webp" alt="forAdmin" class="w-70 h-50 sm:w-90 sm:h-60 xl:w-135 xl:h-90 rounded-3xl object-cover" />
                    <Button
                        class="absolute top-1/2 xl:top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-4 sm:px-6  xl:px-10  py-3 sm:py-6 xl:py-8 border text-white bg-transparent text-xs sm:text-sm md:text-base ">
                        For Administrator
                    </Button>
                </div>

                <!-- right image -->
                <div
                    class="relative w-full max-w-md xl:w-120 flex justify-center items-center sm:w-90 sm:h-60 lg:w-100 lg:h-80 xl:h-90 lg:max-w-lg rounded-3xl overflow-hidden">
                    <img src="/images/rectangle23.webp" alt="forGuest" class="w-70 h-50 sm:w-90 sm:h-60 xl:w-135 xl:h-90 rounded-3xl object-cover" />
                    <Button
                        class="absolute top-1/2 xl:top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-4 sm:px-6 xl:px-10 py-3  sm:py-6 xl:py-8 bg-[#388FF0] text-white text-xs sm:text-sm md:text-base ">
                        For Guest Experience
                    </Button>
                </div>
            </div>
        </section>
    </div>
</template>
