<script setup lang="ts">
  import Navbar from "./collections/Navbar.vue";
  import Hero from "./collections/Hero.vue";
  import Features from "./collections/Features.vue";
  import MeetCustomers from "./collections/MeetCustomers.vue";
  import StartSelling from "./collections/StartSelling.vue";
  import Orders from "./collections/Orders.vue";
  import AboutUs from "./collections/AboutUs.vue";
  import GrowBusiness from "./collections/GrowBusiness.vue";
  import FooterNav from "./collections/FooterNav.vue";
  import Copyright from "./collections/Copyright.vue";
  import { onMounted, provide } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    let elements = document.getElementsByTagName("section");
    for (let el of Array.from(elements).slice(1)) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            toggleActions: "restart none none none",
          },
        })
        .fromTo(
          el,
          { scale: 0.9, autoAlpha: 0 },
          { duration: 0.5, scale: 1, autoAlpha: 1 }
        );
    }
  });

  provide("homeUrl", "https://apexnetwork.co/");
</script>

<template>
  <main class="bg-white">
    <section class="md:tw-container">
      <Navbar />
    </section>
    <section class="tw-container">
      <Hero />

      <div class="tw--mt-40 tw-z-30 tw-py-16 tw-bg-white">
        <Features />
      </div>
    </section>
    <section class="tw-bg-bg-3 tw-py-8 md:tw-pb-24">
      <MeetCustomers />
    </section>
    <section class="tw-py-8 tw-overflow-hidden">
      <StartSelling />
    </section>
    <section class="tw-bg-bg-3 tw-pt-8 tw-pb-24 md:tw-pb-32">
      <Orders />
    </section>
    <section class="tw-bg-[#FB8E0B]">
      <AboutUs />
    </section>
    <section class="tw-container">
      <GrowBusiness />
    </section>
    <footer class="tw-container">
      <FooterNav />
      <Copyright />
    </footer>
  </main>
</template>
