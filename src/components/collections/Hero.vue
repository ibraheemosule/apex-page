<script setup lang="ts">
  import SectionInfo from "../reusables/SectionInfo.vue";
  import Btn from "../reusables/Btn.vue";
  import img from "../../assets/images";
  import { usersAvi, userCard, heroText } from "../../assets/utils";
  import HeroCard from "../reusables/HeroCard.vue";

  const style = { font: 400 };
</script>

<template>
  <div class="hero tw-mt-16 md:tw-mt-24 md:tw-flex tw-gap-6">
    <div class="hero__title md:tw-basis-1/2">
      <SectionInfo :font="style" :title="heroText.title" :text="heroText.text">
        <template #other>
          <Btn class="tw-mt-8 tw-flex tw-items-center">
            <span>start chatting now</span>
            <img class="tw-ml-2 tw-w-4" :src="img.ArrowRight" />
          </Btn>
        </template>
      </SectionInfo>
      <div class="tw-mt-8 tw-flex tw-flex-wrap">
        <div class="user-img-grp tw-flex tw-items-center">
          <img
            v-for="{ image, alt } in usersAvi"
            :key="image"
            class="tw-w-10 tw-cursor-pointer hover:tw-scale-125 tw-rounded-full tw-h-10 tw-outline tw-outline-3 tw-outline-white"
            :src="image"
            :alt="alt"
          />
        </div>

        <div class="tw-ml-8 md:tw-ml-8">
          <h3 class="tw-font-sec tw-tracking-tighter">2,291</h3>
          <p class="info-text tw-text-[#12141D] tw-font-light">
            Happy Customers
          </p>
        </div>
        <div class="tw-py-4 tw-mx-4">
          <span
            class="tw-inline-block tw-w-1 tw-h-full tw-bg-header-col"
          ></span>
        </div>
        <div class="">
          <h3 class="tw-font-sec w-tracking-tighter">4.8/5</h3>
          <p class="info-text tw-text-[#12141D] tw-font-light tw-flex">
            <img
              v-for="i in 5"
              key="i"
              class=""
              :src="i === 5 ? img.vector2 : img.vector"
            />
            <span class="tw-ml-4">Rating</span>
          </p>
        </div>
      </div>
    </div>
    <div class="hero__img md:tw-basis-1/2 tw-relative lg:tw-mr-32">
      <img
        class="tw-mt-16 md:tw--mt-12 tw-h-screen tw-z-10"
        :src="img.UsingMobile"
        alt="smiling-african-american-woman-using-mobile-phone-shopping-online-reading-text-message"
      />
      <div
        class="-tw-z-10 tw-w-11/12 md:tw-w-full tw-aspect-square tw-top-1/2 tw-left-1/2 tw--translate-x-1/2 tw--translate-y-1/2 tw-absolute tw-rounded-full tw-border-2 tw-border-header-col"
      >
        <img
          class="tw-w-full tw-top-2 tw--translate-x-3 md:tw--translate-x-6 tw-relative md:tw-top-4"
          :src="img.Ellipse"
          alt="smiling-african-american-woman-using-mobile-phone-shopping-online-reading-text-message"
        />
      </div>
      <div
        class="first-card tw-z-20 tw-w-7/12 sm:tw-w-5/12 md:tw-w-8/12 lg:tw-w-6/12 xl:tw-w-5/12 tw-absolute"
      >
        <HeroCard :user="userCard[0]" />
      </div>
      <div
        class="first-card tw-z-20 tw-w-7/12 sm:tw-w-5/12 md:tw-w-8/12 lg:tw-w-6/12 xl:tw-w-5/12 tw-absolute tw-top-1/3 tw-right-0"
      >
        <HeroCard :user="userCard[1]" />
      </div>
    </div>
  </div>
</template>

<style>
  .user-img-grp img:not(:nth-child(1)) {
    margin-left: -15px;
  }
  .info-text {
    margin-top: -5px;
    @media (min-width: 768px) {
      margin-top: 0;
    }
  }

  .info-text > img:not(:nth-child(1)) {
    margin-left: 0.5rem;
  }

  .hero__img {
    z-index: -1;
  }

  .first-card {
    top: 60%;
  }
</style>
