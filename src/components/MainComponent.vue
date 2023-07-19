<script >
import { store } from '../store.js'


export default {
  data() {
    return {
        store,
        selectedCardIndex: -1
    }
  },
  methods: {
    stringToFlag(element) {
        if(element.original_language == 'it') {
            return '<span class="fi fi-it"></span>';
        }
        else if(element.original_language == 'en') {
            return '<span class="fi fi-gb"></span>';
        }
        else if(element.original_language == 'es') {
            return '<span class="fi fi-es"></span>';
        }
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
  }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-3" v-for="(singleMovie, i) in store.movies" :key="i">
                    <div class="single-card h-100" @mouseenter="showInfo(i)" @mouseleave="hideInfo()">
                        <div class="img" v-if="selectedCardIndex !== i">
                            <img class="img-fluid" :src="`https://image.tmdb.org/t/p/w342/${singleMovie.poster_path}`" alt="">
                        </div>
                        <div class="info" v-if="selectedCardIndex === i">
                            <div class="title">
                                <span class="fw-bold">
                                    Title:
                                </span>
                                <span>
                                    {{ singleMovie.title }}
                                </span>
                            </div>
                            <div class="original-title">
                                <span class="fw-bold">
                                    Original Title:
                                </span>
                                <span>
                                    {{ singleMovie.original_title }}
                                </span>
                            </div>
                            <div class="language" v-if="singleMovie.original_language != null">
                                <span class="fw-bold">
                                    Language:
                                </span>
                                <span v-html="stringToFlag(singleMovie)"></span>
                            </div>
                            <div class="score">
                                <span class="fw-bold">
                                    Vote:
                                </span>
                                <span>
                                    <template v-for="number in 5" :key="number">
                                    <i
                                        :class="{
                                        'fas fa-star text-warning': number <=  convertNumber(singleMovie),
                                        'far fa-star': number > convertNumber(singleMovie)
                                        }"
                                        class="star-icon"
                                    ></i>
                                    </template>
                                </span>
                            </div>
                            <div class="overview">
                                <span class="fw-bold">
                                    Overview:
                                </span>
                                <span>
                                    {{ singleMovie.overview }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.single-card {
    border: 5px solid black;
    cursor: pointer;
}

.col-3 {
    margin-bottom: 15px;
}
</style>