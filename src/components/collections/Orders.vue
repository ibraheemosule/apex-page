<script setup lang="ts">
  import SectionInfo from "../reusables/SectionInfo.vue";
  import img from "../../assets/images";
  import { ordersText as _ } from "../../assets/utils";

  const style = { font: 400, margin: "0rem" };
</script>

<template>
  <div class="tw-container md:tw-mt-16 md:tw-flex tw-gap-6">
    <div class="tw-mt-5 md:tw-basis-1/2 lg:tw-mr-24 lg:tw-ml-8">
      <div
        class="card__wrapper tw-w-11/12 tw-p-8 tw-mx-auto tw-min-h-[200px] tw-bg-white tw-relative"
      >
        <img
          class="tw-h-auto tw-w-full"
          :src="_.MessageCard"
          alt="message card"
        />
        <span
          class="tw-w-16 tw-cursor-pointer hover:tw-scale-125 tw-rounded-full tw-h-16 tw-outline tw-outline-4 tw-outline-white tw-absolute tw--left-8 tw-top-1/4 tw-bg-bg-1"
        >
          <img
            class="tw-w-full tw-h-full tw-rounded-full tw-object-cover"
            :src="img.Rectangle18"
            alt="user rounded image"
          />
        </span>
        <span
          class="tw-w-16 tw-cursor-pointer hover:tw-scale-125 tw-rounded-full tw-h-16 tw-outline tw-outline-4 tw-outline-white tw-absolute tw-top-[50%] md:tw-top-[60%] tw--right-3 tw-bg-bg-1"
        >
          <img
            class="tw-h-full tw-w-full tw-rounded-full tw-object-cover"
            :src="img.Rectangle14"
            alt="user rounded image"
          />
        </span>
        <span
          class="tw-w-16 tw-cursor-pointer hover:tw-scale-125 tw-rounded-full tw-h-16 tw-outline tw-outline-4 tw-outline-white tw-absolute tw--bottom-4 tw-left-[15%] tw-bg-bg-1"
        >
          <img
            class="tw-h-full tw-w-full tw-rounded-full tw-object-cover"
            :src="img.Rectangle15"
            alt="user rounded image"
          />
        </span>
      </div>
    </div>
    <div class="tw-mt-12 md:tw-mt-0 md:tw-basis-1/2 tw-self-center">
      <SectionInfo :style="style" :title="_.title" :text="_.text">
        <template #other>
          <div
            class="tw-flex sm:tw-gap-6 md:gap-0 lg:gap-8 tw-justify-between md:tw-justify-start tw-mt-20"
          >
            <div class="tw-flex">
              <h3 class="tw-text-[2rem] sm:tw-text-[2.625rem] tw-leading-[0]">
                4.3K+
              </h3>
              <div class="tw-ml-2 md:tw-ml-6 tw--mt-4 sm:tw--mt-6">
                <p
                  class="tw-text-sm tw-w-20 tw-leading-[1rem] sm:tw-leading-[1.5rem] tw-font-light"
                >
                  Website’s Powering
                </p>
              </div>
            </div>
            <div class="tw-flex">
              <h3 class="tw-text-[2rem] sm:tw-text-[2.625rem] tw-leading-[0]">
                7M+
              </h3>
              <div class="tw-ml-1 md:tw-ml-6 tw--mt-4 sm:tw--mt-6">
                <p
                  class="tw-text-sm tw-w-20 tw-leading-[1rem] sm:tw-leading-[1.5rem] tw-font-light"
                >
                  Chats in Last 2022
                </p>
              </div>
            </div>
          </div>
        </template></SectionInfo
      >
    </div>
  </div>
</template>

<style scoped>
  .card__wrapper {
    box-shadow: 0px 0px 24px 1px rgba(0, 0, 0, 0.06);
    border-radius: 11.6201px;
  }
</style>
