<script setup lang="ts">
  import Navbar from "./collections/Navbar.vue";
  import Hero from "./collections/Hero.vue";
  import Features from "./collections/Features.vue";
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
  </main>
</template>

<style></style>
