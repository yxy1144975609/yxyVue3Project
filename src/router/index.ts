import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routerList = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/scss',
      name: 'scss',
      component: () => import('../views/Scss.vue'),
    },
    {
      path: '/typeScript',
      name: 'typeScript',
      component: () => import('../views/TypeScript/TypeScript1.vue'),
    },

     // vue3 练习
    {
      path: '/setupDemo1',
      name: 'setupDemo1',
      component: () => import('../views/SetupDemo/SetupDemo1.vue'),
    },
    {
      path: '/setupDemo2',
      name: 'setupDemo2',
      component: () => import('../views/SetupDemo/SetupDemo2.vue'),
    },
    {
      path: '/refAndReactive',
      name: 'refAndReactive',
      component: () => import('../views/SetupDemo/响应式.vue'),
    },
    {
      path: '/vueDirectives',
      name: 'vueDirectives',
      component: () => import('../views/SetupDemo/vue指令.vue'),
    },

    // 前端三核心
    {
      path: '/htmlLabel',
      name: 'htmlLabel',
      component: () => import('../views/webThreeCores/html标签.vue'),
    },
    {
      path: '/js',
      name: 'JS',
      component: () => import('../views/webThreeCores/js关键字.vue'),
    },
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerList,
})

export default router
