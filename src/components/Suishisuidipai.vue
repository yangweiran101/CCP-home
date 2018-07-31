<template>
  <div id="box">
    <Header class="header">随时随地拍</Header>
    <div class="content">
      <div class="eye-box" v-for="item in news" :key="item.id" @click="content(item._id)">
          <div><img :src="item.img" alt=""></div>
          <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  export default {
    data(){
      return{
        news:[]
      }
    },
    methods:{
      getNews(){
        this.$axios.get('getNews',{category:'随时随地拍'}).then(res=>{
          this.news=res;
          console.log(res)
        })
      },
      content(id){
        console.log(id);
        this.$router.push({path:'/Newscontent',query:{id}})
      }
    },
    created(){
      this.getNews();
    },
    components:{
      Header
    }
  }
</script>

<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;
    background-color: #fff;
  }
  .content{
    margin-top: 44px;
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    height: 667px;
    .eye-box{
      width: 155px;
      padding: 16px;
      img{
        width: 155px;
        height: 116.5px;
      }
      p{
        width: 155px;
        font-size: 13px;
        line-height: 1;
        color: #666;
      }

    }
  }

</style>
