<template>
  <div>
      <van-list
  
  :finished="finished"
  finished-text="没有更多了"
  
>
  <van-cell @click="tagt(item)" v-for="item in ttime" :key="item" :title="item" />
</van-list>
  </div>
</template>

<script>
export default {
  data(){
    return{
      finished: false,

    }
  },
props:['ttime'],
methods:{
  tagt(val){
    this.$emit('lishi',val)
  }
}
}
</script>

<style>

</style>