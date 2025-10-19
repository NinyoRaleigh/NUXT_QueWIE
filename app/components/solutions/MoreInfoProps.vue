<script setup lang="ts">
defineProps<{
    text: string,
    description: string,
    image: string,
}>();
</script>

<template>
  <!-- <NuxtLayout name="marketing-layout"> -->
    <section class="pb-25 px-24 font-sans  ">
      <div class="pt-25.5 flex justify-center items-center">
        <img :src="image" class="w-full rounded-sm">
      </div>
      <div class="mt-16 space-y-6">
        <h1 class="font-semibold text-6xl leading-tight w-full">The QUEWIE Features: <br><span class="text-[#469AF0]">{{ text }}</span></h1>
        <p v-html="description" class="w-full text-gray-500 text-justify font-normal text-2xl leading-8"></p>
      </div>
    </section>
  <!-- </NuxtLayout> -->
</template>
