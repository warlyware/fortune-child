<template>
  <div class="h-screen mx-auto text-center md:mb-12">
    <div class="mb-12 bg-center bg-cover h-1/4 md:h-1/2 xl:h-2/3 music-hero animate-height" />
    <div class="px-12 mx-auto space-y-4 text-lg text-left ob-12 max-w-prose">
      <iframe
        id="yt-player"
        class="pb-8"
        type="text/html"
        width="100%"
        height="360"
        src="https://www.youtube.com/embed/mVMQ7NuJ4RQ?autoplay=1&origin=https://fortunechildmusic.com"
        frameborder="0"
      />
      <a
        href="https://distrokid.com/hyperfollow/fortunechild/far"
        target="_blank"
        class="block text-2xl text-center uppercase max-w-p"
      >
        <img
          src="../assets/far-cover.jpeg"
          alt="Far Album Cover"
        >
        <div class="py-8">
          Listen to the new single on Spotify
        </div>
      </a>
    </div>
  </div>
</template>

<style>
.music-hero {
  background-image: url(../assets/promo-1.jpeg);
}
.music-hero h1 {
  top: 50%;
  height: 100px;
}
</style>
