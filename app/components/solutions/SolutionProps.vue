<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next';
import Button from '../ui/button/Button.vue';


defineProps<{
    title: string,
    text: string,
    description: string,
    image: string,
    link: string,
}>();

</script>

<template>
    <div class="w-full flex items-center justify-center h-128 px-5 mt-35">
        <!-- left -->
        <div class="w-1/2  h-full relative">
            <div class="">
                <div class="absolute bg-gray-50 w-124 h-105.5 rounded-2xl -top-16.5 -left-10"></div>
                <div class=" bg-gray-50 w-124 h-75 rounded-xl top-19 left-49 absolute  "></div>
                <img src="/images/solutions/blur.png" class="absolute top-13">
                <div class=" relative">
                    <img :src="image">
                </div>

            </div>
        </div>
        <!-- right -->
        <div class="w-1/2 h-full relative  pl-20 py-7 ">
            <div class="space-y-5">
                <h1 class="font-semibold text-5xl leading-none text-[#3691EF]">{{ title }}</h1>
                <h2 class="font-semibold text-5xl leading-none">{{ text }}</h2>
                <p class="font-normal text-lg leading-relaxed w-130"> {{ description }} </p>
                <NuxtLink :to="link">
                    <p class="flex mt-8 gap-2 text-blue-400"> More Info 
                        <MoveRight />
                    </p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>