<script setup lang="ts">
  import FeaturesCard from "../reusables/FeaturesCard.vue";
  import { featuresInfo } from "../../assets/utils";
</script>

<template>
  <div>
    <h2 class="tw-font-sec tw-text-center tw-z-50">
      Features for a better experience
    </h2>
    <div class="card__wrapper md:tw-flex md:tw-justify-between">
      <template v-for="{ title, icon, bgColor } in featuresInfo" :key="title">
        <FeaturesCard :title="title" :icon="icon" :bgColor="bgColor" />
      </template>
    </div>
  </div>
</template>
