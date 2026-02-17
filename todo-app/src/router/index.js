import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'

const routes = [
  { path: '/', component: Signup },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
