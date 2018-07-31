<template>
  <div>
    <div >
      <Header>{{news.category}}</Header>
      <div class="content">
        <h3>{{news.title}}</h3>
        <div class="news" v-html="news.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  export default {
    data() {
      return {
        news:{}
      }
    },
    methods: {
      getSlider(){
        let id =this.$route.query.id
        console.log(id)
        this.$axios.get('getNews',{id}).then(res=>{
          this.news =res[0];
          console.log(res);
        })
      }
    },
    created() {
      this.getSlider();
    },
    components:{
      Header
    }
  }
</script>

<style scoped lang="less">
  .content{
    margin-top: 44px;
    padding: 10px;
    background-color: #fff;
    h3{
      font-size:24px;
      font-weight: 500;
      color: #000;
      line-height: 1.2;
      margin-bottom: 10px;
    }
  }
  .news {
    line-height: 2;
  }
</style>
