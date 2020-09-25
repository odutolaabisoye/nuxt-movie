<template>
  <div class="card my-4">
    <img :src="'http://image.tmdb.org/t/p/original'+movie.poster_path" alt="" class="rounded-md hover:opacity-50">
    <p class="title">
      {{ movie.original_title }}
    </p>

    <div class="flex">
      <span class="rating"><svg class="fill-current text-orange-500 w-4" viewBox="0 0 24 24">
        <g data-name="Layer 2">
          <path
            d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
            data-name="star"
          />
        </g>
      </svg></span>
      <span class="percent text-xs px-1">{{ movie.vote_count }}% | </span>
      <span class="date text-xs">{{ movie.release_date }}</span>
    </div>
    <p class="genre text-xs">
      Action
    </p>
  </div>
</template>

<script>
export default {
  name: 'Moviecards',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    movie: Object
  }
}
</script>

<style lang="scss" scoped>

</style>
