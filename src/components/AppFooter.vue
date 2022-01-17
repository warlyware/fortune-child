<template>
  <div class="bottom-0 flex flex-wrap items-center justify-center w-full p-4 md:justify-end">
    <div class="flex justify-center w-full md:hidden">
      <SocialMediaIcons />
    </div>
    <a
      v-if="shouldShowListenNowButton"
      href="https://distrokid.com/hyperfollow/fortunechild/far"
      target="_blank"
      class="p-2 px-3 mt-4 text-xl font-semibold tracking-widest text-yellow-400 uppercase border border-yellow-400 md:mt-0 hover:bg-yellow-400 hover:text-black md:fixed md:mb-4 md:bottom-0"
    >
      Listen Now
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'


import SocialMediaIcons from '../components/SocialMediaIcons.vue'

const route = useRoute()

const shouldShowListenNowButton = computed(() => route.name !== 'Music')
</script>
