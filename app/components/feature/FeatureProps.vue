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
    <div class="w-full flex items-center justify-center h-90  px-5 mt-35">
        <!-- left -->
        <div class="w-1/2  h-full relative">
            <div class="py-10">
                <div class="absolute bg-[#388FF0] w-14 h-13.5 rounded-full top-8 -left-5"></div>
                <div class=" bg-[#388FF0] w-6 h-5.5 rounded-full bottom-1/5 absolute left-4/5  "></div>
                <div class="space-y-7 relative">

                    <h1 class="font-medium text-2xl leading-relaxed w-120"> {{ title }}<span
                            class="text-[#388FF0]">
                            {{ text }} </span></h1>
                    <p class="font-normal text-xl leading-8 tracking-wide text-gray-500 w-141">{{ description }}
                    </p>

                    <p class="font-normal text-xl leading-loose text-gray-500 underline underline-offset-1 hover:text-[#388FF0] transition">
                        <NuxtLink :to="link">Learn More</NuxtLink>
                    </p>

                </div>

            </div>
        </div>
        <!-- right -->
        <div class="w-1/2 h-full relative ">
            <div class="w-27 h-24 bg-[#272727] rounded-3xl absolute right-117"></div>
            <div class="w-45 h-41 bg-[#388FF0] rounded-3xl absolute right-0 bottom-0"></div>
            <NuxtImg :src="image" class="w-136 h-82 absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
    </div>
</template>