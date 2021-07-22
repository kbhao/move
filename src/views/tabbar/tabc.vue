<template>
    
    <van-tabbar v-model="active" v-if="$route.meta.showw" active-color="#ee0a24" inactive-color="#000">
  <van-tabbar-item icon-prefix="iconfont"  icon="iconfont icon-shouye" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon-prefix="iconfont"  icon="iconfont icon-xiangqing" to="/xiangqing">详情</van-tabbar-item>
  <van-tabbar-item icon-prefix="iconfont" icon="iconfont icon-gouwuche" to="/cart">购物车</van-tabbar-item>
  <van-tabbar-item icon-prefix="iconfont"  icon="iconfont icon-wode" to="/my">我的</van-tabbar-item>
</van-tabbar>
</template>

<script>
export default {
  data(){
      return{}
  },
  computed:{
      active:{
          get(){
         return this.$route.meta.actives},
         set(){}
      }
  }
}
</script>

<style>

</style>