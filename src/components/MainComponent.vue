<script >
import { store } from '../store.js'
import singleMultimedia from './singleMultimedia.vue';

export default {
  data() {
    return {
        store,
        selectedCardIndex: -1,
        languageToFlagMapping: {
        it: 'it',
        en: 'gb',
        es: 'es',
    },
    }
  },
  methods: {
    stringToFlag(element) {
      const flagCode = this.languageToFlagMapping[element.original_language];

      if (flagCode) {
        return `<span class="fi fi-${flagCode}"></span>`;
      }

      return '<span>Unknown Language</span>';
    },
    convertNumber(vote) {
        return Math.floor(vote.vote_average / 2);
    },
    showInfo(i) {
        this.selectedCardIndex = i;
    },
    hideInfo() {
      this.selectedCardIndex = -1;
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
            <h1>
               Popular Movies
            </h1>
            <div class="row">
                <div class="col-3" v-for="(singleMovie, i) in store.movies" :key="i">
                    <singleMultimedia :multiData="singleMovie" :index="i"/>
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
.col-3 {
    margin-bottom: 15px;
    max-height: 450px;

    .single-card {
    border: 5px solid black;
    cursor: pointer;
    .info {
        padding: 10px 10px 0px 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 18; /* Imposta il numero massimo di righe desiderato */
        -webkit-box-orient: vertical;
    }
}
}
</style>