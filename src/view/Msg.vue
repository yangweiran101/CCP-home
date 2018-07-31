<template>
   <div>
     <Header class="header">通知早知道</Header>
      <div class="content">
        <div class="box">
          <div class="eye-pic">
            <img src="../assets/msg.png" alt="">
          </div>
          <div class="eye-content" v-for="item in news" :key="item.id" @click="content(item._id)">
            <p>{{item.title}}</p>
            <div><span>{{item.createTime}}</span></div>
          </div>
        </div>
      </div>
     <Tabbar></Tabbar>
   </div>
</template>

<script>
  import Header from '../base/Header.vue'
  import Tabbar from '../base/Tabbar.vue'
  export default {
    data(){
      return{
        news:[]
      }
    },
    methods:{
      getNews(){
        this.$axios.get('getNews',{category:'通知早知道'}).then(res=>{
          this.news=res;
          console.log(res);
          for (var i=0;i<this.news.length;i++){
            var createTime = res[i].createTime;
            var date = new Date(createTime);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds();
            console.log(Y+M+D+h+m+s);
            this.news[i].createTime = Y+M+D+h+m+s
          }
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
      Header,
      Tabbar
    }
  }
</script>

<style scoped lang="less">
  .content{
    margin-top: 44px;
    padding: 10px;
  }
  .box{
    display: flex;
    height: 80px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.1);
    .eye-pic{
      width: 80px;
      height: 80px;
    }
    .eye-content{
      height: 80px;
      width: 265px;
      position: relative;
      margin: 5px 0;
      p{
        font-size: 15px;
        height: 48px;
        margin-bottom: 0;
        color: #000;
      }
      span{
        width: 100%;
        font-size: 10px;
        color: #666;
      }
    }
  }
</style>
