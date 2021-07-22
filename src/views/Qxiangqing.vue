<template>
  <div>
      <van-swipe :autoplay="3000">
  <van-swipe-item v-for="image in gallery" :key="image.id">
    <img v-lazy="image.img_url"  width="100%"/>
  </van-swipe-item>
</van-swipe>
<tip></tip>
    <div class="acontant" >
        <h2>{{info.name}}</h2>
        <div class="brief">{{info.goods_brief}}</div>
        <div class="price">{{info.retail_price | RMBformat}}</div>
    </div>
    <van-cell title="展示商品" is-link @click="zhanshi=true" />
    <ul class="canshu">
        <h4>商品参数</h4>
        <li class="xiaoli" v-for="(item,index) in attribute" :key="index">
            <div class="le">{{item.name}}</div>
            <div class="r van-ellipsis">{{item.value}}</div>
        </li>
    </ul>
    <div v-html="goods_desc" class="wa"></div>
    <gouwu :gouwuc="gouwuc" @gb="ff" @ss="ww"></gouwu>
    <soubottom :allgod="xg"></soubottom>
    <van-sku
    ref="sku"
  v-model="zhanshi"
  :sku="sku"
  :goods="goods"
/>
    <div style="height: 2rem;"></div>
  </div>
</template>

<script>
import { xgcp,huu,addco } from '@/api/shouye'
import soubottom from '@/components/sousuo/soubottom'
import gouwu from '../components/tt/gouwu.vue'
import { qxiang } from '@/api/shouye'
import tip from '../components/tt/tip.vue'
export default {
data(){
    return {
       gallery:[],
       info:{},
       zhanshi:false,
       attribute:[],
       goods_desc:'',
       xg:[],
       sku:{
           tree:[],
           price: '0', // 默认价格（单位元）
           stock_num: 0, // 商品总库存
         
            
       },
       goods: {
  // 默认商品 sku 缩略图
       picture: ''
    },
    gouwuc:'',
    productLis:[]
    }
},
created(){
    this.getsw()
    this.ss()
  this.hu()
},
components:{
 tip,
 gouwu,
 soubottom
},
methods:{
   async hu(){
     const {data} =  await huu()
     
   this.gouwuc =  data.data.cartTotal.goodsCount
     
    },
    //发送详情数据
    ww(){
       
    },
   async ff(){
         if(this.zhanshi){
       const {data}  = await addco({
                 goodsId:this.$route.query.id,
                 number:this.$refs.sku.getSkuData().selectedNum,
                 productId:this.productLis[0].id
             })
            this.gouwuc = data.data.cartTotal.goodsCount
            setTimeout(()=>{
                this.$router.push('/cart')
            },1000)
            
        } else{
            this.zhanshi = true
        }
    },
async getsw(){
 const res = await qxiang({
       id:this.$route.query.id
   })
   
  this.gallery = res.data.data.gallery
  this.info = res.data.data.info
  this.attribute = res.data.data.attribute
            this.goods_desc = this.info.goods_desc
            this.goods.picture = this.info.list_pic_url
        this.productLis =  res.data.data.productList
      this.sku.stock_num = this.info.goods_number
      this.sku.price = this.info.retail_price
 },
 //发送相关数据
 async ss(){
    const { data } = await xgcp({
        id:this.$route.query.id
    })
    
    this.xg = data.data.goodsList
 }
}
}
</script>

<style lang="less" scoped>
.acontant{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:18px;
    padding:10px;
    border-bottom:.1px solid #ccc;
    .brief{
        margin-top:3px;
        font-size:13px;
        margin-bottom: 10px;
    }
    .price{
        font-size:16px;
        color:red;

    }
    
}
.canshu{
    margin-top:20px;
    background-color:#fff;
    h4{
        margin-top:-10px;
        margin-bottom:8px;;
        font-size:20px;
    }
    .xiaoli{
        display:flex;
        font-size:15px;
        background-color:#efefef;
        margin-bottom:10px;
        height:30px;
           align-items: center;
    }
    .le{
       
        text-align:right;
        width:30%;
        margin-right:16px;
    }
    .r{
        flex:1;
    }
    
}
/deep/.wa{
    img{
        width:100%;
    }
}
</style>