<script setup>
import AppHeader from './components/header/AppHeader.vue'
</script>

<template>
  <div class="relative flex flex-wrap items-center justify-center h-full">
    <AppHeader class="sticky top-0 w-full" />
    <router-view />
    <a
      href="//spotify.com"
      target="_blank"
      class="fixed p-2 px-3 text-xl font-semibold tracking-widest text-yellow-400 uppercase border border-yellow-400 bottom-4 right-4 hover:bg-yellow-400 hover:text-black"
    >
      Listen Now
    </a>
  </div>
</template>

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
