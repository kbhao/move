<template>
  <div class="sousuo">
      <van-search class="tabr"  @search="onSearch(searchs)" show-action v-model="searchs"  :placeholder="defaultKeyword.keyword" @input="shijian(searchs)"    @cancel="onCancel" />
     <historylist @bianhua="bianhua" v-if="isshow == 1" :hotkey="hotkey" :defaultKeyword="defaultKeyword" :history="history"></historylist>
     <timesou @lishi="bianhua" v-else-if="isshow == 2" :ttime="ttime"></timesou>
     <allsousuo @fenle="fenle" v-else :allgod="allgod" @fenlei="fenlei" :filterca="filterca"></allsousuo>
  </div>
</template>

<script>
import Allsousuo from '../components/sousuo/allsousuo.vue'
import Historylist from '../components/sousuo/historylist.vue'
import Timesou from '../components/sousuo/timesou.vue'
import { getchuang,timesou,sou} from '../api/shouye'
export default {
  data(){
      return {
          searchs:'',
          //下面三个都是历史搜索
          hotkey:[],
          history:[],
          defaultKeyword:[],
          //展示
          isshow:1,
          //实时搜索
          ttime:[],
          //搜索获得的数组
          allgod:[],
          //搜索分类
          filterca:[],
          page:1,
          size:10,
          order:"desc",
          categoryId:0,
          sort:"id"


      }
  },
   components:{
          Timesou,
          Historylist,
           Allsousuo
    },
    created(){
     this.gethome()
   },
 methods:{
   bianhua(val){
     this.searchs = val
     this.onSearch(this.searchs)
   },
   fenle(val){
     this.order = val
     this.sort = "price"
     this.onSearch(this.searchs)
   },
   fenlei(value){
     
     this.categoryId = value
     this.onSearch(this.searchs)
   },
 async gethome(){
 const {data} = await getchuang()

 this.defaultKeyword = data.data.defaultKeyword
 this.hotkey = data.data.hotKeywordList
 this.history = data.data.historyKeywordList
  },
  //实时搜索
  async shijian(val){
      
     this.isshow = 2
    const {data} = await timesou({keyword:val})
    
    this.ttime = data.data
  },
  onCancel(){
      this.$toast('取消');
      this.$router.go(-1)
  },
  //搜索时触发
 async onSearch(val){
      this.isshow = 0
   const {data} =  await sou({
     keyword:val,
     page:1,
     size:10,
     order:this.order,
     categoryId:this.categoryId,
     sort:this.sort
   })
         
         let news = data.data.filterCategory
         this.allgod = data.data.data
         let newarr = JSON.parse(JSON.stringify(news).replace(/name/g, 'text').replace(/id/g,'value'))
         this.filterca = newarr
        

  }
 }
}
</script>

<style lang="less" scoped>
.sousuo{
    width:100%;
    height:100%;
    background-color:#efefef;
    position:absolute;
    top:0;
    z-index:99;
}
</style>