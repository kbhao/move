import { request } from './request'
export const shouye = () =>{
    return request({
        url:'/index/index',
        method:'GET'
    })
}
export const catelist = (data) =>{
  return request({
      url:'/goods/category',
      method:'GET',
      data
  })
}
export const getchuang = ()  =>{
    return request({
        url:'/search/index',
        methods:'GET'
    })
}
export const timesou = params => request.get("/search/helper",{params})
export const sou = params => request.get("/goods/list",{params})
export const deletes = () => request.post('/search/clearhistory')
export const denglu = params => request.post('/auth/loginByWeb',params)
export const qxiang = params => request.get('/goods/detail',{params})
export const xgcp = params => request.get('/goods/related',{params})
export const huu =  () => request.get('/cart/goodscount')
export const addco = params => request.post('/cart/add',params)
export const catr = () => request.get('/cart/index')
export const gbs = params => request.post('/cart/checked',params)
export const spg = params => request.post('/cart/update',params)
export const de = params => request.post('/cart/delete',params)
    
