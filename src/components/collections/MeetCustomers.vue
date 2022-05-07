<script setup lang="ts">
  import SectionInfo from "../reusables/SectionInfo.vue";
  import img from "../../assets/images";
</script>

<template>
  <div class="tw-container tw-mt-16 md:tw-mt-16 md:tw-flex tw-gap-6">
    <div class="hero__img md:tw-basis-1/2 tw-relative lg:tw-mr-32">
      <img
        class="tw-h-auto"
        :src="img.Customer"
        alt="smiling-african-american-woman-using-mobile-phone-shopping-online-reading-text-message"
      />
    </div>
    <div class="hero__title tw-mt-6 md:tw-mt-0 md:tw-basis-1/2 tw-self-center">
      <SectionInfo> </SectionInfo>
    </div>
  </div>
</template>
