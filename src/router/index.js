import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // router-link标签跳转
  {
    path: '/wuhengyu1',
    name: 'wuhengyu1',
    component: () => import(/* webpackChunkName: "wuhengyu1" */ '../views/WuHengYu1.vue')
  },
  {
    path: '/wuhengyu2',
    name: 'wuhengyu2',
    component: () => import(/* webpackChunkName: "wuhengyu2" */ '../views/WuHengYu2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
