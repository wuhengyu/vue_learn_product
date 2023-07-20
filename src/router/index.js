import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
=======
import AboutView from '../views/AboutView.vue'
import Header1 from '../components/Header1.vue'
import Header2 from '../components/Header2.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/',
    name: 'home',
    component: {
      default: HomeView,
      top: Header1
    }
>>>>>>> 2197ae4b0a9961105719965c2322d1451258fd5c
  },
  {
    path: '/about',
    name: 'about',
<<<<<<< HEAD
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
=======
    component: {
      default: AboutView,
      top: Header2
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../views/IndexView.vue')
  },
  {
    path: '/gohome',
    name: 'gohome',
    component: () => import(/* webpackChunkName: "gohome" */ '../views/GoHomeView.vue')
>>>>>>> 2197ae4b0a9961105719965c2322d1451258fd5c
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
