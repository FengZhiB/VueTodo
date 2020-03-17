import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'all',
  },
  {
    path: '/all',
    name: 'all',
    component: () => import('@/views/all/index.vue')
  },
  {
    path: '/unfinish',
    name: 'unfinish',
    component: () => import('@/views/unfinish/index.vue')
  },
  {
    path: '/finished',
    name: 'finished',
    component: () => import('@/views/finished/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
