<script setup lang="ts">
  import img from "../../assets/images/Rectangle 13.png";
  import { aboutUsText } from "../../assets/utils";
  import AboutUsCard from "../reusables/AboutUsCard.vue";
</script>

<template>
  <div class="about__wrapper tw-py-20">
    <div class="tw-container">
      <h2
        class="tw-font-title tw-text-white md:tw-w-5/12 tw-mx-auto tw-text-center"
      >
        Our blessed client said about us 😍
      </h2>
      <div class="tw-flex tw-justify-between tw-mt-20 tw-flex-wrap">
        <AboutUsCard
          v-for="(_, i) in aboutUsText"
          :key="i"
          :title="_.title"
          :text="_.text"
          :name="_.name"
          :position="_.position"
          :image="_.image"
        />
      </div>
    </div>
  </div>
</template>

<style>
  .about__wrapper {
    background-image: url("../../assets/images/Curves.svg");
    background-repeat: no-repeat;
  }
</style>
