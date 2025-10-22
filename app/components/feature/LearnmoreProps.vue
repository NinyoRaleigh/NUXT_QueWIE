<script setup lang="ts">
defineProps<{
    text: string,
    description: string,
    image: string,
}>();
</script>

<template>
  <!-- <NuxtLayout name="marketing-layout"> -->
    <section class="pb-25 px-50 font-sans  ">
      <div class="pt-25.5 flex justify-center items-center">
        <NuxtImg :src="image" class="w-full rounded-sm" />
      </div>
      <div class="mt-16 space-y-6">
        <h1 class="font-semibold text-4xl leading-tight w-full">The QUEWIE Features: <br><span class="text-[#469AF0]">{{ text }}</span></h1>
        <p class=" text-gray-500 font-normal leading-8">{{ description }}</p>
      </div>
    </section>
  <!-- </NuxtLayout> -->
</template>
