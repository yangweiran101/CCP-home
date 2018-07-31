<template>
  <div class="box">
    <Header>缴纳党费</Header>
    <div class="content">
      <div class="perscore-item" @click="payone()">
        <i class="iconfont icon-weixin" id="i-left1"></i>
        <span>微信</span>
        <i class="iconfont icon-qianjin" id="i-right1"></i>
      </div>
      <div class="perscore-item" @click="paytwo()">
        <i class="iconfont icon-zhifubao" id="i-left2"></i>
        <span>支付宝</span>
        <i class="iconfont icon-qianjin" id="i-right2"></i>
      </div>
      <mt-popup v-model="popupVisible" popup-transition="popup-fade">
      <img src="../assets/payone.jpg" v-if="one">
      <img src="../assets/paytwo.jpg"  v-if="two">
      </mt-popup>
    </div>
  </div>
</template>

<script>
  import Header from '../base/Header.vue'
    export default {
      components:{
        Header
      },
      data(){
        return{
          popupVisible:false,
          one:false,
          two:false,
        }
      },
      name: "Jiaonadangfei",
      methods:{
        payone(){
          this.popupVisible=true;
          this.one=true;
          this.two=false
        },
        paytwo(){
          this.popupVisible=true;
          this.one=false;
          this.two=true
        },

      }
    }
</script>

<style scoped>
  .content{
    margin-top: 44px;
  }
  .perscore-item{
    width: 260px;
    height: 20px;
    padding: 20px 54px 20px 61px;
    position: relative;
  }
  .perscore-item span{
    position: absolute;
    top: 24px;left: 70px;
    font-size: 18px;
  }
  img{
    width:100%;
  }
  #i-left1{
    font-size: 36px;
    color: green;
    position: absolute;
    left: 13px;
    top: 20px;
  }
  #i-left2{
    font-size: 36px;
    color: deepskyblue;
    position: absolute;
    left: 13px;
    top: 20px;
  }
  #i-right1,#i-right2{
    font-size: 24px;
    color: #888;
    position: absolute;
    right: 13px;
    top: 20px;
  }
</style>
