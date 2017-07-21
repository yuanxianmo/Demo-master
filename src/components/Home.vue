<template>
  <div class="container">
    <v-header></v-header>
    <list></list>
  </div>
</template>

<style>
</style>

<script type="text/javascript">
  import Header from './header/header.vue'
  import List from './lists/lists.vue'

  export default {
    data () {
      return {
      }
    },
    components: {
      'v-header': Header,
      'list': List
    }
  }
</script>
