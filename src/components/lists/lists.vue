<template>
  <div class="content">

      <div v-for="(item, index) in goods.lists" class="info" @click="mapMun(index)">
        <router-link :to="{ name: 'detail', params: { id: item }}">
          <div class="container">
            <div class="pic">
              <img :src="item.pic"/>
            </div>
            <div class="desc">
              {{item.songname}}
            </div>
          </div>
        </router-link>
      </div>

  </div>
</template>

<script>
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
      },
      mapMun (index) {
        console.log(index)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    margin-top :60px
    width :100%
    overflow :hidden
    .info
      margin :20px 0
      width: 100%
      background-color: #fff
      a
        display :block
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
