<template>
  <div>
    <Header class="header">流动党员找组织</Header>
    <div class="map">
      <div id="bd"></div>
    </div>
  </div>
</template>

<script>
  import Header from '../base/Header.vue'
    export default {
      components:{
        Header
      },
      data(){
          return{
            map:null
          }
      },
      methods:{
        initMap(){
          var mp = new BMap.Map("bd");          // 创建地图实例
          mp.centerAndZoom(new BMap.Point(114.335928,36.099209), 15);   // 初始化地图，设置中心点坐标和地图级别
          mp.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
          var marker = new BMap.Marker(new BMap.Point(114.335928,36.099209));
          mp.addOverlay(marker);
          var top_right_navigation = new BMap.NavigationControl(
            {anchor:BMAP_ANCHOR_TOP_RIGHT,type:BMAP_NAVIGATION_CONTROL_ZOOM,offset:new BMap.Size(20.64)});
            mp.addControl(top_right_navigation);
        }
      },
      created(){
          this.$nextTick(()=>{
            this.initMap();
          })
      }
    }
</script>

<style scoped>
  html{height: 100%;}
  body{
    height: 100%;
    margin: 0;
    padding: 0;}
  .map{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
  }
  #bd{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
</style>
