<template>
    <div class="w-full pb-20 font-manrope">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
            <!-- Left: Blue Background -->
            <div class="bg-[#469AF0] flex items-center justify-center">
                <div class="px-10 sm:px-14 md:px-16 lg:pl-20 py-14 lg:py-18 text-white text-start">
                    <div class="space-y-6">
                        <img src="/images/testimonialLogo.webp" alt="Testimonial Logo" class="w-20 sm:w-24 md:w-28" />
                        <h1
                            class="font-normal text-2xl sm:text-3xl lg:text-3xl leading-tight tracking-wider uppercase w-full sm:w-72">
                            What they say about us?
                        </h1>
                    </div>

                    <div class="mt-20 sm:mt-36 md:mt-44 lg:mt-55">
                        <img src="/images/quotation.webp" class="opacity-10 w-10 sm:w-14 md:w-20" />
                    </div>

                    <div class="pt-10 sm:pt-14 md:pt-16 text-start space-y-2 sm:space-y-3">
                        <h1 class="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-none">Anya Santos</h1>
                        <p class="text-[#EAEAEA] text-xs sm:text-sm leading-none">
                            Senior Software Engineer
                        </p>
                    </div>
                </div>
            </div>

            <!-- Middle: Photo -->
            <div class="flex justify-center items-center bg-white">
                <img src="/images/anya.webp" alt="Anya"
                    class="w-3/4 sm:w-2/3 lg:w-full shadow-[-30px_34px_68px_0px_#00000040] object-cover" />
            </div>

            <!-- Right: White background with text -->
            <div class="bg-white relative flex justify-center items-center">
                <img src="/images/quotationblue.webp" alt="Quote"
                    class="opacity-10 absolute right-4 top-10 sm:right-8 sm:top-16 md:right-10 md:top-20 lg:right-3 lg:top-22.5 w-10 sm:w-14 md:w-20" />
                <div class="mt-16 sm:mt-28 md:mt-36 lg:mt-51 ml-6 sm:ml-10 md:ml-14 lg:ml-16.5">
                    <img src="/images/testimonialtext.webp" alt="Testimonial Text" class="w-5/6 sm:w-3/4 lg:w-auto" />
                </div>
            </div>
        </div>
    </div>
</template>
