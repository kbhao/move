import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import '../util/vant'
import './assets/css/reset.less'
import '../src/assets/css/iconfonnt/font_01wmw9zbs3ml/iconfont.css'
Vue.filter("RMBformat",val=>{
   return "￥" + val + "元"
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
