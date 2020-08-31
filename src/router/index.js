import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import maintenanceRouter from './modules/maintenance'
import userRouter from './modules/user'
import baseInfoRouter from './modules/baseInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: { name: 'Home' },
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: { title: '首页', icon: 'el-icon-s-home' },
        component: () => import('@/views/home')
      },
      maintenanceRouter,
      userRouter,
      baseInfoRouter
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
