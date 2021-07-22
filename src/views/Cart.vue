<template>
  <div>
    <tip class="tt"></tip>
    <van-checkbox-group v-model="result" >
  <van-checkbox  :name="item.id" v-for="(item) in goos" :key="item.id" @click="gb(item)">
    <van-swipe-cell>

    <van-card 
  :num="item.number"
  :price="item.retail_price"
  :title="item.goods_name"
  :thumb="item.list_pic_url"
/>
  <template #right>
    <van-button square type="danger" @click="deo(item.product_id)" text="删除" />
   
  </template><van-stepper v-show="shww" v-model="item.number" @change="spgb(item)" />

</van-swipe-cell>
</van-checkbox>

</van-checkbox-group>
<van-submit-bar :price="goodt.checkedGoodsAmount*100"  :key="goodt.item" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="checkedall">全选</van-checkbox>
  <template #tip>
    累计共<span>{{goodt.checkedGoodsCount}}</span>件商品，可点击<van-button :type="shww?'danger':'primary'" size="mini" @click="edit">{{shww?'完成编辑':'编辑'}}</van-button> 
  </template>
</van-submit-bar>
  </div>
</template>

<script>
import tip from '../components/tt/tip.vue'
import { catr,gbs,spg,de } from '@/api/shouye'
export default {
  data() {
    return {
      
      result: [],
      goos:[],
      goodt:{},
      shww:false
    }
  },
  components:{
    tip
  },
  created(){
    this.agcat()
  },
  computed:{
checkedall:{
  get(){
    return this.result.length == this.goos.length
  },
  set(val){
    let ee = []
     this.goos.map(item =>{
       ee.push(item.product_id)
     })
     this.result = []
  const {data} =  gbs({
        isChecked:val?1:0,
        productIds:ee.join()
      })
      this.agcat(data)
  }
}},
  methods:{
    onSubmit(){},
    checked(){},
    async gb(item){
   const {data} =   await gbs({
        isChecked:item.checked==0?1:0,
        productIds:item.product_id
      })
      
      this.agcat(data)
    },
   async agcat(c){
    const {data} =  await catr()
    console.log(data);
    this.goos = data.data.cartList
    this.goodt = data.data.cartTotal
    if(c){
      this.goos = c.data.cartList
      this.goodt = c.data.cartTotal
    }
    this.goos.map(item =>{
      item.checked == 1 ? this.result.push(item.id):"";
    })
    },
    edit(){
      this.shww = !this.shww
    },
    async spgb(item){
     const {data} = await spg({
       goodsId:item.goods_id,
       id:item.id,
       number:item.number,
     productId:item.product_id
     })
     this.agcat(data)
    },
   async deo(c){
     const data = await de({
       productIds:c.toString()
       }
     )
     this.agcat()
    }
  }
}
</script>

<style lang="less" scoped>
.van-checkbox-group{
  padding-bottom:10px;
}
.tt{
  padding:10px;
 height:20px;
}
.van-checkbox{
  margin-bottom:3px;
border-bottom:.1px solid #000;  
 /deep/.van-swipe-cell{
      height:100%;
    }
/deep/ .van-checkbox__label{
  flex:1;
}}
.van-submit-bar{
bottom:40px;
.van-submit-bar__tip{
  font-size:13px;
  padding-top:6px;
  margin-top:6px;
  .van-button{
   margin-left:10px;
  }
}
}
.van-stepper{
  text-align: right;
} 
   .van-swipe-cell__right{
    .van-button{
    height:100%;}
   }



</style>