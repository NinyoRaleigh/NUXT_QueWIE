<template>
    <div class="w-full md:pb-20 font-manrope">
        <div class="w-full grid grid-cols-2 lg:grid-cols-3 text-center">
            <!-- Left: Blue Background -->
            <div class="bg-[#469AF0] flex pl-5 items-center justify-center">
                <div
                    class="sm:py-10 py-5 lg:py-25 text-white text-start flex flex-col justify-between h-full">
                    <!-- Logo + Heading -->
                    <div
                        class="space-y-2 xl:space-y-6 scale-95 md:scale-90 lg:scale-100 transition-transform duration-300">
                        <img src="/images/testimonialLogo.webp" alt="Testimonial Logo"
                            class="w-20 sm:w-24 md:w-35 lg:w-40" />
                        <h1
                            class="font-normal text-2xl md:text-3xl lg:text-3xl xl:text-5xl leading-tight tracking-wider uppercase w-full sm:w-72 xl:w-100">
                            What they say about us?
                        </h1>
                    </div>

                    <!-- Quotation mark -->
                    <div class="mt-10 sm:mt-16 md:mt-24 flex justify-start">
                        <img src="/images/quotation.webp" class="opacity-10 w-20 sm:w-30 md:w-30  xl:w-40" />
                    </div>

                    <!-- Person info -->
                    <div class="text-start pb-5 space-y-2 sm:space-y-3">
                        <h1 class="font-extrabold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none">
                            Anya Santos
                        </h1>
                        <p class="text-[#EAEAEA] text-xs sm:text-sm leading-none">
                            Senior Software Engineer
                        </p>
                    </div>
                </div>
            </div>

            <!-- Middle: Photo -->
            <div class="flex justify-center items-center bg-white">
                <img src="/images/anya.webp" alt="Anya" class="w-full h-full object-cover shadow-lg" />
            </div>

            <!-- Right: White background with text -->
            <div class="bg-white relative flex justify-center col-span-2 lg:col-span-1 items-center">
                <img src="/images/quotationblue.webp" alt="Quote"
                    class="opacity-10 absolute object-contain right-4 top-10 sm:right-8 sm:top-16 md:right-10 md:top-15 lg:right-3 lg:top-22.5 w-10 sm:w-14 md:w-20" />
                <div class=" mt-10 flex justify-center items-center h-2/3 md:mt-25 lg:mt-51 ml-6 sm:ml-10 md:ml-14 lg:ml-16.5">
                    <img src="/images/testimonialtext.webp" alt="Testimonial Text" class="w-2/3 sm:w-3/4 lg:w-auto" />
                </div>
            </div>
        </div>
    </div>
</template>
