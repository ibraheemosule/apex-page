<script setup lang="ts">
  import Navbar from "./collections/Navbar.vue";
  import Hero from "./collections/Hero.vue";
  import Features from "./collections/Features.vue";

  import CameraIcon from "../../assets/images/CameraIcon.svg";

  const props = defineProps<{
    title: string;
    icon: string;
    bgColor: string;
  }>();
</script>

<template>
  <div class="tw-mt-12 md:tw-mt-8 lg:tw-mt-16 lg:tw-flex tw-items-start">
    <div
      class="icon tw-mx-auto tw-mb-4 md:tw-mt-2 tw-shrink-0 tw-rounded-full tw-w-20 md:tw-w-16 tw-aspect-square tw-flex tw-justify-center tw-items-center"
    >
      <img class="" :src="icon" alt="feature icon" />
    </div>
    <div
      class="feature__details tw-text-center lg:tw-text-left tw-px-8 md:tw-px-4 sm:tw-w-3/4 sm:tw-mx-auto md:tw-w-full"
    >
      <h4
        class="tw-font-[500] tw-my-3 md:tw-mt-0 tw-text-[1.375rem] md:tw-text-[1.3125rem]"
      >
        {{ title }}
      </h4>
      <p class="tw-font-body tw-text-base tw-leading-8 tw-text-body-col">
        This software is very easy for you to manage. You can use it as you
        wish.
      </p>
    </div>
  </div>
</template>

<style>
  .icon {
    background: v-bind(bgColor);
  }
</style>
