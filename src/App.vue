<template>
  <div id="app">
    <v-header></v-header>
    <div class="content">
      <ul v-for="item in goods.lists">
        <div class="info">
          <div class="container">
            <div class="pic">
              <img :src="item.pic"/>
            </div>
            <div class="desc">
              {{item.songname}}
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/header/header.vue'

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
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height: 100%
  .content
    margin-top :60px
    width :100%
    overflow :hidden
    .info
      margin :20px 0
      width: 100%
      background-color: #fff
      .container
        width: 90%
        background-color: #fff
        margin: 0 auto
        box-shadow: 0 0 30px -7px rgba(0, 0, 0, 0.3)
        padding: 5px 0
        border-radius: 4px
      .pic
        width:94%
        margin :3%
        img
          width:100%
      .desc
        font-size: 16px;
        font-weight: 400;
        margin: 3%;
        padding: 5% 0;
        width: 80%;
</style>
