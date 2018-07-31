<template>
  <div id="box">
    <Header class="onepoint">民主评议</Header>
    <div class="one-box">
      <div @click="setPer" class="btn1">个人总结</div>
      <div class="btn2" @click="setDis">民主评议</div>
    </div>
  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  export default {
    components:{
      Header
    },
    methods:{
      setPer(){
        this.$router.push({path:'/Gerenzongjie',query:{reviewsId:this.$route.query.reviewsId}})
      },
      setDis(){
        this.$router.push({path:'/Pingyi',query:{reviewsId:this.$route.query.reviewsId}})
      }
    },
    created(){

    }
  }
</script>

<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;
    background-color: #fff;
  }
  .one-box{
    margin-top: 44px;
    position: relative;
    width: 375px;
    height: 667px;
    .btn1{
      width:177px;
      height: 37px;
      background-color: #ef473a;
      padding: 10px;
      border: none;
      border-radius: 5px;
      color: #fff;
      margin: 0 auto;
      font-size: 18px;
      position: absolute;
      top: 228px;
      left: 89px;
      text-align: center;
      line-height: 37px;
    }
    .btn2{
      width:177px;
      height: 37px;
      background-color: #ef473a;
      padding: 10px;
      border: none;
      border-radius: 5px;
      color: #fff;
      margin: 0 auto;
      font-size: 18px;
      position: absolute;
      top: 306px;
      left: 89px;
      text-align: center;
      line-height: 37px;
    }
  }

</style>
