<template>
  <div class="db">
      <div class="tt" v-for="(item) in allgod" :key="item.id" @click="ttzhuan(item.id)">
          <img  class="tp" :src="item.list_pic_url" alt="">
          <span class="ww">{{item.name}}</span>
          <span class="wenzi">${{item.retail_price}}</span>
          
      </div>
      <div class="ff"></div>
  </div>
</template>

<script>
export default {
 props:['allgod'],
 methods:{
     ttzhuan(id){
         this.$router.push('/Qxiangqing?id='+id)
         setTimeout(()=>{
          this.$router.go(0)
         },10)
     }
 }
}
</script>

<style lang="less" scoped>
.db{
 display:flex;
 justify-content: space-between;
 flex-wrap: wrap;
 padding-left:3px;

 .tt{
     width:49%;
     background-color:#efefef;
     display:flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     
     .ww{
         font-size:18px;
     }
     .wenzi{
         
         color:darkred;
     }
     
     .tp{
         width:100%;
     }
 }
 .ff{
     margin-top:10px;
     height:100px;
 }
}
</style>