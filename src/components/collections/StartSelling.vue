<script setup lang="ts">
  import Btn from "../reusables/Btn.vue";
  import SectionInfo from "../reusables/SectionInfo.vue";
  import { startSellingText as _ } from "../../assets/utils";

  const style = { font: 500, margin: "6rem" };
</script>

<template>
  <div
    class="tw-container tw-py-8 md:tw-pb-0 md:tw-pt-16 tw-flex tw-flex-col-reverse md:tw-flex-row tw-gap-6"
  >
    <div class="md:tw-basis-1/2 tw-self-center lg:tw-mr-12 xl:tw-mr-32">
      <SectionInfo :style="style" :title="_.title">
        <template #other>
          <p class="tw-font-body tw-font-light tw-mt-4 xl:tw-mr-24">
            {{ _.text }}
          </p>
          <Btn class="tw-mt-8 tw-flex tw-items-center">
            <span>start chatting now</span>
          </Btn>
        </template>
      </SectionInfo>
    </div>
    <div class="md:tw-basis-1/2 tw-relative">
      <img
        class="tw-z-10 tw-mx-auto"
        :src="_.ChatCard"
        alt="smiling-african-american-woman-using-mobile-phone-shopping-online-reading-text-message"
      />
      <div
        class="chat-card tw-w-7/12 -tw-left-10 sm:tw-w-5/12 md:tw-w-8/12 lg:tw-w-6/12 xl:tw-w-5/12 tw-absolute"
      >
        <img :src="_.StatCard" alt="chat card" />
      </div>
      <div
        class="tw-w-7/12 sm:tw-w-5/12 md:tw-w-8/12 lg:tw-w-6/12 xl:tw-w-5/12 tw-absolute tw-top-1/4 md:tw-top-1/3 -tw-right-10 xs:-tw-right-16 sm:-tw-right-10 md:-tw-right-16 lg:-tw-right-10"
      >
        <img :src="_.CallCard" alt="chat card" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .chat-card {
    top: 63%;
  }
</style>
