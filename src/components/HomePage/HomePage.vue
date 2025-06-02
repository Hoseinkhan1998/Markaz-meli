<script setup>
import Menu from "./Menu.vue";

const tabs = ["همه", "اطلاعیه ها", "درنگی نورانی", "سرمایه انسانی", "اخبار فضای مجازی", "پینگ", "محفل تخصصی", "ضوابط حراست", "آیین نامه ها و ضوابط", "سرخط", "فناوری اطلاعات"];
</script>
<template>
  <div class="grid grid-cols-12 gap-5 pe-5" dir="rtl">
    <div class="col-span-2">
      <Menu />
    </div>
    <div class="col-span-10 gap-5 flex-col flex">
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
      <div class="w-full grid grid-cols-12">
        <div class="col-span-5 rounded-lg bg-neutral-100 py-2 px-3 shadow-lg shadow-neutral-50 flex flex-col gap-3">
          <div class="rounded-lg bg-neutral-200 h-[80px] px-2 flex items-center gap-2">
            <div class="flex">
              <div class="rounded-full h-6 w-6 z-10 border-4 border-neutral-300 border-solid bg-red-600 ms-3"></div>
              <div class="text-sm text-red-600 -ms-4 font-semibold rounded-full bg-neutral-100 h-16 w-16 flex justify-center items-center flex-col">
                <p>۱۴</p>
                <p>فروردین</p>
                <p>۱۴۰۴</p>
              </div>
            </div>
            <p class="text-neutral-900" style="word-spacing: -4px;">به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد</p>
            <div class=" flex flex-col justify-between items-stretch">
              <div class=" bg-green-400 text-neutral-100 p-1 text-xs rounded-lg">آیین نامه ها و ضوابط</div>
              <p>sadasd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
