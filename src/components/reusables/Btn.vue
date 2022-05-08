<script setup lang="ts">
  import { inject } from "vue";

  const homeUrl = inject("homeUrl");
</script>

<template>
  <button
    class="tw-bg-ter-col hover:tw-bg-[#fb8f0bd1] hover:tw-scale-[0.98] tw-transition-all tw-duration-300 tw-py-[0.875rem] tw-px-[1.3rem] tw-text-white tw-rounded-md tw-capitalize"
  >
    <a class="tw-block" :href="homeUrl" target="_blank"><slot></slot></a>
  </button>
</template>

<style></style>
