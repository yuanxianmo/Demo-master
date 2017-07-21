<template>
  <div class="DetailHeader">
    <div class="menu">
      <router-link to="/">
        <i class="icon-arrow_lift"></i>
      </router-link>
    </div>
    <div class="title">
      <h1>{{goods.names}}</h1>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        goods: {}
      }
    },
    mounted: function () {
      this.getData()
    },
    methods: {
      getData: function () {
        let self = this
        this.$http.get('https://raw.githubusercontent.com/yuanxianmo/Demo-master/master/data.json').then((res) => {
          let response = JSON.parse(res.bodyText)
          self.goods = response.goods
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .DetailHeader
    position: fixed
    display :flex
    top:0
    left: 0
    width :100%
    height 46px
    line-height :46px
    background :#FFF
    text-align :center
    box-shadow: 0 2px 10px #D8D8D8
    .menu
      a
        display block
        i
          flex:0 0 46px
          font-size :22px
    .title
      font-size :22px
      flex :1
    .write
      flex:0 0 46px
      font-size :22px
</style>
