<script setup lang="ts">

defineProps<{
    title: string,
    text: string,
    description: string,
    image: string,
    link: string,
}>();

</script>


<template>
    <div class="w-full flex  flex-col-reverse lg:flex lg:flex-row items-center justify-center  px-5 my-10  lg:my-15">
        <!-- left -->
        <div class=" w-3/4 lg:w-1/2 pb-10 lg:pb-0 ">
            <div class="flex justify-start  relative w-full h-full">
                <div class="absolute bg-quewie w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-13.5 rounded-full -top-2 -left-4 sm:-left-5.75 md:-left-6.5 lg:-left-5"></div>
                <div class=" bg-quewie w-4 h-4 md:w-6 md:h-5.5 rounded-full bottom-0 absolute right-0  "></div>
                <div class="space-y-5 relative  text-xs  md:text-base  xl:text-xl">
                    <h1 class="font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed  xl:w-126">{{ title }}
                        <span class="text-quewie"> {{ text }} </span></h1>
                    <p class=" relative leading-loose tracking-wide text-gray-500 w-full"> {{ description }} </p>

                    <p class=" leading-loose text-gray-500 underline  underline-offset-1">
                        <NuxtLink :to="link">Learn more</NuxtLink></p>
                </div>

            </div>
        </div>


        <!-- right -->
        <div class="w-full lg:w-1/2 h-full mb-10 lg:pt-0 lg:pb-0 flex  items-center justify-center">
            <div class="relative w-[65%] lg:w-[85%] max-w-xl aspect-[136/82] flex justify-center items-center">
                <!-- black box -->
                <div
                    class="absolute bg-[#272727] rounded-lg sm:rounded-lg lg:rounded-2xl xl:rounded-3xl -left-[3%] -top-[4%] w-[20%] h-[28%]">
                </div>
                <!-- blue box -->
                <div
                    class="absolute bg-quewie rounded-lg sm:rounded-lg lg:rounded-2xl xl:rounded-3xl -right-[3%] -bottom-[4%] w-[33%] h-[50%]">
                </div>
                <!-- main image -->
                <NuxtImg :src="image" alt="Features Learnmore" class="absolute inset-0 w-full h-full object-contain" />
            </div>
        </div>
    </div>
</template>

