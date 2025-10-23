<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="text-center space-y-8 py-10 px-20 sm:px-20 md:px-20 xl:px-30">
    <!-- Title -->
    <h1
      class="font-semibold text-sm sm:text-lg md:text-2xl lg:text-3xl text-[#3691EF] leading-snug"
    >
      {{ props.title }}
    </h1>

    <!-- Description -->
    <p
      class="text-justify mx-auto font-normal text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-loose text-gray-500 tracking-wide max-w-315"
    >
      {{ props.description }}
    </p>
  </div>
</template>
