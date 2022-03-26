import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    component: () => import('@/views/index.vue'),
    name: 'index',
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    name: 'login',
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/register',
    component: () => import('@/views/register.vue'),
    name: 'register',
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/sort/:id',
    component: () => import('@/views/sortGoods.vue'),
    meta: {
      keepAlive: false,
    },
  },
]
// 工厂函数创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
