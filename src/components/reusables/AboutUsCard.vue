<script setup lang="ts">
  import img from "../../assets/images/Rectangle 13.png";

  const props = defineProps<{
    title: string;
    text: string;
    name: string;
    position: string;
    image: string;
  }>();
</script>

<template>
  <div class="tw-basis-full md:tw-basis-[45%] tw-my-8">
    <div class="tw-relative tw-rounded-xl tw-bg-white tw-p-8 tw-text-center">
      <div>
        <h5 class="tw-text-[#FD6003] tw-text-xl tw-font-semibold">
          {{ title }}
        </h5>
        <p
          class="tw-font-normal tw-text-base md:tw-leading-7 md:text-[1.125rem] tw-text-text-3 tw-mt-4"
        >
          {{ text }}
        </p>
        <span
          class="tw-absolute tw-w-8 tw-h-8 tw-rounded-[5px] tw-bg-white tw--bottom-3 tw-rotate-45 -tw-translate-x-1/2 tw-left-1/2"
        ></span>
      </div>
    </div>
    <div class="tw-flex tw-justify-center tw-mt-8 tw-text-white">
      <span class="tw-w-[3.9rem] tw-h-[3.9rem] tw-rounded-full tw-bg-gray-400">
        <img
          class="tw-w-full tw-h-full tw-rounded-full tw-object-cover"
          :src="image"
          alt="ceo image"
        />
      </span>
      <div class="tw-flex tw-flex-col tw-justify-between tw-ml-4 tw-pt-1">
        <span class="tw-text-font-body tw-font-medium">{{ name }}</span>
        <span class="tw-text-sm tw-font-light">{{ position }}</span>
      </div>
    </div>
  </div>
</template>
