<script >
import { store } from '../store.js'
import singleMultimedia from './singleMultimedia.vue';

export default {
  data() {
    return {
        store
    }
  },
  components: {
    singleMultimedia
  }
}
</script>

<template>
    <main>
        <div class="container">
            <h2 v-if="store.titleUpdate == false">
               Popular Movies
            </h2>
            <h2 v-else>
                Movies
            </h2>
            <div class="row">
                <div class="col-2" v-for="(singleMovie, i) in store.movies" :key="i">
                    <singleMultimedia :multiData="singleMovie" :index="i"/>
                </div>
            </div>
            <h2 class="mt-3">
               Popular Series
            </h2>
            <div class="row">
                <div class="col-2" v-for="(singleSerie, i) in store.series" :key="i">
                    <singleMultimedia :multiData="singleSerie" :index="i"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

.container {
     overflow: hidden;
     
    .row {
        flex-wrap: nowrap;
    }
}

main {
    background-color: black;
    padding-top: 20px;
}
</style>