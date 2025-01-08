import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import HomeView from '../App.vue'
import IndexView from '@pages/Index.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', 
    name: 'Home',
    component: HomeView,
    children: [
      {
        path: 'index',
        name: 'Index',
        alias: '/',
        component: IndexView,
      },
  ] 
},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
