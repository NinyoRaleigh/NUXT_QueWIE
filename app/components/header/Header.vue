<script setup lang="ts">

</script>

<template>
    <div>
        <div class="w-full px-20 py-2 shadow-lg flex justify-between items-center">
            <!-- app logo -->
            <div class="flex items-center space-x-20">
                <div>
                    <img src="/images/Quewie Logo Colored with Title 1.png">

                </div>
                <!-- nav bar -->
                <div class="space-x-10 font-normal text-base ">
                    <NuxtLink> HOME </NuxtLink>
                    <NuxtLink> ABOUT US </NuxtLink>
                    <NuxtLink> FEATURES </NuxtLink>
                    <NuxtLink> SOLUTIONS </NuxtLink>
                    <NuxtLink> CONTACT US </NuxtLink>
                    <NuxtLink> PRICING </NuxtLink>
                </div>
            </div>
            <!-- buttons -->
            <div>
                <Button variant="ghost" class="font-normal text-base" >Login</Button>
                <Button class="bg-blue-400 font-normal text-base">Signup</Button>
            </div>
        </div>
    </div>
</template>
