<template>
  <div class="news">
    <Header >民主评议</Header>
    <div class="conten" >
      <h1>{{Info.title}}</h1>
      <div class="ncon" v-html="Info.content"></div>
    </div>
    <div class="dlist">
      <select name="" id="select" v-model="area">
        <option >请选择</option>
        <option value="信息工程学院教工第一党支部">信息工程学院教工第一党支部</option>
        <option value="信息工程学院教工第二党支部">信息工程学院教工第二党支部</option>
        <option value="信息工程学院学生党支部">信息工程学院学生党支部</option>
        <option value="信息工程学院学生流动党支部（北京）">信息工程学院学生流动党支部(北京)</option>
      </select>
    </div>
    <button class="lnext" @click="next">下一步</button>
  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  export default {
    data() {
      return {
        Info:{},
        area:''
      }
    },
    components: {
      Header
    },
    methods:{
      getDis(){
        this.$axios.get('getDiscuss').then(res=>{
          console.log(res);
          this.Info = res.data;

        })
      },
      next(){
        this.$router.push({path:'/Pingyirenyuan',query:{area:this.area,reviewsId:this.$route.query.reviewsId}})
      }
    },
    created() {
      this.getDis()

    }
  }
</script>

<style scoped>


  .news .fnhui .iconfont {
    float: left;
    font-size: 31px;
    color: #fff;
  }

  .news {
    width: 100%;
    height: 1000px;
    overflow-y: auto;
  }

  .conten {
    /*position: fixed;*/
    /*top: 46px;*/
    /*left: 0;*/
    /*right: 0;*/
    margin-top: 95px;
    width: 100%;
    text-align: center;
  }

  .conten h1 {
    font-size: 16px;
    color: black;
    margin: 10px 0;
  }

  .conten .ncon p {
    margin-bottom: 10px;
    line-height: 23px;

  }

  .conten .ncon {
    margin: 20px;
    font-size: 14px;
  }

  #select {
    position: fixed;
    bottom: 108px;
    left: 40px;
    height: 40px;
    width: 50%;
    padding-left: 30px;
    border: 1px solid #c50206;
    border-radius: 4px;
    background-color: #c50206;
    color: white;
  }

  .lnext {
    position: fixed;
    bottom: 108px;
    right: 40px;
    height: 39px;
    width: 20%;
    line-height: 39px;
    text-align: center;
    color: white;
    border: 1px solid #c50206;
    border-radius: 4px;
    background-color: #c50206;

  }


</style>
