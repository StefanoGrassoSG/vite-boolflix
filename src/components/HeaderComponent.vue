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
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="col-auto">
                        <h1>
                            BOOLFLIX
                        </h1>
                    </div>
                    <div class="col-auto">
                        <input v-model="store.searchText" type="text" placeholder="Search">
                        <button @click="$emit('filter')">Go</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #0A0A0A;
    padding: 20px 0;
    color: white;
}
</style>