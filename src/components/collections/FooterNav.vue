<script setup lang="ts">
  import img from "../../assets/images/index.ts";
  import Btn from "../reusables/Btn.vue";
  import { socialIcons } from "../../assets/utils/index.ts";
  import { inject } from "vue";

  const homeUrl = inject("homeUrl");
</script>

<template>
  <nav class="tw-mt-24 tw-flex tw-flex-wrap tw-justify-between">
    <div
      class="tw-w-full md:tw-w-auto md:tw-inline-block tw-bg-white md:tw-bg-transparent md:tw-self-end"
    >
      <img
        class="tw-w-20 tw-h-auto tw-mx-auto"
        :src="img.Logo"
        alt="website logo"
      />
    </div>
    <ul
      class="tw-w-full md:tw-ml-auto tw-p-0 tw-mt-6 md:tw-w-auto tw-flex tw-justify-center md:tw-justify-between tw-bg-white md:tw-bg-transparent tw-text-header-col"
    >
      <li class="md:tw-ml-auto">
        <a :href="homeUrl" target="_blank">About</a>
      </li>
      <li class="tw-ml-4 md:tw-ml-6 lg:tw-ml-12">
        <a :href="homeUrl" target="_blank">Features</a>
      </li>
      <li class="tw-ml-4 md:tw-ml-6 lg:tw-ml-12">
        <a :href="homeUrl" target="_blank">Work</a>
      </li>
      <li class="tw-ml-4 md:tw-ml-6 lg:tw-ml-12">
        <a :href="homeUrl" target="_blank">Support</a>
      </li>
    </ul>
    <ul
      class="icon__wrapper tw-flex tw-justify-center md:tw-justify-between tw-mt-6 md:tw-ml-auto tw-w-full md:tw-w-auto"
    >
      <li
        class="tw-flex md:tw-w-auto tw-mt-1"
        v-for="{ icon, alt } in socialIcons"
        :key="alt"
      >
        <a :href="homeUrl" class="tw-block tw-mx-6 md:tw-mx-3 lg:tw-mx-6">
          <img :src="icon" :alt="alt" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .icon__wrapper li:nth-of-type(1) {
    margin-top: 0.5rem;
  }
  li {
    cursor: pointer;
    transition: color 0.2s ease-out;
  }

  li:hover {
    color: gray;
  }
</style>
