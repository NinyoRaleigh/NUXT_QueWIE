<script setup lang="ts">
import HeroSection from '~/components/homepage/HeroSection.vue';
import QuewieWay from '~/components/homepage/QuewieWay.vue';
import TestimonialSection from '~/components/homepage/TestimonialSection.vue';
import WhatisQuewie from '~/components/homepage/WhatisQuewie.vue';


</script>

<template>
  <NuxtLayout name="marketing-layout">
    <div class="flex flex-col justify-center items-center">
      <HeroSection />
      <WhatisQuewie />
      <QuewieWay />
      <TestimonialSection />

    </div>


  </NuxtLayout>

</template>
