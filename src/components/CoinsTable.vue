<template>
  <div class="container bg-white p-3 shadow rounded">
      <div class="row py-2">
          <div class="col">
              <coins-header></coins-header>
              <div class="table-responsive">
                  <table class="table table-striped table-hover">
                      <thead>
                          <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Price</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="coin in coins" :key="coin.id">
                              <td>
                                  {{coin.id}}
                              </td>
                              <td>
                                  {{coin.name}}
                              </td>
                              <td>
                                  {{coin.price}}
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import CoinsHeader from './CoinsHeader'
export default {
    name: 'CoinsTable',
    components: {
        CoinsHeader
    },
    mounted () {
        this.$store.dispatch('fetchCoins')
    },
    computed: mapState(['coins'])
}
</script>

<style>

</style>