<template>
  <div>
        <h4>Crypto Cash Table (total: <span class="text-primary">{{count}}</span>)</h4>
        <hr>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'CoinsHeader',
    mounted () {
        this.$store.dispatch('countCoins')
    },
    computed: mapState(['count'])
}
</script>

<style>

</style>