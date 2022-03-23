import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    component: () => import('@/views/index.vue'),
  },
]
// 工厂函数创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
