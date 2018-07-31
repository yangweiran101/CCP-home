<template>
  <div class="join">
    <Header class="rey">参评党员</Header>
    <div class="gecont">
      <div class="lisxin" v-for="item in lists" :key="item.id">
        <div @click="select(item.idNum)" >
          <span><img :src="item.img"></span>
          <span class="name">{{item.name}}</span>
          <span class="dangbu">{{item.area}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  import { Toast } from 'mint-ui';

  export default {
    components: {
      Header
    },
    data() {
      return {
        lists:[],
      }
    },
    methods:{
      getPeople(){
        this.$axios.get('getQian',{area:this.$route.query.area}).then(res=>{
          console.log(res);
          this.lists = res;

        })
      },

      select(otherUserId){
        console.log(this.$route.query.reviewsId);
        this.$axios.get('getOtherReviews',{otherUserId,reviewsId:this.$route.query.reviewsId}).then(res=>{
          console.log(res);
          if (res.msg=='success'){
            this.$router.push({path:'/Pingyigeren',query:{otherUserId,reviewsId:this.$route.query.reviewsId}})
          }else{
            Toast({
              message: '该党员尚未完善个人总结',
              duration: 1000
            });
          }
        })

      }

    },
    created(){
      this.getPeople();
    }

  }
</script>

<style scoped>
  .rey {
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;
  }

  .fnhui .iconfont {
    float: left;
    font-size: 31px;
    color: #fff;
  }

  .gecont {
    margin-top: 46px;
    width: 100%;
  }

  .lisxin {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 45px;
    width: 100%;
    line-height: 45px;
    /*padding: 0 10px;*/
  }

  .lisxin span {
    line-height: 45px;
    height: 45px;
  }

  .lisxin img {
    margin: 5px 10px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    float: left;
  }

  .lisxin .name {
    margin: 0 6px;
    display: inline-block;
    width: 55px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dangbu {
    float: right;
  }
</style>
