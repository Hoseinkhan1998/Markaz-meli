<script setup>
import Menu from './components/Menu.vue';

</script>

<template>
  <div class="grid grid-cols-12 gap-5 pe-5 bg-neutral-200" dir="rtl">
    <div class="col-span-2">
      <Menu />
    </div>
    <div class="col-span-10 gap-5 flex-col flex pb-10">
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
