<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'QUEWIE',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: '/images/QUEWIELOGO.webp',
  twitterCard: 'summary_large_image',
})
</script>
