<script setup lang="ts">
defineProps<{
    color: string
    plan: string
    pertransaction: string
    permonth: string
    description: string
    subscribe: string
}>()
</script>

<template>
    <div class="w-full space-y-10 pb-10 shadow-2xl bg-white relative text-xs sm:text-sm md:text-base ">
        <!-- Top bar -->
        <div class="h-5" :style="{ backgroundColor: color }"></div>

        <!-- Plan info -->
        <div class="space-y-2">
            <h1 class="text-xl sm:text-2xl" :style="{ color }">
                <span class="font-bold">{{ plan }}</span> PLAN
            </h1>
            <p class="font-bold">
                ₱{{ pertransaction }} /
                <span class="italic font-normal"> Transaction</span>
            </p>
            <p class="font-semibold">
                <span :style="{ color }">{{ permonth }}</span> transactions <br />
                per month
            </p>
        </div>

        <div class="h-1 mx-5 bg-gray-200"></div>

        <!-- Description -->
        <div v-html="description"></div>

        <!-- Subscribe Button -->
        <div class="px-14 w-full absolute bottom-0 pb-5">
        <NuxtLink :to="subscribe">
            <Button class="w-full hover:cursor-pointer text-white rounded-none" :style="{ backgroundColor: color }">
                Subscribe Now!
            </Button>
        </NuxtLink>
        </div>
    </div>
</template>
