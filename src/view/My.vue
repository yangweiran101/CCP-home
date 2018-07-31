<template>
    <div class="My">
      <Header class="header">我的党建</Header>
      <!--头部-->
      <div class="my-box">
        <div class="touxiang">
          <img src="../assets/bt_bg.png" v-if="status.data =='未登录'">
          <img :src="this.Info.img" v-else="status.data !=='未登录'">
        </div>
        <div class="nologin" v-if="status.data =='未登录'">
          <div class="gologin" @click="gologin">你还没有登录，请登录</div>
        </div>
      </div>
      <!--头部end-->
      <!--表单-->
      <div class="list">
        <router-link to="/Gerenxinxi" class="item">
          <img src="../assets/person.png">
          <span class="listzi">个人信息</span>
          <i class="iconfont icon-gengduojiantou"></i>
        </router-link>
        <router-link to="/Gerenjifen" class="item">
          <img src="../assets/lxjf.png">
          <span class="listzi">个人量化积分</span>
          <i class="iconfont icon-gengduojiantou"></i>
        </router-link>
        <router-link to="/Xiugaimima" class="item">
          <img src="../assets/xgmm.png" >
          <span class="listzi">修改密码</span>
          <i class="iconfont icon-gengduojiantou"></i>
        </router-link>
        <router-link to="/Jiaonadangfei" class="item">
          <img src="../assets/icon3.png" >
          <span class="listzi">党费缴纳</span>
          <i class="iconfont icon-gengduojiantou"></i>
        </router-link>
        <div v-if="status.data !=='未登录'">
          <mt-button size="large" class="btn" @click="takeout">退出登录</mt-button>
        </div>
      </div>
      <!--表单end-->
      <Tabbar></Tabbar>
    </div>
</template>

<script>
  import Header from '../base/Header.vue'
  import Tabbar from '../base/Tabbar.vue'

  export default {
    components:{
      Header,
      Tabbar
    },
    data(){
      return{
        status:{},
        Info:{}
      }
    },
    methods: {
      isLogin() {
        this.$axios.get('isLogin').then(res => {
          console.log(res);
          this.status = res;
          if (res.data=='登陆成功'){
            this.getQian();
          }
        })
      },
      gologin(){
        this.$router.push({path:'/Login',query:{mark:"My"}});
      },
      getQian(){
        this.$axios.get('getQian').then(res=>{
          console.log(res);
          this.Info=res[0]
        })
      },
      takeout(){
        this.$axios.get('logout').then(res=>{
          console.log(res);
          if(res.data=='退出登录成功'){
            this.$router.push({path:'/Login',query:{mark:"My"}});
          }
        })
      }
    },

    created(){
      this.isLogin();
      // this.getQian();
    }
  }
</script>

<style scoped lang="less">
  .My{
    background: #fff;
    bottom: 53px;
    top: 44px;
    position: absolute;
    right: 0;
    left: 0;
    overflow: hidden;
    margin-top: -2px;
    padding-top: 1px;
    margin-bottom: -1px;
    width: auto;
    height: auto;
    .my-box{
      height: 140.63px;
      text-align: center;
      background: #c50206;
      .touxiang img{
        margin-top: 36.5px;
        width: 62.5px;
        height: 62.5px;
        border-radius: 50%;
      }
      .nologin{
        text-align: center;
        font-size: 12px;
        margin: 5px auto;
        .gologin{
          color: white;
        }
      }
    }
    .list{
      height: 211px;
      .btn {
        width: 90%;
        margin: 40px auto;
        font-size: 16px;
        color: white;
        background: #ef473a;
      }
      .item{
        padding: 16px 54px;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
        position: relative;
        display: block;
        font-size: 16px;
        img{
          padding: 10px 10px 10px 0;
          left: 11px;
          display: flex;
          align-items: center;
          position: absolute;
          top: 0;
          height: 32px;
          width: 32px;
        }
        .iconfont{
          left: auto;
          right: 11px;
          display: flex;
          align-items: center;
          position: absolute;
          top: 0;
          font-size: 15px;
        }
      }
    }
  }
/*e2oklbpfc*/
</style>
