<script setup>
import InfoCart from "./InfoCart.vue";
import SmalCart from "./SmalCart.vue";

const tabs = ["همه", "اطلاعیه ها", "درنگی نورانی", "سرمایه انسانی", "اخبار فضای مجازی", "پینگ", "محفل تخصصی", "ضوابط حراست", "آیین نامه ها و ضوابط", "سرخط", "فناوری اطلاعات"];
const cards = [
  {
    date: { day: "۱۴", month: "فروردین", year: "۱۴۰۴" },
    dotColor: "bg-red-600",
    badge: "آیین نامه ها و ضوابط",
    badgeColor: "bg-green-400",
    text: "به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد",
    read: true,
  },
  {
    date: { day: "۱۴", month: "فروردین", year: "۱۴۰۴" },
    dotColor: "bg-red-600",
    badge: "آیین نامه ها و ضوابط",
    badgeColor: "bg-green-400",
    text: "به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد",
    read: true,
  },
  {
    date: { day: "۱۴", month: "فروردین", year: "۱۴۰۴" },
    dotColor: "bg-red-600",
    badge: "آیین نامه ها و ضوابط",
    badgeColor: "bg-green-400",
    text: "به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد",
    read: true,
  },
  {
    date: { day: "۱۴", month: "فروردین", year: "۱۴۰۴" },
    dotColor: "bg-red-600",
    badge: "آیین نامه ها و ضوابط",
    badgeColor: "bg-green-400",
    text: "به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد",
    read: false,
  },
  {
    date: { day: "۱۴", month: "فروردین", year: "۱۴۰۴" },
    dotColor: "bg-red-600",
    badge: "آیین نامه ها و ضوابط",
    badgeColor: "bg-green-400",
    text: "به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد",
    read: false,
  },
];
</script>
<template>
    <div class="w-full gap-5 flex-col flex pb-10" dir="rtl">
      <!-- navbar -->
      <div class="bg-neutral-100 rounded-b-lg shadow-lg pe-10 py-4 shadow-neutral-200 flex justify-end">
        <div class="flex items-center gap-3">
          <!-- Notification -->
          <div class="rounded-full cursor-pointer flex border-r-[3px] p-1 border-[#17145B] border-solid">
            <div class="flex items-center rounded-full justify-center w-10 h-10 bg-neutral-200">
              <svg class="size-6" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.45486 2.56697C8.69432 1.64801 7.55827 0.971802 5.99977 0.971802C2.74783 0.971802 1.33455 3.91644 1.33455 5.86364C1.33455 7.31799 1.54578 6.89041 0.740492 8.66526C-0.243009 11.1941 3.71153 12.2282 5.99977 12.2282C8.28727 12.2282 12.2425 11.1941 11.2598 8.66526C10.4538 6.89041 10.665 7.31799 10.665 5.86364"
                  stroke="#111111"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M7.69377 14.2281C6.74474 15.2887 5.26399 15.3011 4.30542 14.2281" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="h-3 w-3 bg-red-600 -ms-3 rounded-full"></div>
          </div>
          <!-- Profile -->
          <div class="h-16 bg-neutral-200 rounded-lg w-[400px] flex items-center justify-center gap-3">
            <p class="text-neutral-900 text-lg">محمدمهدی آقا محمدحسین تجریشی</p>
            <!-- profile pic -->
            <div class="border-l-[3px] p-1 border-[#17145B] rounded-full border-solid">
              <img src="/images/Ellipse9.png" class="rounded-full h-10 w-10" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- tabs buttons -->
      <div class="w-full flex flex-wrap gap-2">
        <div
          v-for="tab in tabs"
          :key="tab"
          class="py-2 px-3 bg-neutral-100 rounded-lg text-[#1E1B78] font-semibold text-lg cursor-pointer hover:bg-[#75781B] hover:text-neutral-100 transition-all duration-150">
          {{ tab }}
        </div>
      </div>
      <div class="w-full grid gap-x-5 gap-y-5 grid-cols-12">
        <!-- Occasion card -->
        <div class="col-span-5 rounded-lg h-[450px] overflow-y-auto bg-neutral-100 py-5 px-3 shadow-lg shadow-neutral-300 flex flex-col gap-3">
          <div
            v-for="(card, index) in cards"
            :key="index"
            :class="card.read ? 'bg-neutral-200 hover:bg-[#a3a732]' : 'bg-red-600'"
            class="rounded-lg group cursor-pointer transition-all duration-150 h-[80px] px-2 flex items-center gap-2">
            <div class="flex">
              <div v-if="card.read" class="rounded-full -me-5 h-6 w-6 z-10 border-4 border-neutral-300 border-solid bg-red-600"></div>
              <div class="text-sm text-red-600 font-semibold rounded-full bg-neutral-100 h-16 w-16 flex justify-center items-center flex-col">
                <p>{{ card.date.day }}</p>
                <p>{{ card.date.month }}</p>
                <p>{{ card.date.year }}</p>
              </div>
            </div>
            <p :class="card.read ? 'text-neutral-900' : 'text-neutral-100'" class="font-semibold" style="word-spacing: -4px">{{ card.text }}</p>
            <div :class="card.read ? 'opacity-70 group-hover:!opacity-100' : ' opacity-100'" class="flex flex-col justify-between items-stretch">
              <div
                class="text-neutral-100 p-1 w-[120px] text-xs transition-all duration-150 rounded-lg"
                :class="card.read ? 'bg-green-600 group-hover:bg-[#75781B]' : 'bg-[#FF9800]'">
                {{ card.badge }}
              </div>
              <div :class="card.read ? 'group-hover:text-neutral-100' : 'text-neutral-100'" class="flex items-center gap-2 mt-3 justify-end">
                <p class="text-xs">مشاهده خبر</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <!-- image -->
        <div class="col-span-7">
          <div class="h-[450px] bg-cover rounded-lg bg-center backdrop-blur-xl relative" :style="{ backgroundImage: `url(/images/homepagepic.png)` }">
            <div class="absolute h-[450px] inset-0 opacity-100 transition-all duration-300 hover:bg-[#fafafa36]"></div>
            <div class="justify-between text-neutral-900 items-center absolute w-full flex bottom-0 py-2 backdrop-blur-lg px-5 rounded-b-lg">
              <div class="flex z-20 items-center gap-2">
                <svg class="size-4" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L0 4L7 8L7 0Z" fill="#111111" />
                </svg>

                <p class="font-semibold">کاروان زیارتی عتبات عالیات به مناسبت روز عرفه</p>
              </div>
              <div class="flex items-center gap-2 bg-[#C6CB2D] rounded-tr-lg rounded-bl-lg px-3 py-1">
                <div class="bg-neutral-900 rounded-full h-3 w-3"></div>
                <p class="text-sm">معاونت برنامه ریزی ، پشتیبانی و توسعه منابع انسانی</p>
              </div>
            </div>
          </div>
        </div>
        <!-- info cart -->
        <div class="col-span-full">
          <InfoCart />
        </div>
        <!-- smal carts -->
        <div class="col-span-full">
          <SmalCart />
        </div>
      </div>
    </div>
</template>

<style scoped></style>
