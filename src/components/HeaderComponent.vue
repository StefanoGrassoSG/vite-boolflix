<script >
import { store } from '../store.js'
import DropdownComponent from './DropdownComponent.vue';

export default {
  data() {
    return {
        store
    }
  },
  components: {
    DropdownComponent
  }
}
</script>

<template>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <div class="col-auto">
                        <div class="logo-container d-flex align-items-center">
                            <img class="img-fluid logo" @click="$emit('mainMenu')" src="../assets/img/logovero.png" alt="">
                            <div>
                                <div @click="$emit('getGenere')" class="browse text-danger d-flex align-items-center">
                                    <div class="fs-2 ms-4">
                                        Browse
                                    </div>
                                    <div class="arrow">
                                        <i class="fa-solid fa-sort-down fa-2xs ms-2"></i>
                                    </div>  
                                </div>
                                <DropdownComponent />
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <input v-model="store.searchText" type="text" placeholder="Search">
                        <button class="bg-warning" @click="$emit('filter')">Go</button>
                        <i class="fa-solid fa-bell ms-3 me-3" style="color: #fafafa;"></i>
                        <div class="d-inline-block">
                            Stefano
                        </div>
                        <span>
                            <i class="fa-solid fa-sort-down fa-2xs text text-white ms-2"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background: rgb(2,0,36);
    background: linear-gradient(176deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(28,30,31,1) 100%);
    padding: 20px 0;
    color: white;

        .logo-container {
            width: 250px;

            .logo {
                cursor: pointer;
                transition: all 0.2s ease-in-out;
            }

            .logo:hover{
                transform: scale(1.1);
                filter: brightness(110%);
            }
            .browse {
                cursor: pointer;
                user-select: none;
            }

            .browse:hover {
                color: white !important;
            }
        }
}
</style>