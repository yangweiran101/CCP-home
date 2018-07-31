<template>
  <div id="box">
    <Header >
      修改个人信息
      <div @click="save" class="login"><span>保存</span></div>
    </Header>
    <div class="one-box">
      <div class="content-box">
        <span class="item">头像</span>
        <span class="content"><img src=""></span>
      </div>

      <div class="content-box">
        <span class="item">姓名</span>
        <input type="text" v-model="Info.name" class="content">
      </div>

      <div class="content-box">
        <span class="item">身份证</span>
        <span class="content">{{Info.idNum}}</span>
      </div>

      <div class="content-box">
        <span class="item">家庭住址</span>
        <input type="text" v-model="Info.address" class="content">
      </div>

      <div class="content-box">
        <span class="item">工作地址</span>
        <input type="text" v-model="Info.workAddress" class="content">
      </div>

      <div class="content-box">
        <span class="item">民族</span>
        <input type="text" v-model="Info.nation" class="content">
      </div>

      <div class="content-box">
        <span class="item">微信号</span>
        <input type="text" v-model="Info.VX" class="content">
      </div>

      <div class="content-box">
        <span class="item">QQ号</span>
        <input type="text" v-model="Info.QQ" class="content">
      </div>

      <div class="content-box">
        <span class="item">性别</span>
        <input type="text" v-model="Info.sex" class="content">
      </div>

      <div class="content-box">
        <span class="item">最高学历</span>
        <input type="text" v-model="Info.edu" class="content">
      </div>

      <div class="content-box">
        <span class="item">职称</span>
        <input type="text" v-model="Info.workTitle" class="content">
      </div>

      <div class="content-box">
        <span class="item">薪资水平</span>
        <input type="text" v-model="Info.salary" class="content">
      </div>

      <div class="content-box">
        <span class="item">入党时间</span>
        <input type="text" v-model="Info.partyTime" class="content">
      </div>

      <div class="content-box">
        <span class="item">党费最后缴纳时间</span>
        <input type="text" v-model="Info.timeSalary" class="content">
      </div>

      <div class="content-box">
        <span class="item">当前身份</span>
        <input type="text" v-model="Info.status" class="content">
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
      return {
        Info: {
        status: "",
        idNum:"",
        area:"",
        img:"",
        name:"",
        address:"",
        workAddress:"",
        nation:"",
        VX:"",
        QQ:"",
        sex:"",
        edu:"",
        workTitle:"",
        partyTime:"",
        timeSalary:"",
        salary:""

      }
      }
    },
    methods:{
      getQian(){
        this.$axios.get('getQian').then(res=>{
          console.log(res);
          this.Info = res[0]
        })
      },
      save(){
        this.$axios.post('updata',this.Info).then(res=>{
          console.log(res);
          if(res.data=="个人信息修改成功"){
            this.$router.push({path:'/Gerenxinxi'})
          }
        })
      }
    },
    created(){
      this.getQian();
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
