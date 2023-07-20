import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Header1 from '../components/Header1.vue'
import Header2 from '../components/Header2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      top: Header1
    }
  },
  {
    path: '/about',
    name: 'about',
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    components: {
      default: AboutView,
      top: Header2
    }
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
