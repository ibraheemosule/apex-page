<script setup lang="ts">
  import img from "../../assets/images/index";
  import { ref } from "vue";
  import Btn from "../reusables/Btn.vue";
  import { inject } from "vue";

  const homeUrl = inject<string>("homeUrl"),
    toggle = ref(false),
    ul = ref<HTMLUListElement>(),
    button = ref<HTMLButtonElement>(),
    navItems = ["About", "Blogs", "Pages", "Contact"];

  const toggleNav = () => {
    toggle.value = !toggle.value;
    const btn = button.value!,
      el = ul.value!;
    let li: HTMLLIElement,
      time = 1;
    if (!el) return;
    if (!toggle.value) {
      btn.classList.remove("close");
      for (li of el.children as any) {
        li.style.animation = `slide-out .2s ${0.1 * time}s ease-in 1 forwards`;
        time++;
      }
      el.style.animation = `slide-out .2s ease-in 1 .${time}s forwards`;
    } else {
      btn.classList.add("close");
      el.style.animation = "slide-in .15s ease-in 1 forwards";
      for (li of el.children as any) {
        li.style.animation = `slide-in 0.2s ${0.08 * time}s ease-in 1 forwards`;
        time++;
      }
    }
  };
</script>

<template>
  <nav class="tw-mt-4 tw-relative tw-w-full">
    <div class="logo__wrapper tw-bg-white md:tw-bg-transparent">
      <img class="tw-w-20 tw-h-auto" :src="img.Logo" alt="website logo" />

      <button @click="toggleNav" ref="button" class="hamburger md:tw-hidden">
        <span class="first"></span>
        <span class="second"></span>
        <span class="third"></span>
      </button>
    </div>
    <ul
      class="tw-bg-white tw-z-20 md:tw-bg-transparent tw-text-header-col"
      ref="ul"
    >
      <li class="md:tw-ml-auto">Demos</li>
      <li
        v-for="(nav, i) in navItems"
        :key="nav"
        class="md:tw-ml-6 lg:tw-ml-12"
      >
        <a :href="homeUrl" target="_blank">{{ nav }}</a>
      </li>
      <li class="md:tw-ml-auto">
        <div class="tw-mb-2 md:tw-mb-0 md:tw-inline-block">
          <a :href="homeUrl" target="_blank">Login</a>
        </div>
        <div class="md:tw-mx-6 lg:tw-mx-12 tw-inline-block">
          <Btn>Get Started Free</Btn>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .logo__wrapper {
    display: flex;
    justify-content: space-between;

    padding: 1rem;
    z-index: 2;
  }

  .logo__wrapper .hamurger {
    position: relative;
    padding: 0.2rem;
    z-index: 1;
    border: 1px inset transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
    line-height: 100%;
  }

  ul {
    list-style-type: none;
    position: absolute;
    width: calc(100% + 30px);
    top: 100%;
    animation: slide-out 0s 1 forwards;
    padding: 1rem;
    margin: 0 -15px;
    padding-top: 0;
  }

  li {
    position: relative;
    padding: 0.75rem 0.5rem;
    text-align: center;
    cursor: pointer;
    transition: color 0.2s ease-out;
    transform: translate(-100%, -100%);
  }

  li:hover {
    color: gray;
  }

  .hamburger {
    background: transparent;
    margin: 0;
    outline: none;
    border: none;
    align-self: center;
    cursor: pointer;
  }

  .hamburger span {
    display: block;
    background: #1b1c20;
    width: 30px;
    height: 3px;
    margin-top: 7px;
    transition: all 0.2s ease-in;
  }

  .hamburger .first {
    margin-top: 0;
  }
  .close {
    padding-right: 0.1rem;
  }
  .close .first {
    transform: rotateZ(45deg) translate(5px, 350%);
  }
  .close .second {
    opacity: 0;
    background: red;
  }
  .close .third {
    transform: rotateZ(-45deg) translate(10%, -300%);
  }

  @media (min-width: 768px) {
    nav {
      display: flex;
    }

    .logo__wrapper {
      padding: 1rem 0;
      display: inline-block;
    }

    button.hamburger {
      display: none;
    }

    ul {
      position: static;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin-left: -3rem;
      animation: none;
      border-radius: 0;
    }

    li {
      padding: 0;
      transform: translate(0, 0);
    }
  }
</style>
