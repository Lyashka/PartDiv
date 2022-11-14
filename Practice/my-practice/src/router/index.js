import { createRouter, createWebHistory } from 'vue-router'
import Auth from '@/pages/Auth'
import Reg from '@/pages/Reg'
import MainMenu from '@/pages/MainMenu'
import ProfileDivision from '@/pages/ProfileDivision'
import ProfilePartner from '@/pages/ProfilePartner'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Auth
  },
  {
    path: '/registration',
    component: Reg
  },
  {
    path: '/menu',
    component: MainMenu
  },
  {
    path: '/profileDivision',
    component: ProfileDivision
  },
  {
    path: '/profilePartner',
    component: ProfilePartner
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
