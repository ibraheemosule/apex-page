<script setup lang="ts">
  interface Props {
    title: string;
    text: string;
    style?: {
      font: number;
      margin?: number;
    };
  }

  const props = withDefaults(defineProps<Props>(), {
    style: {
      font: 400,
      margin: "14rem",
    },
  });
</script>

<template>
  <div class="">
    <h1 class="tw-font-title">
      {{ title }}
    </h1>
    <p class="text tw-text-body-col tw-font-body tw-mt-4 xl:tw-mr-56">
      {{ text }}
    </p>
    <slot name="other"></slot>
  </div>
</template>

<style>
  p:nth-of-type(1) {
    font-weight: v-bind(font);
  }

  @media (min-width: 1280px) {
    p.text {
      margin-right: v-bind(style.margin);
    }
  } ;
</style>
