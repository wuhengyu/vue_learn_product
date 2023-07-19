import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
  },
  {
    path: '/about',
    name: 'about',
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
