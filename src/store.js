import { reactive } from 'vue';

export const store = reactive({
    movies: [],
    series: [],
    generi: [],
    generitv: [],
    searchText:'',
    titleUpdate : false,
    drop: false
})