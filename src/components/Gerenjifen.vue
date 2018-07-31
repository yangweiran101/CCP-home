<template>
  <div class="perscore-container">
    <Header>个人量化积分</Header>
    <div class="perscore-content">
      <div class="perscore-banner">
        <img src="../assets/jifen.png" alt="">
        <span>{{number}}</span>
      </div>

      <router-link to="/Scoredetails" class="perscore-item">
        <img src="../assets/lxjf.png" alt="">
        <span>积分明细</span>
        <i class="iconfont icon-qianjin"></i>
      </router-link>

      <div class="scoreregu">
        <span>积分规则</span>
        <img src="../assets/wenhao.png" alt="">
      </div>

      <div class="perscore-list">
        <div class="perscore-item1">
          <span class="perscore-icon1">登陆APP</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">完善个人信息</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">查看积分</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">按时交纳党费</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">查看通知</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">了解学院工作动态</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">上交思想汇报经审核通过</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">主动学习相关文件</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">认真撰写心得总结并上交，经审核通过</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">提交个人总结，并参与评议</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">积极参与互动</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">学习党建知识</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">学习党史</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">创先争优事迹</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">学党章，学习近平总书记系列讲话</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">用镜头记录两学一做过程中令人感动的人和事</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">关注并积极参与特色活动</span>
          <span class="perscore-icon2">5</span>
        </div>
        <div class="perscore-item1">
          <span class="perscore-icon1">制度化、常态化建设</span>
          <span class="perscore-icon2">5</span>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  export default {
    name: "perscore",
    components:{
      Header
    },
    data(){
      return{
      number:''
      }
    },
    methods:{
      isLogin(){
        this.$axios.get('isLogin').then(res => {
          console.log(res);
          if (res.data=='未登录'){
            this.$router.push({path:'/Login',query:{mark:"Gerenjifen"}});
          }else {
            this.getScore();
          }
        })
      },
      getScore(){
        this.$axios.get('getScores').then(res=>{
          console.log(res);
          this.number = res.Num;
        })
      }
    },
    created(){
      this.isLogin();
    }
  }
</script>

<style scoped>
  .perscore-content{
    background: #fff;
    overflow-y: auto;
    left: 0;right: 0;
    width:100%;
    /*height: auto;*/
    margin-top: 44px;
  }
  .perscore-banner{
    position: relative;
    width: 100%;
  }
  .perscore-banner img{
    width: 100%;
  }
  .perscore-banner span{
    font-size: 14px;
    color: white;
    /*这三行用来居中*/
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%, -50%);
  }
  .perscore-item{
    color: #666;
    font-size: 14px;
    padding: 12px;
    border: 1px solid #ddd;
    background: white;
    position: relative;
    display: block;
    margin-top: -5px;
  }
  .perscore-item img{
    width: 32px;
    height: 32px;
  }
  .perscore-item span{
    position: absolute;
    top: 18px;left: 53px;
  }
  .perscore-item i{
    font-size: 24px;
    color: #888;
    position: absolute;
    right: 13px;top: 20px;
  }
  .scoreregu{
    position:relative ;
    background: rgb(238,238,238);
    height: 35px;
    display: flex;
    align-items: center;
  }
  .scoreregu span{
    font-size: 14px;
    color: #222;
    margin-left: 10px;
  }
  .scoreregu img{
    position: absolute;
    right: 10px;top: 9px;
  }
  .perscore-list{
    padding: 1px 0;
  }
  .perscore-item1{
    border: 1px solid #ddd;
    background: white;
    color: #444;
    font-size: 14px;
    position: relative;
    display: block;
    height: 18px;
    margin: -1px;
    padding: 8px;
  }
  .perscore-icon1,.perscore-icon2{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    height: 100%;
  }
  .perscore-icon1{
    color: rgb(153,153,153);
  }
  .perscore-icon2{
    font-size: 14px;
    color: red;
    position: absolute;
    right: 11px;
  }

</style>
