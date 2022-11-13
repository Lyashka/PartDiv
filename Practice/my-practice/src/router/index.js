import { createRouter, createWebHistory } from 'vue-router'
import Auth from '@/pages/Auth'
import Reg from '@/pages/Reg'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Auth
  },
  {
    path: '/registration',
    component: Reg
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
