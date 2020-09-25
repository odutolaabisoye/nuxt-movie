/* eslint-disable no-console */
<template>
  <div class="mt-8">
    <h4 class="title text-orange-500 font-semibold">
      POPULAR MOVIES
    </h4>
    <div class="popular grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      <Moviecards
        v-for="(movie, index) in popularmovies"
        :key="index"
        :movie="movie"
        :data-index="index"
      />
    </div>
    <hr>
    <h4 class="title text-orange-500 font-semibold mt-8">
      NOW PLAYING
    </h4>
    <div class="popular grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      <Popularmovies
        v-for="(nowShowing, index) in nowplaying"
        :key="index"
        :now-showing="nowShowing"
        :data-index="index"
      />
    </div>
  </div>
</template>

<script>
import Moviecards from '@/components/Moviecards.vue'
import Popularmovies from '@/components/Popularmovies.vue'

export default {
  components: {
    Moviecards,
    Popularmovies
  },
  async asyncData ({ $axios, error }) {
    const [popularmovies, nowplaying] = await Promise.all([
      $axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.API_SECRET),
      $axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + process.env.API_SECRET)
    ])
    return {
      popularmovies: popularmovies.data.results,
      nowplaying: nowplaying.data.results
    }
  }
  // eslint-disable-next-line no-dupe-keys
  // asyncData ({ $axios, error }) {
  //   return $axios
  //     .get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + process.env.API_SECRET)
  //     .then((response) => {
  //       // eslint-disable-next-line no-console
  //       // console.log(response.data.results)
  //       return {
  //         now_movies: response.data.results
  //       }
  //     })
  //     .catch((e) => {
  //       error({
  //         statusCode: 503,
  //         message: 'Unable to fetch event'
  //       })
  //     })
  // }
}
</script>

<style>
</style>
