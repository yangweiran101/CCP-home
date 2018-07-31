<template>
  <div class="container login">
    <Header>登陆</Header>
    <div class="wrap">
      <div class="logo-wrap">
        <img src="../assets/logo.png">
      </div>
      <div class="form">
        <div class="input-wrap">
          <input type="text" placeholder="身份证号" v-model="form.idNum">
        </div>
        <div class="input-wrap">
          <input type="password" placeholder="密码" v-model="form.pwd">
        </div>
        <div class="input-wrap">
          <mt-button size="large" @click="login()">登陆</mt-button>
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
       form: {
         idNum:  '',
         pwd: ''
       },
      changepath:''
     }
    },
    methods:{
      login(){
        this.changepath='/'+this.$route.query.mark;
        this.$axios.post('Login',this.form).then(res=>{
          this.$router.push({path:this.changepath})
        })

      }
    }

  }
</script>

<style scoped>
  mt-button {
    background: #e43228;
    font-size: 14px;
    color: #fff;
  }
  .wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 50px;
    overflow-y: auto;
    margin-top: -1px;
    margin-bottom: -1px;
    height: auto;
    background: #c7000a;
  }
  .logo-wrap {
    margin: 30px 85px;
    background: #c7000a;
  }
  img{
    width: 203.3px;
    height:48.9px ;
    margin: 0 auto;
  }
  .form {
    width: 300px;
    margin: 0 auto;
  }
  .input-wrap {
    margin-bottom: 20px;
  }
  input {
    width: 300px;
    padding: 14px 6px;
    border: 1px solid #ff0;
    border-radius: 4px;
    background: #c7000a;
    font-size: 14px;
    color: #fff;
  }
</style>
