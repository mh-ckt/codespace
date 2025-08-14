import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'nav',
      component: () => import('@/layouts/nav.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/layouts/nav.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('@/layouts/nav.vue')
    },
    {
      path: '/csss',
      name: 'csss',
      component: () => import('@/layouts/nav.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/layouts/nav.vue')
    }
  ]
})

export default router
