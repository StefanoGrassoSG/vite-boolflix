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
    <main @click="$emit('close')">
        <div class="container" :style="{ overflow: this.store.containeroverflow }">
            <div class="movies" v-if="store.selectedSeries == false">
                <h2 v-if="store.titleUpdate == false && store.onlySelectedGenere == false">
                    Popular Movies
                </h2>
                <h2 v-else-if="store.onlySelectedGenere == true">
                    {{ this.store.selectedGenere }} Movies
                </h2>
                <h2 v-else>
                     Movies
                </h2>
                <div class="row" :style="{ flexWrap: this.store.rowFlexWrap }">
                    <div class="col-2" v-for="(singleMovie, i) in store.movies" :key="i">
                        <singleMultimedia :multiData="singleMovie" :index="i"/>
                    </div>
                </div>
            </div>

            <div class="series" v-if="store.onlySelectedGenere == false">
                <h2 class="mt-3" v-if="store.titleUpdate == false && store.series.length > 1 && this.store.selectedSeries == false">
                     Popular Series
                </h2>
                <h2 v-else-if="this.store.selectedSeries == true"> 
                    {{ this.store.selectedGenere }} Series
                </h2>
                <h2 v-else v-if="store.series.length > 0">
                     Series
                </h2>
                <div class="row" :style="{ flexWrap: this.store.rowFlexWrap }">
                    <div class="col-2" v-for="(singleSerie, i) in store.series" :key="i">
                        <singleMultimedia :multiData="singleSerie" :index="i"/>
                    </div>
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
        margin-bottom: 60px;
    }
}

main {
    background-color: black;
    padding-top: 20px;
}
</style>