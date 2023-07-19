<script >
import HeaderComponent from './components/HeaderComponent.vue';
import axios from 'axios';

export default {
  data() {
    return {

    }
  },
  methods: {
    getMovies() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=b882c94710cf2e3b8def0b4cf3cc24e3&query=ritorno+al+futuro')
      .then((response) => {
        console.log(response.data)
      })
    }
  },
  components: {
    HeaderComponent
  },
  created() {
    this.getMovies()
  }
}
</script>

<template>

  <HeaderComponent />

  <main>
    MAIN
  </main>

  <footer>
    FOOTER
  </footer>
</template>

<style lang="scss">
@use "assets/scss/main";
</style>
