import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue')
  },
  {
    path: '/shoppinglist',
    name: 'ShoppingList',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingList.vue')
  },
  {
    path: '/emailvalidationpage',
    name:'EmailValidationPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmailValidationPage.vue')
  },
  {
    path: '/emailtaken',
    name:'EmailTaken',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmailTaken.vue')
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')

  },

]

const router = new VueRouter({
  routes
})

export default router


// sdfsdfsdf
