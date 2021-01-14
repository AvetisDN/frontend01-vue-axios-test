<template>
  <div id="app" class="w-100 vh-100 bg-light pt-3">
    <coins-table></coins-table>
  </div>
</template>

<script>
import CoinsTable from './components/CoinsTable.vue'

export default {
  name: 'App',
  components: {
    CoinsTable
  }
}
</script>

<style>
</style>
