<script setup lang="ts">
  import SectionInfo from "../reusables/SectionInfo.vue";
  import img from "../../assets/images";
  import { customerText as _ } from "../../assets/utils";

  const style = { font: 500, margin: "6rem" };
</script>

<template>
  <div class="tw-container tw-mt-16 md:tw-mt-16 md:tw-flex tw-gap-6">
    <div class="md:tw-basis-1/2 lg:tw-mr-32">
      <img
        class="tw-h-auto tw-w-full"
        :src="img.Customer"
        alt="smiling-african-american-woman-using-mobile-phone-shopping-online-reading-text-message"
      />
    </div>
    <div class="tw-mt-12 md:tw-mt-0 md:tw-basis-1/2 tw-self-center">
      <SectionInfo :style="style" :title="_.title" :text="_.text1">
        <template #other>
          <p class="tw-font-body tw-font-light tw-mt-4 lg:tw-mr-24">
            Get paychecks up to two days early. Get a $20 bonus when you receive
            qualifying direct deposits
          </p>
        </template></SectionInfo
      >
    </div>
  </div>
</template>
