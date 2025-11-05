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
  description: 'Optimize Queues. Maximize Service.',
  ogDescription: 'Optimize Queues. Maximize Service.',
  ogImage: '/images/quewie_ogimage.webp',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/images/QUEWIELOGO.webp' },
    { rel: 'apple-touch-icon', href: '/images/QUEWIELOGO.webp' },
  ],
})
</script>
