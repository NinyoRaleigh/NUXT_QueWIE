<script setup lang="ts">
import { ref } from "vue";
const isOpen = ref(false);
</script>

<template>
    <div class="w-full flex fixed justify-center shadow-[0_4px_16.2px_2px_#0000001A] z-50 bg-white"> 
        <header class="  max-w-[1730px] w-full flex items-center justify-between
           bg-white h-24 px-4 sm:px-6 md:px-10 z-50">
        <!-- Logo -->
        <div class="flex items-center lg:gap-6">
                <div>
            <img src="/images/Quewie Logo Colored with Title 1.png" alt="Quewie Logo"
                class="h-12 sm:h-14 md:h-16 lg:h-20 w-auto" />
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex space-x-4 xl:space-x-15 text-black font-medium text-sm sm:text-base">
            <NuxtLink to="/" class="hover:text-[#3691EF]">HOME</NuxtLink>
            <NuxtLink to="/aboutus" class="hover:text-[#3691EF]">ABOUT US</NuxtLink>
            <NuxtLink to="/features" class="hover:text-[#3691EF]">FEATURES</NuxtLink>
            <NuxtLink to="/solutions" class="hover:text-[#3691EF]">SOLUTIONS</NuxtLink>
            <NuxtLink to="/contactus" class="hover:text-[#3691EF]">CONTACT US</NuxtLink>
            <NuxtLink to="/pricing" class="hover:text-[#3691EF]">PRICING</NuxtLink>
        </nav>

        </div>

        <!-- Desktop Buttons -->
        <div class="hidden lg:flex xl:space-x-3 items-center">
            <Button variant="ghost" class="font-normal text-sm sm:text-base">Login</Button>
            <Button
                class="bg-[#3691EF] text-white rounded-md px-4 py-1 hover:bg-blue-600 font-normal text-sm sm:text-base">
                Signup
            </Button>
        </div>

        <!-- Burger Menu (Mobile & Tablet) -->
        <button class="lg:hidden text-3xl focus:outline-none" @click="isOpen = !isOpen">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </header>

    </div>

    <!-- Mobile & Tablet Dropdown -->
    <transition name="fade">
        <div v-if="isOpen"
            class="lg:hidden fixed top-24 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 space-y-4 z-40">
            <NuxtLink to="/" @click="isOpen = false" class="hover:text-[#3691EF]">HOME</NuxtLink>
            <NuxtLink to="/aboutus" @click="isOpen = false" class="hover:text-[#3691EF]">ABOUT US</NuxtLink>
            <NuxtLink to="/features" @click="isOpen = false" class="hover:text-[#3691EF]">FEATURES</NuxtLink>
            <NuxtLink to="/solutions" @click="isOpen = false" class="hover:text-[#3691EF]">SOLUTIONS</NuxtLink>
            <NuxtLink to="/contactus" @click="isOpen = false" class="hover:text-[#3691EF]">CONTACT US</NuxtLink>
            <NuxtLink to="/pricing" @click="isOpen = false" class="hover:text-[#3691EF]">PRICING</NuxtLink>

            <button class="w-11/12 bg-[#3691EF] text-white rounded-md py-2 hover:bg-blue-600" @click="isOpen = false">
                Signup
            </button>
            <button
                class="w-11/12 border border-[#3691EF] text-[#3691EF] rounded-md py-2 hover:bg-[#3691EF] hover:text-white"
                @click="isOpen = false">
                Login
            </button>
        </div>
    </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
