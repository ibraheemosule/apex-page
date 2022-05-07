<script setup lang="ts">
  const props = defineProps<{
    user: {
      name: string;
      img: string;
      text: string;
    };
  }>();

  console.log(props.user.img);
</script>

<template>
  <div class="card tw-rounded-xl tw-bg-[#ffffffe6] tw-flex tw-p-2 lg:tw-py-2.5">
    <div>
      <img
        class="tw-w-12 lg:tw-w-20 tw-aspect-square tw-cursor-pointer hover:tw-scale-125 tw-rounded-full"
        :src="props.user.img"
        alt="message"
      />
    </div>

    <div class="tw-ml-2 lg:tw-ml-4">
      <h5 class="tw-text-xs tw-font-semibold">{{ props.user.name }}</h5>
      <p
        class="tw-text-font-body tw-mt-1 tw-font-light tw-text-xs tw-text-sec-col tw-leading-4"
      >
        {{ props.user.text }}
      </p>
    </div>
  </div>
</template>

<style>
  .card {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 42.6213px 55.8136px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(6.06869px);
  }
</style>
