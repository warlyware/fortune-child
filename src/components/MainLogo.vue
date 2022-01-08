<template>
  <img
    :src="logoMainOuter"
    class="absolute w-10/12 max-w-lg p-4 -mt-20 h-10/12 md:w-6/12 md:h-6/12"
    alt="main logo"
  >
  <img
    id="logo-iris"
    :src="logoMainIris"
    class="absolute w-10/12 max-w-lg p-4 -mt-20 h-10/12 md:w-6/12 md:h-6/12"
    alt="main logo 2"
  >
  <img
    id="logo-pupil"
    :src="logoMainPupil"
    class="absolute w-10/12 max-w-lg p-4 -mt-20 h-10/12 md:w-6/12 md:h-6/12"
    alt="main logo 3"
  >
</template>

<script setup>
import logoMainOuter from '../assets/logo-main-outer.png'
import logoMainIris from '../assets/logo-main-iris-2.png'
import logoMainPupil from '../assets/logo-main-pupil-2.png'
// w-10/12 p-4 h-10/12 md:w-8/12 md:h-8/12
</script>

<style scoped>
#logo-iris {
  animation-name: reverse-breathe;
  animation-duration: 10000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
#logo-pupil {
  animation-name: breathe;
  animation-duration: 10000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes breathe {
0% {
    opacity: 0.7;
  }
  20% {
    opacity: 0.9;
  }
  50% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.7;
  }
}

@keyframes reverse-breathe {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.6;
  }
  80% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
</style>
