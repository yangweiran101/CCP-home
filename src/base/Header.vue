<template>
  <div class="header">
    <slot></slot>
    <router-link to="/Home" v-if="$route.path !=='/Home'&&$route.path !=='/Msg'&&$route.path !=='/My'" class="back"><i class="iconfont icon-fanhui" @click="goBack"></i></router-link>
    <i></i>
  </div>
</template>

<script>
  export default {
    name: "Header",
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    z-index: 998;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    background: #c50206;
    text-align: center;
    line-height: 44px;
    font-weight: 300;
    color: #fff;
    font-size: 18px;
    .back {
      position: absolute;
      left: 10px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }
    /*img{*/
    /*position: absolute;*/
    /*left: 10px;*/
    /*top: 8px;*/
    /*width: 134px;*/
    /*height: 32px;*/
    /*}*/
  }
</style>
