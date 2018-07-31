<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!--<Tabbar></Tabbar>-->
  </div>
</template>

<script>
// import Tabbar from './base/Tabbar.vue'
import Header from './base/Header.vue'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
  @import "style/init.css";
  #app{
    width: 100%;
  }
  Header{position: fixed;
    width: 100%;}
</style>
