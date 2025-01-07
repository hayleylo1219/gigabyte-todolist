import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import HomeView from '../App.vue'
import IndexView from '@pages/Index.vue'
import DemoView from '@pages/Demo.vue'
import ErrorView from '@pages/Error.vue'
import PageNotFoundView from '@pages/PageNotFound.vue'

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
{ path: '/demo', name: 'Demo', component: DemoView }, 
  { path: '/server-error', name: 'ServerError', component: ErrorView },
  { path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFoundView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
