<script >
import { store } from '../store.js'

export default {
  data() {
    return {
        store
    }
  }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col d-flex" v-for="(singleMovie, i) in store.movies[0]" :key="i">
                    <div class="single-card">
                        <div class="title">
                            <span>
                                Title:
                            </span>
                            <span>
                               {{ store.movies[0][i].title }}
                            </span>
                        </div>
                        <div class="original-title">
                            <span>
                                Original Title:
                            </span>
                            <span>
                                {{ store.movies[0][i].original_title }}
                            </span>
                        </div>
                        <div class="score">
                            <span>
                                Vote:
                            </span>
                            <span>
                                {{ store.movies[0][i].vote_average }}
                            </span>
                        </div>
                        <div class="overview">
                            <span>
                                Overview:
                            </span>
                            <span>
                                {{ store.movies[0][i].overview }}
                            </span>
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
}
</style>