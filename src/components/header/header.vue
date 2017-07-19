<template>
  <div class="header">
    <div class="menu" @click="ShowDetail">
      <i class="icon-diamond"></i>
    </div>
    <div class="title">
      <h1>{{goods.names}}</h1>
    </div>
    <div class="write" @click="alertShow">
      <i class="icon-quill"></i>
    </div>
    <!--伪弹出框-->
    <div v-show="AlShow" class="AlShow" @click="AlHide">
      {{goods.todevelop}}
    </div>
    <!--end-->
    <!--遮罩层-->
    <div v-show="detailShow" class="detail">
      <div class="slidebar">
        <div class="useravatar">
          <div class="avatar">
           <img :src="goods.avatar"/>
          </div>
          <div class="names">
            {{goods.names}}
          </div>
        </div>
        <ul class="lists">
          <li class="item">
            <i class="icon-user"></i>
            <div class="text">个人</div>
          </li>
          <li class="item">
            <i class="icon-eye "></i>
            <div class="text">关注</div>
          </li>
          <li class="item">
            <i class="icon-bubbles3 "></i>
            <div class="text">消息</div>
          </li>
          <li class="item">
            <i class="icon-cog "></i>
            <div class="text">设置</div>
          </li>
        </ul>
      </div>
      <div class="slidebarRight" @click="hideDetail"></div>
    </div>
    <!--end-->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      goods: {},
      detailShow: false,
      AlShow: false
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
    ShowDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    },
    alertShow () {
     this.AlShow = true
    },
    AlHide () {
     this.AlShow = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
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
      flex:0 0 46px
      font-size :22px
    .title
      font-size :22px
      flex :1
    .write
      flex:0 0 46px
      font-size :22px
    .AlShow
      position :fixed
      z-index:100
      top:0
      left:0
      width :100%
      height :200px
      background :rgba(0,0,0,0.6)
      text-align :center
      line-height :200px
      color :#FFF
      font-size :24px
      animation:ALert .5s
      -moz-animation :ALert .5s
      -o-animation :ALert .5s
      -webkit-animation : ALert .5s
    .detail
      position:fixed
      display:flex
      z-index:100
      top:0
      left:0
      width:100%
      height:100%
      overflow: hidden
      background :rgba(0,0,0,0.3)
      animation: detail .5s
      -moz-animation: detail .5s
      -o-animation:detail .5s
      -webkit-animation: detai .5s
      .slidebar
        flex:0 0 66%;
        width:66%;
        background :#252525
        .useravatar
          vertical-align :middle
          align-items: center
          flex-direction:column
          margin :20% 0 10% 0
          .avatar
            width:100px
            height: 100px
            margin :0 auto
            img
              width:100px
              height: 100px
              -webkit-border-radius: 50%
              -moz-border-radius:50%
              border-radius:50%
              border:2px solid #404040
              margin :0 auto
          .names
            font-size :20px
            color:#FFF

        .lists
          position :relative
          .item
            padding :0 20px
            display :flex
            height:56px
            line-height :56px
            font-size :14px
            color: #707070
            border-bottom :1px solid #404040
            align-items:center
            justify-content: center
            box-sizing: border-box
            white-space: nowrap
            padding-left :20px
            .icon-user
              flex:0 0 5%
            .text
              flex:0 0 50%

      .slidebarRight
        flex :0 0 34%
  @keyframes detai
    from
      width:0%
    to
      width:100%
  @-moz-keyframes detai
    from
      width:0%
    to
      width:100%
  @-webkit-keyframes detai
    from
      width: 0%
    to
      width:100%
  @-o-keyframes detai
    from
      width: 0%
    to
     width: 100%
  @keyframes ALert
    from
      height:0
    to
      height:200px
  @-moz-keyframes ALert
    from
      height:0
    to
      height:200px
  @-webkit-keyframes ALert
    from
      height:0
    to
      height:200px
  @-o-keyframes ALert
    from
      height:0
    to
      height:200px

</style>
