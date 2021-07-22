<template>
  <div class="homet">
      <van-search class="tabr" v-model="value" disabled placeholder="请输入搜索关键词" @click="$router.push('shopsou')" />
    <div class="lunbo">
 <van-swipe :autoplay="3000" >
  <van-swipe-item v-for="image in images" :key="image.id" @click="ttiao(image.id)">
    <img v-lazy="image.image_url" width="100%"/>
  </van-swipe-item>
</van-swipe>
<daohang :peijian="channel"></daohang>
<!--列表组件-->
<homelist :homeli="homeli"></homelist>
<shouyelist :shoul="catelist"></shouyelist>
<div style="height:50px;"></div>
</div>
<transition name="van-fade">
<router-view></router-view>
</transition>
  </div>
</template>

<script>
//子组件
import daohang from '../components/home/daohang/daohang.vue'
import homelist from '../components/home/homelist/homelist.vue'
//Api
import { shouye } from '../api/shouye'
import Shouyelist from '../components/home/homelist/shouyelist.vue'
export default {
 data(){
   return {
     value:'',
     images: [],
     channel:[],
     homeli:[],
     catelist:[]
  }
  },
components:{
   daohang,
   homelist,
Shouyelist
 },
 created(){
   // 获取首页数据
   this.shoye()
 },
 methods:{
   //获取首页方法
 async shoye(){ 
       const { data } =  await shouye()
          console.log(data.data.banner[1].image_url)
       this.images = data.data.banner
       this.channel = data.data.channel
       this.homeli = data.data.brandList
      this.catelist = data.data.hotGoodsList
  },
  ttiao(id){
    this.$router.push('/Qxiangqing?id='+id)
  }
 }
}
</script>

<style lang="less" scoped>
.homet{
  .tabr{
    overflow:hidden;
  }
  .lunbo{
  clear:both;
}}
</style>