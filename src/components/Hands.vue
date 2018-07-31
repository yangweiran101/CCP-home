<template>
    <div class="hands">
      <Header>掌上组织生活</Header>
      <div class="hands-pic">
        <img src="../assets/timg.jpg" alt="">
      </div>
      <div class="hands-content">
        <router-link to="/Zhengzhixuexi" class="hands-btn">
          <img src="../assets/icon1.png" alt="">
          <span>政治学习</span>
        </router-link>
        <router-link to="/Sixiangbaogao" class="hands-btn">
          <img src="../assets/icon2.png" alt="">
          <span>思想汇报</span>
        </router-link>
        <router-link to="/Xindezongjie" class="hands-btn">
          <img src="../assets/icon3.png" alt="">
          <span>心得总结</span>
        </router-link>
      </div>
      <div class="hands-content">
        <div @click="isLogin" class="hands-btn">
          <img src="../assets/icon4.png" alt="">
          <span>民主评议</span>
        </div>
        <router-link to="/Map" class="hands-btn">
          <img src="../assets/icon5.png" alt="">
          <span>流动党员找组织</span>
        </router-link>
        <a href="" class="hands-btn"><img src="" alt=""><span></span></a>
      </div>

      <mt-popup v-model="popupVisible" popup-transition="popup-fade" class="popup">
        <div >当前没有开启民主评议</div>
      </mt-popup>

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
        popupVisible:false
      }
  },
    watch: {
      popupVisible(val) {
        console.log(val);
        if (val) {
          setTimeout(() => {
            this.popupVisible = false;
          }, 3000);
        }
      }
    },
    methods:{
      isLogin() {
        this.$axios.get('isLogin').then(res => {
          if (res.data=='未登录'){
            this.$router.push({path:'/Login',query:{mark:"Minzhupingyi"}});
          }else {
            this.getDis()
          }
        })
      },
      getDis(){
        this.$axios.get('getDiscuss').then(res=>{
          console.log(res);
          if(res.msg=='success'){
            this.$router.push({path:'/Minzhupingyi',query:{reviewsId:res.data._id}});
          }else{
            this.popupVisible=true
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .hands-pic{
    margin-top: 44px;
    img{
      width: 375px;
      height: 186px;
    }
  }
  .hands-content {
    display: flex;
    .hands-btn{
      display: flex;
      flex-direction: column;
      width: 125px;
      padding: 15px;
      flex: 1;
      img {
        width: 85px;
        height: 85px;
        margin-bottom: 5px;
      }
      span {
        width: 85px;
        height: 20px;
        display: flex;
        justify-content: center;
        color: #666;
      }
    }
  }
  .popup{
    border-radius: 5px;
    font-size: 18px;
   }
</style>
