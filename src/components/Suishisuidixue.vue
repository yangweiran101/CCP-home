<template>
  <div id="box">
    <Header class="header">随时随地学</Header>
    <div class="eye-box" >
      <div class="box"v-for="item in news" :key="item.id" @click="content(item._id)">
        <div class="eye-pic" >
          <img :src="item.img" alt="">
        </div>
        <div class="eye-content">
          <p>{{item.title}}</p>
          <div class="uptime">
            <span id="time">{{item.createTime}}</span>
            <i class="iconfont icon-eye">{{item.yan}}</i>
          </div>
        </div>
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
        this.$axios.get('getNews',{category:'随时随地学'}).then(res=>{
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
  #box{width:100%;
    height: 667px;}
  .eye-box{
    margin-top: 44px;
    .box{
      display: flex;
      width: 100%;
      border-bottom: 1px solid grey;
      img {
        width: 80px;
        height: 80px;
        margin:10px;
      }
      .eye-content{
        height: 80px;
        width: 265px;
        position: relative;
        margin: 10px 0;
        p{
          font-size: 16px;
          height: 48px;
          color: #000;
        }
        .uptime{
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          font-size: 10px;
          line-height: 1;
          color: #666;
          i{
            float: right;
            font-size: 12px;
            color: #666;
          }
        }
      }
    }
  }

</style>
