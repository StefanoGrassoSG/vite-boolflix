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
    <div class="dropmenu ms-4" v-if="store.drop == true">
        <h4>
            Categories
        </h4>
        <div class="cat-titles d-flex">
            <h6>
                Movies
            </h6>
            <h6 class="series-title"> 
                Series
            </h6>
        </div>
        <div class="list d-flex">
            <ul>
                <li v-for="(singleGenere, i) in store.generi.genres" :key="i">
                    {{ singleGenere.name }}
                </li>
            </ul>
            <ul>
                <li v-for="(singlegenere, j) in store.generitv.genres" :key="j">
                    {{ singlegenere.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dropmenu {
    position: absolute;
    background-color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.1);
    z-index: 999;

    h4 {
        color: black;
        font-weight: 900;
        padding: 10px;
        margin: 0;
    }

    h6 {
        color: red;
        font-weight: 600;
        padding-left: 10px;
    }

    .series-title {
        margin-left: 54px;
    }

    ul {
        list-style: none;
        color: black;
        padding: 10px;
        padding-top: 0;

        li {
            user-select: none;
            cursor: pointer;
        }

        li:hover {
            color: red;
            transform: scale(1.1);
        }
    }
}
</style>