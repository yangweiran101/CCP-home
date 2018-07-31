<template>
  <div class="box">
    <Header>党员云互动</Header>
    <div class="content-box">
      <div class="content" v-for="item in lists" :key="item.id" >
        <div class="cloudheader">
          <img :src="item.userAvatar" class="left">
          <div class="mid">
            <p class="username">{{item.userName}}</p>
            <p>
              <img src="../assets/time.png" style="height: 12px;width: 12px">
              <span>{{item.createdAt}}</span>
              <img src="../assets/sound.png" style="height: 12px;width: 12px">
              <span>公开</span>
            </p>
          </div>
          <span class="hudong">党员互动</span>
        </div>
        <div class="ping">{{item.contentText}}</div>

        <div class="huifu">
          <div @click="goReply(item._id,item.userId)" >回复</div>
        </div>
      </div>
    </div>

    <div class="img" @click="setwrap"><img src="../assets/setbtn.png"></div>

    <mt-popup v-model="popupVisible" position="bottom">
      <div class="wrap">
        <input type="text" class="txt" v-model="Text">
        <div class="btn">
          <div class="set" @click="setText">发布</div>
          <div class="esc" @click="escText">取消</div>
        </div>
      </div>
    </mt-popup>

  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  export default {
    components: {
      Header
    },
    name: "dangyuan",
    data(){
      return{
        lists:[],
        popupVisible:false,
        Text:""
      }
    },
    created(){
      this.isLogin();
    },
    methods:{
      getlist(){
        this.$axios.get("getCloudlist").then(res=>{
          console.log(res);
          this.lists= res;
          for (var i=0;i<this.lists.length;i++){
            var createdAt = res[i].createdAt;
            var date = new Date(createdAt);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds();
            console.log(Y+M+D+h+m+s);
            this.lists[i].createdAt = Y+M+D+h+m+s
          }
        })
      },
      isLogin() {
        this.$axios.get('isLogin').then(res => {
          console.log(res);
          if (res.data=='未登录'){
            this.$router.push({path:'/Login',query:{mark:"Partycloud"}});
          }else {
            this.getlist();
          }
        })
      },
      goReply(id,toUserId){
        this.$router.push({path:'/Dangyuanhuifu',query:{id,toUserId}});
      },
      setwrap(){
        this.popupVisible=true
      },
      escText(){
        this.popupVisible=false
      },
      setText(){
        this.$axios.post('addCloud',{contentText:this.Text}).then(res=>{
          console.log(res);
          if (res.msg=="success"){
            this.$router.go(0);
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .box{
    background-color: whitesmoke;
    position: relative;
    .content-box{
      margin-top: 44px;
      .content{
        height: 141px;
        width: 375px;
        margin: 0 auto 10px auto;
        background-color: #fff;
        .cloudheader{
          position: relative;
          width: 343px;
          padding-top: 12px;
          margin: 0 auto;
          font-size: 12px;
          color: #444;
          .mid{
            margin-left: 10px;
            .username {
              font-size: 16px;
              margin-bottom: 2px;
            }
            p{
              span{margin-left: 5px;}
            }
          }
          .left{
            width: 33.5px;
            height: 33.5px;
            border-radius: 50%;
          }
          .hudong{
            position: absolute;
            right: 0;
            top: 12px;
            font-size: 12px;
            padding: 2px 8px;
            color: red;
            border: 1px solid red;
            border-top-left-radius: 15% 50%;
            border-top-right-radius: 15% 50%;
            border-bottom-right-radius: 15% 50%;
            border-bottom-left-radius: 15% 50%;
          }
          img{
            width: 66px;
            height: 26px;
          }

          display: flex;
        }
      }
      .ping{
        width: 90%;
        margin: 10px auto;
        text-align: left;
        font-size: 18px;
      }
      .huifu{
        text-align: right;
        margin: 10px 10px 0 0;
        font-size: 14px;
      }
    }
    .wrap{
      width: 355px;
      height: 140px;
      padding: 10px;
      background-color: #f1f1f1;
      position: relative;
      .txt{
        width: 347px;
        height: 102px;
        background-color: #fff;
        margin:0 auto 10px;
      }
      .set{
        width: 28px;
        height: 22px;
        text-align: center;
        background-color: #ef473a;
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-size: 12px;
        color: white;
        border: 1px solid red;
        border-radius: 15%;
      }
      .esc{
        width: 28px;
        height: 22px;
        text-align: center;
        background-color: #ef473a;
        position: absolute;
        bottom: 10px;
        right: 10px;
        font-size: 12px;
        color: white;
        border: 1px solid red;
        border-radius: 15%;
      }
    }
    .img{
      width: 56px;
      height: 60px;
      position: absolute;
      top: 500px;
      right: 5px;
    }
  }

</style>
