<template>
  <div class="qb">
    <van-row class="ee" @click="isw=!isw">
  <van-col class="tt" span="8">
    <van-image class="img"
    round
  :src="avatar"

/>
  </van-col>
  <van-col span="13">{{name}}</van-col>
  <van-col span="1" class="tte"><van-icon name="arrow" /></van-col>
</van-row>
<van-grid :column-num="3">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid>
<div class="dl" v-show="isw" >
  <div class="hy" @click="isw=!isw"></div>
<van-form class="ttew" @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>
</div>

  </div>
</template>

<script>
import { denglu } from '@/api/shouye'
export default {
 data(){
   return {
     isw:false,
      username: '',
      password: '',
      avatar:require('../assets/cat.png'),
      name:''
   }
   
 },
 created(){
   let token = localStorage.getItem("token")
   if(token){
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
   this.avatar = userInfo.avatar
  this.name =  userInfo.name
   }
 },
   methods: {
  async  onSubmit(values) {
      console.log('username',values["用户名"])
      console.log('password',values["密码"])
      let username = values["用户名"]
      let pwd = values["密码"]
    const res = await denglu({username, pwd})
    console.log(res);
    if(res.data.errno == 0){
    localStorage.setItem("token",res.data.data.token)
    localStorage.setItem("userInfo",JSON.stringify(res.data.data.userInfo))
 this.avatar = res.data.data.userInfo.avatar
    this.name = res.data.data.userInfo.name
    setTimeout(() => {
    this.isw = !this.isw
    }, 1000)
   }
    }
  },
}
</script>

<style lang="less" scoped>
.ee{
  padding:10px;
  font-size:20px;
  background-color:pink;
  height:50px;
  display:flex;
  justify-content: space-between;
  align-items: center;
.tt{
  .img{
    width:70%;
    height:70%;
    padding-top:5px;
  }
}

}
.dl{
  position:absolute;
  left:0%;
  top: 0%;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,.5);
  z-index:99;
  .hy{
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.5);
  }
  .ttew{
    width:90%;
    background-color:#fff;
    padding-bottom:.2px;
    position:absolute;
    left:45%;
    top:40%;
    margin-left:-40%;
  }
}

</style>