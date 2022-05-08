<script setup lang="ts">
  import { defineAsyncComponent, ref } from "vue";
  import img from "./assets/images";

  const { Logo } = img;
  const loader = ref(true);
  const Layout = defineAsyncComponent(() => import("./components/Layout.vue"));
  setTimeout(() => (loader.value = !loader.value), 3000);
</script>

<template>
  <div
    v-if="loader"
    class="tw-h-screen tw-w-screen tw-flex tw-justify-center tw-items-center"
  >
    <img class="loader tw-w-20" :src="Logo" alt="apex logo" />
  </div>
  <Layout v-else />
</template>

<style>
  .loader {
    animation: spinner 1s 0.1s infinite;
  }

  @keyframes spinner {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
</style>
