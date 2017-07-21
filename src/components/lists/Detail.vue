<template>
	<div class="detail">
    <v-detailheader></v-detailheader>
		<div class="container1">
      <div class="info">
        <div class="container">
          <div class="pic">
            <img :src="this.$route.params.id.imgurl"/>
          </div>
          <div class="desc">
            {{this.$route.params.id.songname}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import detailheader from './detailheader.vue'

  export default {
    components: {
      'v-detailheader': detailheader
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  .container1
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
