import axios from 'axios'
export const request = axios.create({
    baseURL:'http://kumanxuan1.f3322.net:8001'
})
request.interceptors.request.use(config =>{
  let token = localStorage.getItem('token')
  if(token){
      config.headers["X-Nideshop-Token"] = token
  }
  return config},err=>{
   return Promise.reject(err)
  }
)
