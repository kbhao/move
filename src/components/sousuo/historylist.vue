<template>
  <div>
      <div class="all" v-if="iss">
       <div class="top">
           <h4>历史记录</h4>
            <van-icon name="delete" @click.native="shanchu()"/>
       </div>
       <div class="tag">
           <van-tag @click="bianhua(item)" v-for=" (item, index) in history" :key="index">{{item}}</van-tag>

</div>
      </div>
         <div class="all">
       <div class="top">
           <h4>热门搜索</h4>
            <van-icon name="delete" ></van-icon>
       </div>
       <div class="tag" >
           <van-tag @click="bianhua(item.keyword)"  v-for=" (item, index) in hotkey" :class="item.is_hot ? 'red':''" :key="index">
               {{item.keyword }}
           </van-tag>

</div>
      </div>
  </div>
</template>

<script>
import { deletes } from '@/api/shouye.js'
export default{
    data(){
    return {
        iss:true
    }
    },
 props:['defaultKeyword','hotkey','history' ],
 methods:{
     bianhua(val){
         this.$emit('bianhua',val)
     },
     shanchu(){
     const sc =  deletes()
     if (sc.errno == 0){
       this.$toast.success('删除成功')
       this.iss = false
     }
     }
 }
}
</script>

<style lang="less" scoped>
.all{
    margin-bottom: 18px;
.top{
    display:flex;
    justify-content: space-between;
    padding:10px;
    background-color:#fff;
}
.tag{
    
        background-color:#fff;
  .van-tag{
      margin-left:14px;
  }
}}
.red{
    color:red;
}
</style>