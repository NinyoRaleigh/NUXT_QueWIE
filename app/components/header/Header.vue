<script setup lang="ts">
import { ref } from "vue";
const isOpen = ref(false);
</script>

<template>
    <div class="w-full flex fixed -top-1 justify-center shadow-[0_4px_16.2px_2px_#0000001A] z-50 bg-white">
        <header class="  max-w-[1730px] w-full flex items-center justify-between
           bg-white h-24 px-10 sm:px-20  md:px-10 z-50">
            <!-- Logo -->
            <div class="flex items-center lg:gap-6">
                <div>
                    <NuxtLink to="/">
                        <NuxtImg src="/images/Quewie Logo Colored with Title 1.webp" alt="Quewie Logo"
                            class="h-12 preload sm:h-14 md:h-16 lg:h-20 w-auto" />
                    </NuxtLink>
                </div>

                <!-- Desktop Nav -->
                <nav class="hidden lg:flex space-x-4 xl:space-x-15 text-black ">
                    <NuxtLink to="/" class="font-medium text-sm sm:text-base"
                        active-class="text-[#3691EF] underline underline-offset-2">HOME</NuxtLink>
                    <NuxtLink to="/aboutus" activeClass="text-[#3691EF] underline underline-offset-2">ABOUT US
                    </NuxtLink>
                    <NuxtLink to="/features" activeClass="text-[#3691EF] underline underline-offset-2">FEATURES
                    </NuxtLink>
                    <NuxtLink to="/solutions" activeClass="text-[#3691EF] underline underline-offset-2">SOLUTIONS
                    </NuxtLink>
                    <NuxtLink to="/contactus" activeClass="text-[#3691EF] underline underline-offset-2">CONTACT US
                    </NuxtLink>
                    <NuxtLink to="/pricing" activeClass="text-[#3691EF] underline underline-offset-2">PRICING</NuxtLink>
                </nav>

            </div>

            <!-- Desktop Buttons Ilisanan -->
            <div class="hidden lg:flex xl:space-x-3 items-center">
                <!-- <Button variant="ghost" class="font-normal text-sm sm:text-base">Login</Button>
                <Button
                    class="bg-[#3691EF] text-white rounded-md px-4 py-1 hover:bg-blue-600 font-normal text-sm sm:text-base">
                    Signup
                </Button> -->
            </div>

            <!-- Burger Menu Mobile  -->
            <button class="lg:hidden text-3xl focus:outline-none" @click="isOpen = !isOpen">
                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- x button -->
                <!-- <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> -->
            </button>
        </header>

    </div>

    <!-- Mobile Dropdown -->
    <transition name="fade">
        <div v-if="isOpen"
            class="lg:hidden fixed top-24 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-1.5 py-2.5 md:py-6 md:space-y-3 z-40 text-xs sm:text-base md:text-base ">
            <NuxtLink to="/" @click="isOpen = false" activeClass="text-[#3691EF] underline underline-offset-2">HOME
            </NuxtLink>
            <NuxtLink to="/aboutus" @click="isOpen = false" activeClass="text-[#3691EF] underline underline-offset-2">
                ABOUT US</NuxtLink>
            <NuxtLink to="/features" @click="isOpen = false" activeClass="text-[#3691EF] underline underline-offset-2">
                FEATURES</NuxtLink>
            <NuxtLink to="/solutions" @click="isOpen = false" activeClass="text-[#3691EF] underline underline-offset-2">
                SOLUTIONS</NuxtLink>
            <NuxtLink to="/contactus" @click="isOpen = false" activeClass="text-[#3691EF] underline underline-offset-2">
                CONTACT US</NuxtLink>
            <NuxtLink to="/pricing" @click="isOpen = false" activeClass="text-[#3691EF] underline underline-offset-2">
                PRICING</NuxtLink>

            <div class="w-11/12">
                <button class="w-full bg-[#3691EF] text-white rounded-md py-2 hover:bg-blue-600"
                    @click="isOpen = false">
                    Close
                </button>
                <!-- <button class="w-full border border-[#3691EF] text-[#3691EF] rounded-md py-2 hover:bg-[#3691EF] hover:text-white"
                    @click="isOpen = false">
                    Login
                </button> -->

            </div>
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
