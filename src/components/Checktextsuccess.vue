<template>
  <div class="review">
    <Header>个人总结</Header>
    <div class="sxcon">
      <div class="shentu">
        <img src="../assets/pass.png">
        <p>审核已通过</p>
      </div>
      <router-link to="/Hands">
        <button>关闭</button>
      </router-link>
    </div>


  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  export default {
    components:{
      Header
    }
  }
</script>

<style scoped>
  .review{
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .fnhui .iconfont{
    float: left;
    font-size: 31px;
    color: #fff;
  }
  .sxcon{
    width: 300px;
    margin: 100px auto;
    height: 900px;
  }
  .sxcon img{
    height: 80px;
    width: 80px;

  }
  .shentu{
    height: 200px;
    width: 100%;
    margin: 20px auto;
    color: #555555;
  }
  .sxcon button{
    margin: 30px auto;
    height: 43px;
    width: 70%;
    border-radius: 6px;
    background-color: #C50206;
    border: 0;
    color: white;
  }


</style>
