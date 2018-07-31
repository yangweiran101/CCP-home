<template>
  <div id="box">
    <Header class="onepoint">个人总结</Header>
    <div class="one-box">
      <label class="content">
        <input type="file" name="file" accept="image/jpeg,image/png" @change="up" id="post">
        <img :src="img" v-if="img">
        <img src="../assets/upload.png" alt="">
      </label>
      <div class="btn" @click="postPre">提交审核</div>
    </div>

  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  import { Toast } from 'mint-ui';
  import axios from 'axios'
  export default {
    components:{
      Header
    },
    data(){
      return{
        token:'',
        img:'',
      }
    },
    methods:{
      postPre(){
        this.$axios.post('addpersonReviews',{
          pic:this.img,
          reviewsId:this.$route.query.reviewsId
        }).then(res=>{
          console.log(res);
          if (res.data.status==0) {
            this.$router.push({path:'/Checktext'})
          }else if(res.data.status==1){
            this.$router.push({path:'/Checktextsuccess'})
          }else if(res.data.status==2){
            this.$router.push({path:'/Checktextfail'})
          }else{
            Toast({
              message: '不能重复提交个人总结',
              duration: 1000
            });
          }
        })
      },
      up($event){
        console.log($event);
        var file=$event.target.files[0];

        var form=new FormData();
        form.append("file",file);
        form.append("token",this.token);
        axios.post("https://upload-z1.qiniup.com",form,{headers: {"Content-Type": 'multipart/form-data'}
        }).then(res=>{
          this.img=res.data.url;
        })
      },
      getToken(){
        axios.get("http://up.yaojunrong.com/getToken").then(
          res=>{
            this.token=res.data.data;
          })
      }

    },
    created(){
      this.getToken();
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
    width: 375px;
    height: 667px;
    position: relative;
    .content{
      display: flex;
      width: 300px;
      height: 115px;
      border-radius: 4px;
      margin: 1px;
      padding: 10px;
      #post{
        display:none;
      }
      img{
        width: 105px;
        height: 105px;
        float: left;
        margin-left: 10px;
      }
    }

    .btn {
      width:205px;
      background-color: #c50206;
      padding: 10px;
      border: none;
      border-radius: 5px;
      color: #fff;
      margin: 0 auto;
      font-size: 14px;
      position: absolute;
      bottom: 100px;
      left: 75px;
      text-align: center;
    }
  }

</style>
