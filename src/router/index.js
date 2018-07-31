import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home.vue'
import Msg from '@/view/Msg.vue'
import My from '@/view/My.vue'
import Login from '@/components/Login.vue'
import News from '@/components/News.vue'
import Hands from '@/components/Hands.vue'
import Onepoint from '@/components/Onepoint.vue'
import Liangshenfen from '@/components/Liangshenfen.vue'
import Zhengzhixuexi from '@/components/Zhengzhixuexi.vue'
import Sixiangbaogao from '@/components/Sixiangbaogao.vue'
import Xindezongjie from '@/components/Xindezongjie.vue'
import Suishisuidixue from '@/components/Suishisuidixue.vue'
import Suishisuidipai from '@/components/Suishisuidipai.vue'
import Zhidujianshe from '@/components/Zhidujianshe.vue'
import Tesehuodong from '@/components/Tesehuodong.vue'
import Dangshishangdejintian from '@/components/Dangshishangdejintian.vue'
import Swipecontent from '@/components/Swipecontent.vue'
import Newscontent from '@/components/Newscontent.vue'
import Gerenzongjie from '@/components/Gerenzongjie.vue'
import Minzhupingyi from '@/components/Minzhupingyi.vue'
import Xiugaixinxi from '@/components/Xiugaixinxi.vue'
import Gerenxinxi from '@/components/Gerenxinxi.vue'
import partycloud from '@/components/partycloud.vue'
import Xiugaimima from '@/components/Xiugaimima.vue'
import Dangyuanhuifu from '@/components/Dangyuanhuifu.vue'
import Jiaonadangfei from '@/components/Jiaonadangfei.vue'
import Gerenjifen from '@/components/Gerenjifen.vue'
import Scoredetails from '@/components/Scoredetails.vue'
import Checktext from '@/components/Checktext.vue'
import Checktextsuccess from '@/components/Checktextsuccess.vue'
import Checktextfail from '@/components/Checktextfail.vue'
import Pingyi from '@/components/Pingyi.vue'
import Pingyirenyuan from '@/components/Pingyirenyuan.vue'
import Pingyigeren from '@/components/Pingyigeren.vue'
import Map from '@/view/Map.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/' ,redirect:'/Home'},
    {path: '/Home', component: Home},
    {path: '/Msg', component: Msg},
    {path: '/My', component: My},
    {path: '/Login',component: Login},
    {path: '/News',component: News},
    {path: '/Hands',component: Hands},
    {path: '/Onepoint',component: Onepoint},
    {path: '/Liangshenfen',component: Liangshenfen},
    {path: '/Zhengzhixuexi',component: Zhengzhixuexi},
    {path: '/Sixiangbaogao',component: Sixiangbaogao},
    {path: '/Xindezongjie',component: Xindezongjie},
    {path: '/Suishisuidixue',component: Suishisuidixue},
    {path: '/Suishisuidipai',component: Suishisuidipai},
    {path: '/Zhidujianshe',component: Zhidujianshe},
    {path: '/Tesehuodong',component: Tesehuodong},
    {path: '/Minzhupingyi',component: Minzhupingyi},
    {path: '/Dangshishangdejintian',component: Dangshishangdejintian},
    {path: '/Swipecontent',component: Swipecontent},
    {path: '/Gerenxinxi',component: Gerenxinxi},
    {path: '/Xiugaixinxi',component: Xiugaixinxi},
    {path: '/Gerenzongjie',component: Gerenzongjie},
    {path: '/Newscontent',component: Newscontent},
    {path: '/Xiugaimima',component: Xiugaimima},
    {path: '/Jiaonadangfei',component: Jiaonadangfei},
    {path: '/Dangyuanhuifu',component: Dangyuanhuifu},
    {path: '/Gerenjifen',component: Gerenjifen},
    {path: '/Scoredetails',component: Scoredetails},
    {path: '/partycloud',component: partycloud},
    {path: '/Checktext',component: Checktext},
    {path: '/Checktextsuccess',component: Checktextsuccess},
    {path: '/Checktextfail',component: Checktextfail},
    {path: '/Pingyi',component: Pingyi},
    {path: '/Pingyirenyuan',component: Pingyirenyuan},
    {path: '/Pingyigeren',component: Pingyigeren},
    {path: '/Map',component: Map}
  ]
})
