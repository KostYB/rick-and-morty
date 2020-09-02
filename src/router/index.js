import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '../views/Catalog.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/characters',
    name: 'Characters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Characters" */ '../views/Characters.vue')
  },
  {
    path: '/character/:id',
    name: 'Character',
    props: true,
    component: () => import(/* webpackChunkName: "Character" */ '../views/Character.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
