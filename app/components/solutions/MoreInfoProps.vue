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
    <section class="pb-25 px-50  font-sans  ">
      <div class="pt-25.5 flex justify-center items-center">
        <NuxtImg :src="image" class="w-314.75 rounded-sm" />
      </div>
      <div class="mt-16 space-y-6 ">
        <h1 class="font-semibold text-4xl leading-tight w-full">{{ title }} <br><span class="text-[#469AF0]">{{ text }}</span></h1>
        <p v-html="description" class="w-314.75 text-gray-500 text-justify font-normal  leading-8"></p>
      </div>
    </section>
  <!-- </NuxtLayout> -->
</template>
