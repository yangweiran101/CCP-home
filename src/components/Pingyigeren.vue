<template>
  <div class="news">
    <Header>民主评议</Header>
    <div class="box">
      <div class="conten">
        <h1>个人总结</h1>
        <div class="ncon">
          <img :src="Info.pic">
        </div>
      </div>
      <div class="rank" >
           <span class="you">
           <input type="radio" name="1" v-model="score" value="0" id="you">
             <label for="you">&nbsp;优</label>
           </span>
           <span class="liang">
               <input type="radio" name="1" v-model="score" value="1" id="liang">
               <label for="liang">&nbsp;良</label>
           </span>
           <span class="zhong">
           <input type="radio" name="1" v-model="score" value="2" id="zhong">
             <label for="zhong">&nbsp;中</label>
           </span>
           <span class="cha">
           <input type="radio" name="1" v-model="score" value="3" id="cha">
             <label for="cha">&nbsp;差</label>
           </span>
        <button @click="submit(Info._id)">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../base/Header.vue'

  export default {
    data() {
      return {
        Info: {},
        score:0
      }
    },
    components: {
      Header
    },
    methods: {
      getRev() {
        this.$axios.get('getOtherReviews', {
          otherUserId: this.$route.query.otherUserId,
          reviewsId: this.$route.query.reviewsId
        }).then(res => {
          // console.log(res);
          this.Info = res.data;
        })
      },
      submit(id) {
        this.$axios.post('addSummary',{id,content:this.score}).then(res=>{
          console.log(res);
          if (res.msg=="评论插入成功"){
            this.$router.go(-1)
          }
        })
      }

    },
    created() {
      this.getRev()
    },
  }
</script>
<style scoped>
  .box {
    margin-top: 44px;
  }

  .news {
    width: 100%;
    height: 1000px;
    overflow-y: auto;
  }

  .conten {
    margin-top: 50px;
    width: 100%;
  }

  .conten h1 {
    font-size: 20px;
    color: black;
    text-align: center;
    margin-left: 15px;
  }

  .conten .ncon img {
    height: 100%;
    width: 100%;
  }

  .conten .ncon p {
    margin-bottom: 10px;
    line-height: 23px;
  }

  .conten .ncon {
    margin: 10px;
  }

  .rank {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #eee;
    height: 40px;
  }

  .rank span {
    width: 80%;
    text-align: center;
    font-size: 14px;
    margin: 0 14px;
    line-height: 40px;
  }

  .rank input[type="radio"] + label::before {
    content: '\a0';
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #fff;
    line-height: 1;
  }

  .rank input[type="radio"]:checked + label::before {
    background-clip: content-box;
    background-image: url("../assets/checkbox.png");
    background-size: 100%;
  }

  .rank input[type="radio"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  .rank button {
    height: 27px;
    width: 45px;
    border-radius: 4px;
    border: solid 1px #c50206;
    background-color: #fff;
    color: #c50206;
    outline: none;

  }


</style>
