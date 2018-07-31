<template>
  <div class="container login">
    <Header>修改密码</Header>
    <div class="wrap">
      <div class="form">
        <div class="input-wrap">
          <p>旧密码:</p>
          <input type="password" v-model="password.pwd">
        </div>
        <div class="input-wrap">
          <p>新密码:</p>
          <input type="password" v-model="password.newPwd">
        </div>
        <div class="input-wrap">
          <p>确认密码:</p>
          <input type="password">
        </div>
        <div class="input-wrap">
          <mt-button size="large" class="btn" @click="postNewpwd">确定</mt-button>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  import Header from '../base/Header.vue'

  export default {
    components: {
      Header
    },
    data(){
      return{
        password: {
          pwd:  '',
          newPwd: ''
        }
      }
    },
    methods:{
      postNewpwd(){
        this.$axios.post('updataMm',this.password).then(res=>{
          console.log(res);
          if (res.data=='密码修改成功'){
            this.$router.push({path:'/My'});
          }
        })
      },
      isLogin() {
        this.$axios.get('isLogin').then(res => {
          console.log(res);
          if (res.data=='未登录'){
            this.$router.push({path:'/Login',query:{mark:"Xiugaimima"}});
          }
        })
      },
    },
    created(){
      this.isLogin();
    }

  }
</script>

<style scoped lang="less">
  .btn {
    font-size: 16px;
    color: white;
    background: #ef473a;
  }
  .wrap{
    margin: 44px;
    .form {
      width: 300px;
      margin: 94px auto;
      .input-wrap {
        margin-bottom: 20px;
        p{
          font-size: 16px;
          line-height:2;
          color:#666;
        }
        input {
          width: 286px;
          padding: 14px 6px;
          border:1px solid #999!important;
          border-radius: 4px;
          font-size: 14px;
          color: #000;
        }
      }
    }
  }
</style>
