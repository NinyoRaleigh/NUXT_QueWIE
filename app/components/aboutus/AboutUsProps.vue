<script setup lang="ts">

const props = defineProps<{
    title: string;
    description: string;
}>();

</script>

<template>
    <div class="text-center space-y-8 py-13">
        <h1 class="font-semibold text-3xl leading-7 text-[#3691EF] "> {{ props.title }} </h1>
        <p class="text-justify font-normal text-2xl leading-loose text-gray-500 tracking-wide w-315"> {{ props.description }} </p>
    </div>
</template>