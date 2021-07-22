<template>
  <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
  <van-goods-action-icon icon="cart-o" :badge="gouwuc" text="购物车" />
  <van-goods-action-icon :icon="iws?'star':'star-o'" @click="iws=!iws" :text="iws?'已收藏':'未收藏'" :color="iws?'darkred':'#333'" />
  <van-goods-action-button type="warning" text="加入购物车" @click="tanc" />
  <van-goods-action-button type="danger" text="立即购买" @click="tancs" />
</van-goods-action>
</template>

<script>
export default {
data(){
  return{
    iws:false
  }
},
props:['gouwuc'],
methods:{
  tanc(){
    this.$emit('gb')
  },
  tancs(){
    this.$emit('ss')
  }
}
}
</script>

<style lang="less" scoped>
.van-goods-action{
  z-index: 99999;
}
</style>