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
    path: '/sort/:id/:name',
    component: () => import('@/views/sortGoods.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/cart',
    component: () => import('@/views/cart.vue'),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/goodsdet/:id',
    component: () => import('@/views/goodsDet.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/order',
    component: () => import('@/views/order.vue'),
    meta: {
      keepAlive: true,
    },
  },
]
// 工厂函数创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 进入新页面回到顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
