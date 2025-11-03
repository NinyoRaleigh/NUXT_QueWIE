<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="text-center w-full space-y-8 py-5 px-10 sm:px-10 md:px-20 xl:px-30">
    <!-- Title -->
    <h1
      class="font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl text-primary leading-snug"
    >
      {{ props.title }}
    </h1>

    <!-- Description -->
    <p
      class="text-justify  font-normal text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-loose text-gray-500 tracking-wide "
    >
      {{ props.description }}
    </p>
  </div>
</template>
