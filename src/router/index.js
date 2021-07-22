import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}
const routes = [
{
  path:'/',
  name:'home',
  component:Home,
  meta:{
    actives:0,
    showw:true
  },
  children:[{
    path:'shopsou',
    component:() => import('@/views/Shopsou')
  }]
},
{
  path:'/my',
  name:'my',
  meta:{
    actives:3,
    showw:true
  },
  component:() => import('@/views/My')
},
{
  path:'/xiangqing',
  name:'xiangqing',
  meta:{
    actives:1,
    showw:true
  },
  component:() => import('@/views/Xiangqing')
},
{
  path:'/cart',
  name:'cart',
  meta:{
    actives:2,
    showw:true
  },
  component:() => import('@/views/Cart')
},
{
  path:'/qxiangqing',
  name:'qxiangqing',
  component:() => import('@/views/Qxiangqing')
}


]

const router = new VueRouter({
  routes
})



export default router
