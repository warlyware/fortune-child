<template>
  <div class="bottom-0 flex flex-wrap items-center justify-center w-full px-4 mb-4 md:justify-end">
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
</template>

<script setup>
import SocialMediaIcons from '../components/SocialMediaIcons.vue'
</script>

<style lang="scss" scoped>

</style>
