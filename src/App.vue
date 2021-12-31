<template>
  <div class="relative flex flex-wrap items-center justify-center h-full text-yellow-400">
    <transition name="fade">
      <div
        v-if="showNavMenu"
        class="fixed top-0 bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center w-screen h-screen px-4 space-y-2 text-4xl font-semibold text-yellow-400 uppercase bg-black"
      >
        <button
          class="w-full py-2 text-center rounded hover:bg-yellow-400 hover:text-black"
          @click="goTo('/home')"
        >
          Home
        </button>
        <button
          class="w-full py-2 text-center rounded hover:bg-yellow-400 hover:text-black"
          @click="goTo('/about')"
        >
          About
        </button>
        <button
          class="w-full py-2 text-center rounded hover:bg-yellow-400 hover:text-black"
          @click="goTo('/contact')"
        >
          Contact
        </button>
      </div>
    </transition>
    <button
      class="fixed z-20 p-2 rounded-lg opacity-50 cursor-pointer top-2 left-2"
      @click="openNavMenu"
    >
      <img
        class="block md:hidden"
        height="48"
        width="48"
        src="./assets/logo-eye-only-cropped-transparent-sm.png"
        alt="collapsable-menu"
      >
    </button>
    <AppHeader class="sticky top-0 hidden w-full md:flex" />
    <div class="md:-mt-8">
      <router-view />
    </div>
    <div class="fixed flex flex-wrap items-center justify-center w-full px-4 md:justify-end bottom-4">
      <div class="flex justify-center w-full mb-4 md:hidden">
        <SocialMediaIcons />
      </div>
      <a
        href="//spotify.com"
        target="_blank"
        class="p-2 px-3 text-xl font-semibold tracking-widest text-yellow-400 uppercase border border-yellow-400 hover:bg-yellow-400 hover:text-black"
      >
        Listen Now
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from './components/header/AppHeader.vue'
import SocialMediaIcons from './components/SocialMediaIcons.vue'

const router = useRouter()


const showNavMenu = ref(false)

const openNavMenu = () => {
  showNavMenu.value = !showNavMenu.value
}

const goTo = route => {
  showNavMenu.value = !showNavMenu.value
  setTimeout(() => {
    router.push(route)
  })
}
</script>

<style>
body,
html,
#app {
  @apply bg-black;
  font-family: 'Gideon Roman', Arial, Helvetica, sans-serif;
}
#app {
  @apply h-full w-full;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3, h4, h5, h6 {
  @apply tracking-widest;
}

.min-h-app {
  min-height: calc(100vh - 64px);
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
