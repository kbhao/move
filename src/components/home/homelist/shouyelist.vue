<template>
  <div>
      <div class="f">人气选择</div>
      <div v-for="item in shoul" :key="item.id" @click="ttiao(item.id)">
   <van-card
   class="tt"
  :price="item.retail_price"
  :desc="item.name"
  :title="item.goods_brief"
  :thumb="item.list_pic_url"
/>
</div>
  </div>
</template>

<script>
export default {
 props:['shoul'],
 methods:{
   ttiao(id){
     this.$router.push('/Qxiangqing?id='+id)
   }
 }
}
</script>

<style lang="less" scoped>
.f{
    display:flex;
    justify-content: center;
   height:40px;
   font-size:20px;
}
.tt{
    margin-bottom:10px;
}
</style>