<template>
    <div class="footer">
      <router-link to="/Home" >
        <img src="../picture/党_red.png" alt="" class="pic" v-if="$route.path =='/Home'">
        <img src="../picture/党_grey.png" alt="" class="pic" v-else="$route.path !=='/Home'">
        <span>首页</span>
      </router-link>
      <router-link to="/Msg">
        <img src="../picture/消息_red.png" alt="" class="pic" v-if="$route.path =='/Msg'">
        <img src="../picture/消息_grey.png" alt="" class="pic" v-else="$route.path !=='/Msg'">
        <span>通知早知道</span>
      </router-link>
      <router-link to="/My">
        <img src="../picture/会员_red.png" alt="" class="pic" v-if="$route.path =='/My'">
        <img src="../picture/会员_grey.png" alt="" class="pic" v-else="$route.path !=='/My'">
        <span>我的党建</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped lang="less">
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    border-top: 1px  solid #ccc;
    display: flex;
    background: #ffffff;
    a{
      flex:1;
      display: flex;
      flex-direction: column;
      color: darkgray;
      justify-content: center;
      align-items: center;
      font-size: 10rpx;
      .pic1{
        width: 21px;
        height: 26.8px;
        padding-top: 2px;
      }
    }
    a.router-link-active{
      color: red;
      border-top: 2px solid red;
    }
  }
</style>
