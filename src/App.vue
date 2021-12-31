<script setup>
import AppHeader from './components/header/AppHeader.vue'

import logoMain from './assets/logo-main-cropped-transparent.png'
</script>

<template>
  <AppHeader class="sticky top-0 w-full" />
  <div class="flex flex-wrap items-center justify-center h-full min-h-screen">
    <div class="mt-4">
      <img class="p-4" :src="logoMain" />
    </div>
  </div>
</template>

<style>
body, html, #app {
  @apply min-h-screen bg-black;
  font-family: 'Gideon Roman', Arial, Helvetica, sans-serif;
}
#app {
  @apply h-full w-full;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
