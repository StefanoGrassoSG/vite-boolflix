<script >
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import axios from 'axios';
import { store } from './store.js'

export default {
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          include_adult: false,
          include_video: false,
          language: 'en-US',
          page: 1,
          sort_by: 'popularity.desc'
        },
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODgyYzk0NzEwY2YyZTNiOGRlZjBiNGNmM2NjMjRlMyIsInN1YiI6IjY0YjdiMDM2ZDM5OWU2MDEyZGI0YzhiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ_okPEolVHuhU2s9oD8Q2ElH5ZDNYT-hY0VQXjoIs8',
          Accept: 'application/json'
        }
      })
      .then((response) => {
        console.log(response)
        this.store.movies = response.data.results
        console.log( this.store.movies)
      })
    },
    getSeries() {
      axios.get('https://api.themoviedb.org/3/discover/tv', {
        params: {
          include_adult: false,
          include_video: false,
          language: 'en-US',
          page: 1,
          sort_by: 'vote_count.desc'
        },
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODgyYzk0NzEwY2YyZTNiOGRlZjBiNGNmM2NjMjRlMyIsInN1YiI6IjY0YjdiMDM2ZDM5OWU2MDEyZGI0YzhiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ_okPEolVHuhU2s9oD8Q2ElH5ZDNYT-hY0VQXjoIs8',
          Accept: 'application/json'
        }
      })
      .then((response) => {
        console.log(response)
        this.store.series = response.data.results
        console.log( this.store.series)
      })
    },
    getFilterResult() {
      this.store.onlySelectedGenere = false
      this.store.titleUpdate = true;
      Promise.all([
      axios.get('https://api.themoviedb.org/3/search/movie',
      {
        params:{
          api_key: 'b882c94710cf2e3b8def0b4cf3cc24e3',
          query: this.store.searchText
        }
      }),
      axios.get('https://api.themoviedb.org/3/search/tv',
      {
        params:{
          api_key: 'b882c94710cf2e3b8def0b4cf3cc24e3',
          query: this.store.searchText
        }
      })
      ])
      .then((response) => {
        const dataFromFirstAPI = response[0].data.results;
        const dataFromSecondAPI = response[1].data.results;
        this.store.movies = dataFromFirstAPI;
        this.store.series = dataFromSecondAPI;
        console.log(this.store.series)
      })
    },
    getGenere() {
      this.getGeneretv()
      this.store.drop = true
      axios.get('https://api.themoviedb.org/3/genre/movie/list', {
        params: {
          api_key: 'b882c94710cf2e3b8def0b4cf3cc24e3'
        }
      }).then((response) => {
          this.store.generi = response.data
          console.log(this.store.generi)
     })
    },
    getGeneretv() {
      this.store.drop = true
      axios.get('https://api.themoviedb.org/3/genre/tv/list', {
        params: {
          api_key: 'b882c94710cf2e3b8def0b4cf3cc24e3'
        }
      }).then((response) => {
          this.store.generitv = response.data
          console.log(this.store.generitv)
     })
    },
    closeDrop() {
      if(this.store.drop == true) {
        this.store.drop = false
      }
    },
    backToMain() {
      this.getMovies(),
      this.getSeries(),
      store.titleUpdate = false
      store.onlySelectedGenere = false,
      store.selectedSeries = false
      store.containerOverflow = 'hidden', 
      store.rowFlexWrap = 'nowrap'
    }
  },
  components: {
    HeaderComponent,
    MainComponent
  },
  created() {
    this.getMovies(),
    this.getSeries()
  }
}
</script>

<template>

  <HeaderComponent @filter="getFilterResult" @getGenere="getGenere" @mainMenu="backToMain"/>

  <MainComponent @close="closeDrop"/>

</template>

<style lang="scss">
@use "assets/scss/main";

* {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
