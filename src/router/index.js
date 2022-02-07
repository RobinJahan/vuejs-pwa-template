import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Parameters from '../views/Parameters.vue'
import NotFound from '../views/NotFound.vue'
import Camera from '../views/Camera.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera
  },
  {
    path: '/parameters',
    name: 'Parameters',
    component: Parameters
  },
  {
    path: "/*",
    name: 'Not found :(',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
