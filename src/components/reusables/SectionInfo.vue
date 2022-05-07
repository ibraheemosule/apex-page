<script setup lang="ts">
  const props = defineProps<{
    title: string;
    text: string;
  }>();
</script>

<template>
  <div class="">
    <h1 class="tw-font-title">
      {{ title }}
    </h1>
    <p class="tw-text-body-col tw-font-body tw-mt-4 xl:tw-mr-56">
      {{ text }}
    </p>
    <slot name="other"></slot>
  </div>
</template>

<style></style>
