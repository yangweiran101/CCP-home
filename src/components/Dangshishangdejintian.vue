<template>
  <div class="box">
  <Header>党史上的今天</Header>
    <div class="content" v-html="this.sliders"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliders: ""
    }
  },
  methods: {
    getSlider(){
      this.$axios.get('getData').then(res=>{
        this.sliders =res.data;
        console.log(res);
      })
    },

  },
  created() {
    this.getSlider();
  },
}
</script>

<style scoped lang="less">
.box{
  padding: 10px;
  background-color: #fff;
  .content{
    margin-top: 44px;

  }
}
</style>
