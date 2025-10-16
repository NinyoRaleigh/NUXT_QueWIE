<script setup lang="ts">

</script>

<template>
    <div class="w-full fixed z-999 bg-white" >
        <div class="w-full px-20 py-2 shadow-lg flex justify-between items-center">
            <!-- app logo -->
            <div class="flex items-center relative space-x-25">
                <div>
                    <img src="/images/Quewie Logo Colored with Title 1.png">

                </div>
                <!-- nav bar -->
                <div class="space-x-15 font-normal text-base ">
                    <NuxtLink to="/"> HOME </NuxtLink>
                    <NuxtLink to="/aboutus"> ABOUT US </NuxtLink>
                    <NuxtLink to="/features"> FEATURES </NuxtLink>
                    <NuxtLink to="/solutions"> SOLUTIONS </NuxtLink>
                    <NuxtLink to="contactus"> CONTACT US </NuxtLink>
                    <NuxtLink to="pricing"> PRICING </NuxtLink>
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
