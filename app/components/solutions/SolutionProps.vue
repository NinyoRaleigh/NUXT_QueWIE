<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next'
import Button from '../ui/button/Button.vue'

defineProps<{
    title: string
    text: string
    description: string
    image: string
    link: string
}>()
</script>

<template>
    <div
        class="w-full flex flex-col lg:flex-row items-center  justify-center px-5 md:px-1 lg:px- my-10 xl:mt-20 lg:mt-35 font-sans">
        <!-- left -->
        <div class="relative w-full lg:w-1/2 flex justify-center items-center ">
            <div class="relative w-[85%] sm:w-[70%] md:w-[65%] lg:w-[80%] max-w-[550px] aspect-[124/105]">
                <!-- background boxes -->
                <div
                    class="absolute bg-gray-50 rounded-xl sm:rounded-2xl lg:rounded-3xl -top-[6%] -left-[5%] w-[95%] h-[95%]">
                </div>
                <div
                    class="absolute bg-gray-50 rounded-lg sm:rounded-xl lg:rounded-2xl top-[20%] left-[25%] w-[90%] h-[65%]">
                </div>

                <!-- blur -->
                <NuxtImg src="/images/solutions/blur.webp" class="absolute top-[13%] w-full h-auto" />

                <!-- main image -->
                <div class="relative w-full h-full flex justify-center items-center">
                    <NuxtImg :src="image" alt="Solution Image" class="w-full h-full object-contain" />
                </div>
            </div>
        </div>

        <!-- right -->
        <div
            class="w-full lg:w-1/2 lg:text-left px-3 sm:px-5 md:px-10 lg:pl-20 py-7 flex  flex-col justify-center items-center lg:items-start">
            <div class="space-y-1 sm:space-y-1 text-start max-w-2xl ">
                <h1 class="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight text-primary">
                    {{ title }}
                </h1>
                <h2 class="font-semibold text-xl sm:text-2xl lg:text-3xl  leading-tight">
                    {{ text }}
                </h2>
                <p
                    class="font-normal text-xs sm:text-sm md:text-base lg:text-base  leading-relaxed text-gray-600 mx-auto lg:mx-0 w-full">
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>
