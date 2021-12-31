<template>
  <div class="relative flex flex-wrap items-center justify-center h-full">
    <button class="fixed top-0 left-0 p-2">
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
import AppHeader from './components/header/AppHeader.vue'
import SocialMediaIcons from './components/SocialMediaIcons.vue'
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

.min-h-app {
  min-height: calc(100vh - 64px);
}
</style>
