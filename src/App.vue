<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/header/header.vue'

export default {
  data () {
    return {
      data: {}
    }
  },
  mounted: function () {
    this.getData()
  },
  methods: {
    getData: function () {
      var self = this
      this.$http.get('/api/data', {
        params: {
         OPT: '200'
        }
      }).then(function (response) {
        self.data = response.data.data
        console.log(self.data)
      }, function () {
        console.log('error')
      })
    }
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height: 100%
    background :red;

</style>
