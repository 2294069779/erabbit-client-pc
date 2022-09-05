import { createRouter, createWebHashHistory } from 'vue-router'
import TopCategory from '@/views/category'
import SubCategory from '@/views/category/sub'
const Layout = () => import('@/views/Lay-out')
const Home = () => import('@/views/home')

const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: Layout,

    children: [ // 二级路由布局容器
      { path: '/', component: Home },
      { path: '/category/:id', component: TopCategory },
      { path: '/category/sub/:id', component: SubCategory }
    ]
  }
] // 路由规则

// vue 2.0 new VueRouter({}) 创建路由实例
// vue 3.0 createRouter({}) 创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // 使用hash 的路由模式
  routes
})

export default router
