<script setup lang="ts">
defineProps<{
    title: string,
    text: string,
    description: string,
    image: string,
}>();
</script>

<template>
  <!-- <NuxtLayout name="marketing-layout"> -->
    <section class="pb-25 px-10 sm:px-15 md:px-25 lg:px-35 xl:px-50 font-sans text-justify ">
      <div class="pt-25.5 flex justify-center items-center">
        <NuxtImg :src="image" class="w-full rounded-sm" />
      </div>
      <div class="mt-16 space-y-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        <h1 class="font-semibold leading-tight w-full"> {{ title }} <br><span class="text-[#469AF0]">{{ text }}</span></h1>
        <div v-html="description" class="text-gray-500 font-normal text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed xl:leading-8"></div>
      </div>
    </section>
  <!-- </NuxtLayout> -->
</template>

