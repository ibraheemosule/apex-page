<script setup lang="ts">
  import Navbar from "./collections/Navbar.vue";
  import Hero from "./collections/Hero.vue";
  import Features from "./collections/Features.vue";
  import MeetCustomers from "./collections/MeetCustomers.vue";
  import StartSelling from "./collections/StartSelling.vue";
  import Orders from "./collections/Orders.vue";
</script>

<template>
  <main class="bg-white">
    <section class="md:tw-container">
      <Navbar />
    </section>
    <section class="tw-container">
      <Hero />
    </section>
    <section class="tw-container tw--mt-40 tw-z-30 tw-py-16 tw-bg-white">
      <Features />
    </section>
    <section class="tw-bg-bg-3 tw-py-8">
      <MeetCustomers />
    </section>
    <section class="tw-py-8 tw-overflow-hidden">
      <StartSelling />
    </section>
    <section class="tw-bg-bg-3 tw-py-8">
      <Orders />
    </section>
  </main>
</template>
