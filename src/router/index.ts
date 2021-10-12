import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/components/Login.vue'
import Home from "@/components/Home.vue"
import Welcome from "@/components/Welcome.vue"
import Users from "@/components/Users.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/welcome'
      },
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      }

    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  console.log(tokenStr);

  if (!tokenStr) return next('/login')
  return next()
})

export default router
