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
    redirect: '/characters/1'
  },
  {
    path: '/characters/:id',
    name: 'Characters',
    props: true,
    component: () => import(/* webpackChunkName: "Characters" */ '../views/Characters.vue')
  },
  {
    path: '/character/:id',
    name: 'Character',
    props: true,
    component: () => import(/* webpackChunkName: "Character" */ '../views/Character.vue')
  },
  {
    path: '/locations',
    redirect: '/locations/1'
  },
  {
    path: '/locations/:id',
    name: 'Locations',
    props: true,
    component: () => import(/* webpackChunkName: "Locations" */ '../views/Locations.vue')
  },
  {
    path: '/location/:id',
    name: 'Location',
    props: true,
    component: () => import(/* webpackChunkName: "Location" */ '../views/Location.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
