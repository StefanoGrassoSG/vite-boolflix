<script >
export default {
  data() {
    return {
        selectedCardIndex: -1,
        languageToFlagMapping: {
        it: 'it',
        en: 'gb',
        es: 'es',
        pt: 'br'
    },
    }
 },
 props: {
    multiData: {
        type: Object,
        default: null
    },
    index:  {
        type: Number,
        default: null
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
    showInfo(index) {
        this.selectedCardIndex = index;
    },
    hideInfo() {
      this.selectedCardIndex = -1;
    }
  }
}
</script>

<template>
   <div class="single-card bg-white h-100" @mouseenter="showInfo(index)" @mouseleave="hideInfo()">
        <div class="img" v-if="selectedCardIndex !== index">
            <img class="img-fluid" :src="`https://image.tmdb.org/t/p/w342/${multiData.poster_path}`" alt="">
        </div>
        <div class="info" v-if="selectedCardIndex === index">
            <div class="title">
                <span class="fw-bold">
                    Title:
                </span>
                <span>
                    {{ multiData.title ?? multiData.name }}
                </span>
            </div>
            <div class="original-title">
                <span class="fw-bold">
                    Original Title:
                </span>
                <span>
                    {{ multiData.original_title ?? multiData.original_name }}
                </span>
            </div>
            <div class="language" v-if="multiData.original_language != null">
                <span class="fw-bold">
                    Language:
                </span>
                <span v-html="stringToFlag(multiData)"></span>
            </div>
            <div class="score">
                <span class="fw-bold">
                    Vote:
                </span>
                <span>
                    <template v-for="number in 5" :key="number">
                    <i
                        :class="{
                        'fas fa-star text-warning': number <=  convertNumber(multiData),
                        'far fa-star': number > convertNumber(multiData)
                        }"
                        class="star-icon"
                    ></i>
                    </template>
                </span>
            </div>
            <div class="overview" v-if="multiData.overview != ''">
                <span class="fw-bold">
                    Overview:
                </span>
                <span>
                    {{ multiData.overview }}
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col-2 {
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
        -webkit-line-clamp: 10; /* Imposta il numero massimo di righe desiderato */
        -webkit-box-orient: vertical;
    }
}
}
</style>