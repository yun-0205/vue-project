import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/products1',
      name: 'products1',
      component: () => import('../views/Products1.vue')
    },
    {
      path: '/products2',
      name: 'products2',
      component: () => import('../views/Products2.vue')
    },
  ]
})

export default router
