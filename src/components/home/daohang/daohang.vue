<template>
  <div>
      <div class="zhongjian">
          <ul v-for="item in peijian" :key="item.id" @click="ttiao(item.id)">
              <li><img :src="item.icon_url" alt="">
                  <span class="wenzi">{{item.name}}</span>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
props:['peijian'],
methods:{
    ttiao(id){
        this.$router.push('/xiangqing?id='+id)
    }
}
}
</script>

<style scoped lang="less">
.zhongjian{
    display:flex;
    justify-content: space-around;
    align-items: center;
    .wenzi{
        display:flex;
        justify-content: center;
        align-items: center;
        font-size:15px;
    }
}
</style>