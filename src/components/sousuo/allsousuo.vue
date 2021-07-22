<template>
  <div>
      <van-dropdown-menu>
  <van-dropdown-item title="按价格排序" @change="fenle" v-model="price" :options="option1" />
  <van-dropdown-item title="分类" @change="fenlei" v-model="valu" :options="filterca" />
</van-dropdown-menu>
<van-empty v-if="allgod.length== 0" description="暂无该产品" />
<soubottom v-else :allgod="allgod"></soubottom>
  </div>
</template>

<script>
import soubottom from './soubottom.vue'
export default {
  name:'allsou',
  data() {
    return {
      price: "desc",
      valu:"",
      option1: [
        { text: '价格从高到低', value: 'desc' },
        { text: '价格从低到高', value: 'asc' }
      ],
 
    };
  },
  props:['allgod','filterca'],
  components:{
      soubottom
  },
  methods:{
   fenlei(value){
     console.log(value);
    this.$emit("fenlei",value)
   },
   fenle(value){
     console.log(value);
     this.$emit('fenle',value)
   }
  },
  beforeUpdate(){
    this.filterca.map(item =>{
      if(item.checked){
       this.valu = item.value
      }
    })
  }
}
</script>

<style>

</style>