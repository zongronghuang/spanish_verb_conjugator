import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchPage from '../views/SearchPage.vue'
import MainPage from '../views/MainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/search'
  },
  {
    path: '/search',
    name: 'search-page',
    component: SearchPage
  },
  {
    path: '/spanish-conjugator',
    name: 'main-page',
    component: MainPage
  },
  {
    path: '*',
    name: 'not-found',
    redirect: '/search',
  }
]

const router = new VueRouter({
  routes
})

export default router
