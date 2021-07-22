<template>
  <div>
      <div class="libiao">
          <div class="title">品牌制造商首页</div>
          <div class="tou">
          <div class="wupin" v-for="item in homeli" :key="item.id" @click="ttiao(item.id)">
                  <img class="wuimg" :src="item.app_list_pic_url" alt="">
                  <div class="one">{{item.name}}</div>
                  <div class="two">￥{{item.floor_price}}</div>
              </div>
              </div>
              
          
      </div>
  </div>
</template>

<script>
export default {
 props:['homeli'],
 methods:{
     ttiao(id){
         this.$router.push('/Qxiangqing?id='+id)
     }
 }
}
</script>

<style lang="less" scoped>
.libiao{
    .title{
        display:flex;
        justify-content: center;
        align-items: center;
        padding:17px;
        font-size:20px;
    }
  .tou{
      display:flex;
      flex-wrap: wrap;
      
      .wupin{
          width:49%;
          margin-right: 2.5px;
          position: relative;
          .wuimg{
              width:100%;
          }
          .one{
              position:absolute;
              top:6px;
              left:10px;
              font-size:15px;
          }
          .two{
              padding:10px 0 0 0;
              position:absolute;
              top:25px;
              left:1px;
              font-size:18px;
              color:red;
          }
      }
  }
    
}
</style>