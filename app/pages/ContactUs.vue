<script setup lang="ts">
import { Clock1, Locate, Mail, MapPin, PhoneCall } from 'lucide-vue-next';
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '~/components/ui/button';
import { Textarea } from '~/components/ui/textarea';



</script>

<template>
    <NuxtLayout name="marketing-layout">
        <div class="scale-40 sm:scale-50 md:scale-63 lg:scale-83 xl:scale-100">
            <div class=" lg:pt-30 xl:pt-43.5 flex  justify-center items-center px-40 pb-0 xl:pb-20">
                <div
                    class="h-167 w-299  p-2.5 flex justify-between font-sans relative shadow-[0_0_60px_30px_#00000008] rounded-lg">
                    <!-- left -->
                    <div
                        class="w-123 bg-[#3691EF] rounded-t-lg rounded-bl-lg flex flex-col text-white pt-10 px-10 relative overflow-hidden">
                        <!-- circles -->
                        <div class="w-67.75 h-67.75 bg-black absolute -right-22.25  -bottom-21.5 rounded-full"></div>
                        <div class="w-34.5 h-34.5 bg-gray-600 opacity-50 absolute right-17.5 bottom-17.5 rounded-full">
                        </div>


                        <div class="w-90 space-y-4">
                            <h1 class="text-3xl font-semibold leading-none">Contact Information</h1>
                            <p class="leading-normal text-lg text-gray-300"> For inquiries,, and product
                                demonstrations, please reach out to us:</p>
                        </div>
                        <div class=" h-80 mt-21 relative">
                            <div class="space-y-8 flex flex-col ">
                                <div class="flex space-x-4">
                                    <PhoneCall />
                                    <p> +1012 3456 789 </p>
                                </div>
                                <div class="flex space-x-4">
                                    <Mail />
                                    <p> supporthomi@gmail.com <br> quewie@gmail.com </p>
                                </div>
                                <div class="flex space-x-4">
                                    <MapPin />
                                    <p> Tacurong City, Sultan Kudarat</p>
                                </div>
                                <div class="flex space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 24"
                                        fill="white" stroke="#ffffff" stroke-width="0.5" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                    <p> facebook.com/QUEWIE </p>
                                </div>
                                <div class="flex space-x-4">
                                    <Clock1 />
                                    <p> Business Hours: Monday to <br> Saturday, 8:00 AM – 5:00 PM <br> (GMT+8) </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex space-x-6 mt-9">
                            <NuxtImg class="w-7.5 h-7.5" alt="Twitter" src="/images/contactUs/twitter.webp" />
                            <NuxtImg class="w-7.5 h-7.5" alt="Instagram" src="/images/contactUs/Instagram.webp" />
                            <NuxtImg class="w-7.5 h-7.5" alt="Discord" src="/images/contactUs/discord.webp" />
                        </div>


                    </div>
                    <!-- right -->
                    <div class=" flex-1 bg-white px-12.5 pt-15 text-gray-600 space-y-11.25">
                        <div class="flex space-x-9.5">
                            <!-- First Name -->
                            <div class="w-69.5 flex-1  h-13.75  font-medium space-y-2 ">
                                <Label class="leading-5">First Name</Label>
                                <input class="border-b-2 w-full outline-0 border-0" />
                            </div>
                            <!-- Last Name -->
                            <div class="w-69.5 flex-1  h-13.75 font-medium space-y-2">
                                <Label class="leading-5 text-black ">Last Name</Label>
                                <input class="border-b-2 w-full outline-0 border-0" />
                            </div>
                        </div>

                        <div class="flex space-x-9.5">
                            <!-- Email -->
                            <div class="w-69.5 flex-1  h-13.75  font-medium space-y-2 ">
                                <Label class="leading-5">Email</Label>
                                <input class="border-b-2 w-full outline-0 border-0" />
                            </div>
                            <!-- Phone Number -->
                            <div class="w-69.5 flex-1  h-13.75 font-medium space-y-2">
                                <Label class="leading-5 text-black ">Phone Number</Label>
                                <input placeholder="+1 012 3456 789"
                                    class="border-b-2 placeholder:text-black text-black w-full outline-0 border-0" />
                            </div>
                        </div>

                        <!-- Select Subject -->
                        <div class="text-black space-y-5">
                            <Label class="font-semibold">Select Subject?</Label>
                            <div class="flex ">
                                <RadioGroup class="flex">
                                    <div class="flex items-center space-x-2">
                                        <RadioGroupItem id="option-one" value="option-one" />
                                        <Label class="text-xs">General Inquiry</Label>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <RadioGroupItem id="option-two" value="option-two" />
                                        <Label class="text-xs">Product Inquiry</Label>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <RadioGroupItem id="option-three" value="option-three" />
                                        <Label class="text-xs">Pricing and Quotation</Label>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <RadioGroupItem id="option-four" value="option-four" />
                                        <Label class="text-xs">Technical Support</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>

                        <div>
                            <div class=" font-medium h-14">
                                <Label class="leading-5">Message</Label>
                                <textarea id="message" placeholder="Write your message.."
                                    class="w-full resize-none text-sm outline-0 border-0 border-b-2 pt-4 pl-2 flex items-center " />
                            </div>
                        </div>

                        <div class="w-full flex  justify-end ">
                            <Button class="px-12 h-13.5 bg-black">
                                Send Message
                            </Button>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    </NuxtLayout>

</template>
