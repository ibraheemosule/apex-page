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
            toggleActions: "restart reset restart reset",
          },
        })
        .fromTo(
          el,
          { scale: 0.95, autoAlpha: 0 },
          { duration: 0.75, scale: 1, autoAlpha: 1 }
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
    <section class="tw-container anim-1">
      <Hero />

      <div class="tw--mt-40 tw-z-30 tw-py-16 tw-bg-white anim-2">
        <Features />
      </div>
    </section>
    <section class="tw-bg-bg-3 tw-py-8 anim-3">
      <MeetCustomers />
    </section>
    <section class="tw-py-8 tw-overflow-hidden anim-4">
      <StartSelling />
    </section>
    <section class="tw-bg-bg-3 tw-pt-8 tw-pb-24 md:tw-pb-32 anim-5">
      <Orders />
    </section>
    <section class="tw-bg-[#FB8E0B] anim-6">
      <AboutUs />
    </section>
    <section class="tw-container anim-7">
      <GrowBusiness />
    </section>
    <footer class="tw-container anim-8">
      <FooterNav />
      <Copyright />
    </footer>
  </main>
</template>
