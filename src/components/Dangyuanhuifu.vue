<template>
  <div class="box">
    <Header>党员云互动</Header>
    <div class="content">
      <div class="wrap" v-for="item in replys" :key="item.id">
        <div class="head">
          <img :src="item.userAvatar" class="left">
          <div class="mid">
            <p class="username">{{item.userName}}</p>
            <p>
              <img src="../assets/time.png" style="height: 12px;width: 12px">
              <span>{{item.createdAt}}</span>
            </p>
          </div>
        </div>
        <div class="ping">{{item.contentText}}</div>
      </div>
    </div>
    <div class="hfsth-comment">
      <label class="com-lab">
        <input type="text" placeholder="评论内容" v-model="form.text">
      </label>
      <button>评论</button>
    </div>
  </div>

</template>

<script>
  import Header from '../base/Header'
    export default {
        name: "Dangyuanhuifu",
      components:{
          Header
      },
      data(){
          return{
            replys:[],
            form:{
              text:''
            }
          }
      },
      methods:{
        getReply(){
          this.$axios.get('getReply',{parentId:this.$route.query.id}).then(res=>{
            this.replys =res.data;
            console.log(this.replys);
          })
        },
        addReply(){
          this,$axios.post('addReply',{parentId:this.$route.query.id,contentText:this.form.text,toUserId:this.$route.query.toUserId})
        }
      }
      ,
      created(){
          this.getReply();
      }
    }
</script>

<style scoped lang="less">
  .box{
    position: relative;}
  .content{
    margin-top: 44px;
    height: 667px;
    background-color: whitesmoke;
    .wrap{
      width: 323px;
      height: 85px;
      padding: 16px;
      margin: 0 auto;
      background-color: #fff;
      .head{
        position: relative;
        width: 343px;
        padding-top: 12px;
        margin: 0 auto;
        font-size: 12px;
        color: #444;
        display: flex;
        .mid{
          margin-left: 10px;
          .username {
            font-size: 16px;
            margin-bottom: 2px;
          }
          span{margin-left: 5px;}
        }
        .left{
          width: 33.5px;
          height: 33.5px;
          border-radius: 50%;
        }
        img{
          width: 66px;
          height: 26px;
        }
      }
    }
    .ping{
      width: 100%;
      margin: 10px auto;
      text-align: left;
      font-size: 18px;
    }
    .hfsth-comment{
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      background-color: #fff;
      color: #444;
      font-size: 16px;
      position: absolute;
      bottom: 0;
    }
    .com-lab input{
      border: 1px solid #c50206;
      background: #fff;
      border-radius: 4px;
      padding: 0 8px;
      width: 87%;height: 33px;
    }
    button{
      border-radius: 4px;
      background:  #c50206;
      color: #fff;
      width: 34px;height: 31px;
      margin-left: 6px;
    }
  }
</style>
