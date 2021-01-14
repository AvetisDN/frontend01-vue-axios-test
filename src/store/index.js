import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        coins: [],
        count: 0
    },
    actions: {
        fetchCoins({commit}) {
            axios.get('http://localhost:4000/results')
                .then(response => response.data)
                .then(coins => {
                    // console.log(coins);
                    commit('SET_COINS', coins)
                })
                .catch(error => {
                    console.error(error.message);
                })
        },
        countCoins({commit}) {
            axios.get('http://localhost:4000/results')
                .then(response => response.data)
                .then(coins => {
                    // console.log(coins);
                    commit('SET_COUNT', coins.length)
                })
                .catch(error => {
                    console.error(error.message);
                })
        }
    },
    mutations: {
        SET_COINS(state, coins) {
            state.coins = coins
        },
        SET_COUNT(state, count) {
            state.count = count
        }
    }
})