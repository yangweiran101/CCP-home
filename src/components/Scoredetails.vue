<template>
  <div class="scoredetails-container">
    <Header>积分明细</Header>

    <div class="scoredetails-content">
      <div class="scoredetails-list">

        <div class="scoredetails-item" v-for="item in Details" :key="item.id">
          <div class="scoredetails-icon1">
            <div class="typename">{{item.scoreName}}</div>
            <div class="timefor">{{item.createTime}}</div>
          </div>
          <div class="scoredetails-icon2">+{{item.score}}</div>
        </div>

      </div>
      <div class="scoredetails-tail">
        <span>没有更多数据了...</span>
      </div>
    </div>


  </div>
</template>

<script>
  import Header from '../base/Header.vue'
  export default {
    name: "scoredetails",
    components:{
      Header
    },
    data(){
      return{
        Details:[]
      }
    },
    methods:{
      getScore(){
        this.$axios.get('getScores').then(res=>{
          console.log(res);
          this.Details = res.data;
          for (var i=0;i<this.Details.length;i++){
            var createTime = res.data[i].createTime;
            var date = new Date(createTime);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds();
            console.log(Y+M+D+h+m+s);
            this.Details[i].createTime = Y+M+D+h+m+s
          }
        })
      }
    },
    created(){
      this.getScore();
    }
  }
</script>

<style scoped>
  .scoredetails-content{margin-top: 44px}
  .scoredetails-item{
    background: #fff;
    overflow-y: auto;
    left: 0;right: 0;
    width: auto;height: auto;
  }
  .scoredetails-list{padding: 1px 0;}
  .scoredetails-item{
    border: 1px solid #ddd;
    background: white;
    color: #444;
    font-size: 14px;
    position: relative;
    display: block;
    height: 45px;
    margin: -1px;
    padding: 15px;
  }
  .scoredetails-icon1{
    float: left;
  }
  .scoredetails-icon1 .typename{
    display: block;
    font-size: 16px;color: #333;
    margin-bottom: 5px;
  }
  .scoredetails-icon1 .timefor{
    display: block;
    font-size: 13px;
  }
  .scoredetails-icon2{
    float: right;
    color: red;
  }
  .scoredetails-tail{
    padding-top: 7px;
    text-align: center;
  }
  .scoredetails-tail span{
    font-size: 13px;
    color: #666;
  }
</style>
