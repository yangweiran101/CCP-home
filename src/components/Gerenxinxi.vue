<template>
  <div id="box">
    <Header>
      个人信息
      <div @click="write" class="login"><span>编辑</span></div>
    </Header>
    <div class="one-box" >
      <div class="content-box">
        <span class="item">头像</span>
        <span class="content"><img :src="Info.img"></span>
      </div>

      <div class="content-box">
        <span class="item">姓名</span>
        <span class="content">{{Info.name}}</span>
      </div>

      <div class="content-box">
        <span class="item">身份证</span>
        <span class="content">{{Info.idNum}}</span>
      </div>

      <div class="content-box">
        <span class="item">家庭住址</span>
        <span class="content">{{Info.address}}</span>
      </div>

      <div class="content-box">
        <span class="item">工作地址</span>
        <span class="content">{{Info.workAddress}}</span>
      </div>

      <div class="content-box">
        <span class="item">民族</span>
        <span class="content">{{Info.nation}}</span>
      </div>

      <div class="content-box">
        <span class="item">微信号</span>
        <span class="content">{{Info.VX}}</span>
      </div>

      <div class="content-box">
        <span class="item">QQ号</span>
        <span class="content">{{Info.QQ}}</span>
      </div>

      <div class="content-box">
        <span class="item">性别</span>
        <span class="content">{{Info.sex}}</span>
      </div>

      <div class="content-box">
        <span class="item">最高学历</span>
        <span class="content">{{Info.edu}}</span>
      </div>

      <div class="content-box">
        <span class="item">职称</span>
        <span class="content">{{Info.workTitle}}</span>
      </div>

      <div class="content-box">
        <span class="item">薪资水平</span>
        <span class="content">{{Info.salary}}</span>
      </div>

      <div class="content-box">
        <span class="item">入党时间</span>
        <span class="content">{{Info.partyTime}}</span>
      </div>

      <div class="content-box">
        <span class="item">党费最后缴纳时间</span>
        <span class="content">{{Info.timeSalary}}</span>
      </div>

      <div class="content-box">
        <span class="item">当前身份</span>
        <span class="content">{{Info.status}}</span>
      </div>


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
      Info:{}
      }
    },
    methods:{
      isLogin() {
        this.$axios.get('isLogin').then(res => {
          console.log(res);
          if (res.data=='未登录'){
            this.$router.push({path:'/Login',query:{mark:"Gerenxinxi"}});
          }else {
            this.getQian();
          }
        })
      },
      getQian(){
        this.$axios.get('getQian').then(res=>{
          console.log(res);
          this.Info=res[0];
          console.log(this.Info);
        })
      },
      write(){
        this.$router.push({path:'/Xiugaixinxi'})
      }
    },
    created(){
      this.isLogin();

    }
  }
</script>

<style scoped lang="less">

  .login{
    position: absolute;
    right: 10px;
    top:0;
    color: #fff;
    font-size: 16px;
  }
  .one-box{
    margin-top: 44px;
    width: 375px;
    height: 667px;
    .content-box{
      width: 267px;
      height: 16px;
      padding: 16px 54px;
      border-bottom: 1px solid #ddd;
      position: relative;
      .item{
        position: absolute;
        top: 16px;
        left: 11px;
        font-size: 14px;
      }
      img{
        width: 37px;
        height: 28px;
        text-align: center;
      }
      .content{
        position: absolute;
        top: 16px;
        right: 11px;
        font-size: 14px;
      }
    }
  }

</style>
