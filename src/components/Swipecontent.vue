<template>
  <div>
    <div >
      <Header>{{sliders.category}}</Header>
      <div class="content">
        <h3>{{sliders.title}}</h3>
        <div class="news" v-html="sliders.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  export default {
    data() {
      return {
        sliders:{}
      }
    },
    methods: {
      getSlider(){
        let id =this.$route.query.id
        console.log(id)
        this.$axios.get('getQianLunBoTus',{id}).then(res=>{
          this.sliders =res[0];
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
