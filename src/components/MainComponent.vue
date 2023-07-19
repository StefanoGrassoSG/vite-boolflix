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
                <div class="col-3" v-for="(singleMovie, i) in store.movies" :key="i">
                    <div class="single-card h-100">
                        <div class="title">
                            <span class="fw-bold">
                                Title:
                            </span>
                            <span>
                               {{ store.movies[i].title }}
                            </span>
                        </div>
                        <div class="original-title">
                            <span class="fw-bold">
                                Original Title:
                            </span>
                            <span>
                                {{ store.movies[i].original_title }}
                            </span>
                        </div>
                        <div class="score">
                            <span class="fw-bold">
                                Vote:
                            </span>
                            <span>
                                {{ store.movies[i].vote_average }}
                            </span>
                        </div>
                        <div class="overview">
                            <span class="fw-bold">
                                Overview:
                            </span>
                            <span>
                                {{ store.movies[i].overview }}
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