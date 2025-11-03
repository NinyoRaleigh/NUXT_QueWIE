<template>
    <div class="w-full  bg-gray-50 py-5 sm:py-15 sm:px-10 md:py-20 md:px-10 lg:px-15 shadow-[0px_8px_7.3px_1px_#00000008] font-sans">
        <div class=" bg-white py-10 xl:py-21 lg:px-9  rounded-2xl">
            <div class=" flex flex-col-reverse  items-center lg:flex lg:flex-row  justify-between  h-full">
                <!-- left -->
                <div class=" w-2/3 lg:w-1/2">
                    <div class="flex justify-start  relative w-full h-full">
                        <div class="absolute bg-quewie w-11 h-11 md:w-14 md:h-13.5 rounded-full -top-2 -left-5"></div>
                        <div class=" bg-quewie w-4 h-4 md:w-6 md:h-5.5 rounded-full bottom-0 absolute right-0  "></div>
                        <div class="space-y-5 relative text-xs md:text-base lg:text-lg xl:text-xl">

                            <h1 class="font-medium text-base sm:text-lg md:text-2xl leading-relaxed  xl:w-126">The QUEWIE Way: <span
                                    class="text-quewie"> Stress-Free Service, Happier Customers </span></h1>
                            <p class=" relative leading-loose tracking-wide text-gray-500 xl:w-140">QUEWIE
                                simplifies workflows, eases employee stress, and ensures faster, smoother service for
                                happier customers.</p>

                            <p class=" leading-loose text-gray-500 underline  underline-offset-1">
                                Learn more</p>
                        </div>

                    </div>
                </div>

                <!-- right -->
                <div class="w-full lg:w-1/2 h-full pb-15 lg:pb-0 flex items-center justify-center">
                    <div class="relative w-[65%] lg:w-[85%] max-w-[550px] aspect-[136/82] flex justify-center items-center">
                        <!-- black box -->
                        <div class="absolute bg-[#272727] rounded-lg sm:rounded-2xl xl:rounded-3xl -left-[3%] -top-[4%] w-[20%] h-[28%]"></div>
                        <!-- blue box -->
                        <div class="absolute bg-quewie rounded-lg sm:rounded-2xl xl:rounded-3xl -right-[3%] -bottom-[4%] w-[33%] h-[50%]"></div>
                        <!-- main image -->
                        <NuxtImg src="/images/Group 17.webp" alt="quewieWay"
                            class="absolute inset-0 w-full h-full hover:cursor-pointer object-contain" />
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>