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
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=b882c94710cf2e3b8def0b4cf3cc24e3&query=ritorno+al+futuro')
      .then((response) => {
        console.log(response.data)
        this.store.movies = response.data.results
        console.log( this.store.movies)
      })
    },
    getFilterResult() {
      axios.get('https://api.themoviedb.org/3/search/movie',
      {
        params:{
          api_key: 'b882c94710cf2e3b8def0b4cf3cc24e3',
          query: this.store.searchText
        }
      })
      .then((data) => {
        this.store.movies = data.data.results
        console.log(this.store.movies)
      })
    }
  },
  components: {
    HeaderComponent,
    MainComponent
  },
  created() {
    this.getMovies()
  }
}
</script>

<template>

  <HeaderComponent @filter="getFilterResult"/>

  <MainComponent />

  <footer>
    FOOTER
  </footer>
</template>

<style lang="scss">
@use "assets/scss/main";
</style>
