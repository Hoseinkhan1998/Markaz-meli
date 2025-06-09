<script setup>
import Menu from "./components/Menu.vue";
</script>

<template>
  <div class="bg-neutral-200 grid grid-cols-12 gap-5 px-[150px] min-h-screen" dir="rtl">
    <div class="col-span-2 h-screen sticky top-0 self-start">
      <Menu />
    </div>
    <div class="col-span-10 gap-5 flex-col flex overflow-y-auto h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "IRANSansX";
  src: url("/IRANSansX-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
body {
  font-family: "IRANSansX", sans-serif;
}
html.dark {
  color-scheme: dark;
}
</style>
