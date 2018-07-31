<template>
  <div class="Home">
    <Header>
      <img src="../assets/logo.png" alt="" class="pic">
      <div @click="login" class="login"><span>登录</span></div>
    </Header>
    <Tabbar></Tabbar>
    <!--轮播图-->
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item v-for="item in sliders" :key="item.id" >
        <div @click="content(item._id)">
          <img :src="item.img" alt="" class="pic1" >
          <div class="title"><span>{{item.title}}</span></div>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <!--轮播图end-->
    <!--菜单-->
    <div class="content">
      <div class="row">
        <router-link to="/News" class="item">
          <div><img src="../assets/icon_01.png" alt="" class="pic2"></div>
          <div class="row-title">信工新闻眼</div>
        </router-link>
        <router-link to="/Hands" class="item">
          <div><img src="../assets/icon_03.png" alt="" class="pic2"></div>
          <div class="row-title">掌上组织生活</div>
        </router-link>
        <router-link to="/partycloud" class="item">
          <div><img src="../assets/icon_05.png" alt="" class="pic2"></div>
          <div class="row-title">党员云互动</div>
        </router-link>
      </div>
      <div class="row">
        <router-link to="/Onepoint" class="item">
          <div><img src="../assets/icon_04.png" alt="" class="pic2"></div>
          <div class="row-title">党建一点通</div>
        </router-link>
        <router-link to="/Liangshenfen" class="item">
          <div><img src="../assets/icon_06.png" alt="" class="pic2"></div>
          <div class="row-title">党员亮身份</div>
        </router-link>
        <router-link to="/Dangshishangdejintian" class="item">
          <div><img src="../assets/icon_02.png" alt="" class="pic2"></div>
          <div class="row-title">党史上的今天</div>
        </router-link>
      </div>
    </div>
    <!--菜单end-->
    <!--picture-->
    <div class="banner">
      <img src="../assets/banner02.png" class="pic3">
    </div>
    <div class="footer-menu">
      <div class="menu-left">
      </div>
      <div class="menu-right">
        <div class="menu-row">
          <router-link to="/Suishisuidixue"></router-link>
          <router-link to="/Suishisuidipai"></router-link>
        </div>
        <div class="menu-row">
          <router-link to="/Zhidujianshe"></router-link>
          <router-link to="/Tesehuodong"></router-link>
        </div>
      </div>
    </div>
    <!--picture-->
  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  import Tabbar from '../base/Tabbar.vue'


  export default {

    data() {
      return {
        sliders: []
      }
    },
    methods: {
      getSlider(){
        this.$axios.get('getQianLunBoTus').then(res=>{
          this.sliders =res;
          console.log(res);
        })
      },
      content(id){
        this.$router.push({path:'/Swipecontent',query:{id}})
      },
      login(){
        this.$router.push({path:'/Login',query:{mark:"My"}});
      }
    },
    created() {
      this.getSlider();
    },
    components: {
      Header,
      Tabbar
    }
  }
</script>

<style scoped>
  @import "../style/Home.css";
</style>
