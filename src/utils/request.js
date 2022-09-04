// 1、创建axios实例
// 2、请求拦截器，如果有token进行头部携带
// 3、 响应拦截器 1、剥离无效数据 2.处理token时效
// 4、导出一个函数，调用当前的axios实例发请求，返回值promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'

export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const request = axios.create({ // 创建一个新的axios实例。request就等于axios
//   baseURL,
  baseURL,
  timeout: 5000
})
// 请求拦截器
request.interceptors.request.use(config => {
  const { profile } = store.state.user
  if (profile.token) { // 判断有没有token
    config.headers.Authorization = `Bearer ${profile.token}`
  }

  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器

request.interceptors.response.use(res => res.data, err => {
  // 401状态码 token时效
  if (err.response && err.response.status === 401) {
    store.commit('user/setuser', {})
    // 获取当前路由地址
    // 组件里头：‘$route.path
    // js 模块中： router.currentRoute == $route. fullpath:完整地址，router.currentRoute是ref响应式数据。需要在value
    const fullpath = encodeURIComponent(router.currentRoute.value.fullPath) // encodeURIComponent 是js原生转码方法
    router.pash('/login?redirectUrl=' + fullpath) // 跳到登录页，并携带参数
  }
  return Promise.reject(err)
})

// 封装一个请求工具函数
export default (url, method, submitDate) => {
  return request({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitDate
    // 因为传参是动态的，可能是get的使用parmas ？a=10&b=10，不是就用data 请求体传参。
    // [] 设置一个动态的key。里面可以写js表达式，js表达式的执行结果当作KEY
  })
}
