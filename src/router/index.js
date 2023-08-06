import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
// import Header1 from '../components/Header1.vue'
import Header2 from '../components/Header2.vue'
import UserCenter from '../views/user-center/index.vue'


const UserProfile = () => import('../views/user-center/UserProfile.vue')  
const UserSettings = () => import('../views/user-center/UserSettings.vue')  
const NotFound = () => import('../views/NotFound.vue')
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   components: {
  //     default: HomeView,
  //     top: Header1
  //   }
  // },
    {
    path: '/',
    name: 'home',
    meta: {
      // 需要登录
      requiresAuth: true
    },
    components: HomeView
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
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/user',
    name: 'UserCenter',
    component: UserCenter,
    redirect: '/user/profile',
    children: [
      {
        name: 'profile',
        path: 'profile',
        component: UserProfile,
      },
      {
        name: 'settings',
        path: 'settings',
        component: UserSettings,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/sign/login.vue'  )
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/sign/register.vue'  )
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import(/* webpackChunkName: "Dialog" */ '../views/dialog/dialog.vue'  )
  },{
    path: '/messageBox',
    name: 'MessageBox',
    component: () => import(/* webpackChunkName: "MessageBox" */ '../views/messageBox/messageBox.vue'  )
  },{
    path: '/MessageAlert',
    name: 'MessageAlert',
    component: () => import(/* webpackChunkName: "MessageAlert" */ '../views/messageBox/MessageAlert.vue'  )
  },{
    path: '/MessageConfirm',
    name: 'MessageConfirm',
    component: () => import(/* webpackChunkName: "MessageConfirm" */ '../views/messageBox/MessageConfirm.vue'  )
  },{
    path: '/MessagePrompt',
    name: 'MessagePrompt',
    component: () => import(/* webpackChunkName: "MessagePrompt" */ '../views/messageBox/MessagePrompt.vue'  )
  },{
    path: '/MessageBeforeClose',
    name: 'MessageBeforeClose',
    component: () => import(/* webpackChunkName: "MessageBeforeClose" */ '../views/messageBox/MessageBeforeClose.vue'  )
  },{
    path: '/MessageHTML',
    name: 'MessageHTML',
    component: () => import(/* webpackChunkName: "MessageHTML" */ '../views/messageBox/MessageHTML.vue'  )
  },{
    path: '/MessageRejectAndCallback',
    name: 'MessageRejectAndCallback',
    component: () => import(/* webpackChunkName: "MessageRejectAndCallback" */ '../views/messageBox/MessageRejectAndCallback.vue'  )
  },
  {
    path: '/FourMessagePrompt',
    name: 'FourMessagePrompt',
    component: () => import(/* webpackChunkName: "FourMessagePrompt" */ '../views/messageBox/message/FourMessagePrompt.vue'  )
  },{
    path: '/FourMessage',
    name: 'FourMessage',
    component: () => import(/* webpackChunkName: "FourMessage" */ '../views/messageBox/message/FourMessage.vue'  )
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  // 需要登录
  if (to.meta.requiresAuth && !token) {
      next({name: 'Login'})
      // return {name: 'Login'}
    }
  else {
    next()
}
  return true
});

export default router
