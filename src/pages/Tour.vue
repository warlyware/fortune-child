<template>
  <div class="w-full px-4 mx-auto mt-8 mb-32 text-center md:my-20 max-w-prose">
    <h1 class="mb-4 text-4xl font-semibold tracking-widest uppercase">
      Tour
    </h1>
    <div class="flex flex-col w-full mx-auto uppercase track-widest">
      <div
        v-for="show in shows"
        :key="`${show.date}-${show.venue}`"
        class="flex flex-col my-4"
      >
        <div class="text-3xl">
          {{ show.date }}
        </div>
        <div class="my-2 text-3xl">
          {{ show.venue }}
        </div>
        <div class="mb-2 text-xl">
          {{ show.location }}
        </div>
        <a
          v-if="show.link"
          class="underline"
          href="//ticketmaster.com"
          target="_blank"
        >
          Buy Tickets
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const shows = [
  {
    date: '2 . 18 . 22',
    venue: 'Jackrabbits Live',
    location: 'Jacksonville, FL',
    link: null
  },
  {
    date: '2 . 26 . 22',
    venue: 'Henao Soundgarden',
    location: 'Orlando, FL',
    link: null
  },
  {
    date: '3 . 19 . 22',
    venue: 'The Great Atlantic Southern Rock Festival',
    location: 'Jacksonville, FL',
    link: null
  },
  {
    date: '4 . 10 . 22',
    venue: 'Underbelly',
    location: 'Jacksonville, FL',
    link: null
  },
  {
    date: '4 . 16 . 22',
    venue: 'Underbelly',
    location: 'Jacksonville, FL',
    link: null
  },
  {
    date: '4 . 21 . 22',
    venue: '1904 Music Hall',
    location: 'Jacksonville, FL',
    link: null
  },
  {
    date: '4 . 29 . 22',
    venue: 'Swamp City',
    location: 'Jacksonville, FL',
    link: null
  },
  {
    date: '5 . 20 . 22',
    venue: 'Heartwood Sound Stage',
    location: 'Gainesville, FL',
    link: null
  },
]
</script>
