<template>
  
<div class="qb">
 <div class="oneNav">
<van-sidebar v-model="activeKey" >
  <van-sidebar-item v-for="(item,index) in categorylist"   :key="index" :title="item.name" @click="oneNav(index)" />
  
</van-sidebar>
</div>
<div class="twoNav">
  <van-grid column-num="3" icon-size="100px" :border="false">
  <van-grid-item @click="tiaozhuan(item2.id)" v-for="item2 in twoclass"  :key="item2.id" :icon="item2.list_pic_url"   :text="item2.name" />
</van-grid>
</div>
</div>
</template>

<script>
import { shouye } from '../api/shouye'
export default {
data (){
  return {
    activeKey:0,
categorylist:[],
twoclass:[]
  }
},
mounted() {
this.ss()
},
methods:{
 async ss(){
  const { data } = await shouye()
  console.log(data.data.categoryList);
  this.categorylist = data.data.categoryList
  this.twoclass = data.data.categoryList[0].goodsList
  },
 async oneNav(index){
    const { data } = await shouye()
    this.categorylist = data.data.categoryList
    this.twoclass = data.data.categoryList[index].goodsList
  },
  tiaozhuan(id){
    this.$router.push('/Qxiangqing?id='+id)
  }
},


}
</script>

<style lang="less">
.qb{
  display:flex;
  .twoNav{
    padding:30px;
  }
}
</style>