import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Search from '../views/Search.vue'
import ConjugationCard from '../views/Card.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/search'
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/conjugation_card',
    name: 'conjugation-card',
    component: ConjugationCard
  },
  // {
  //   path: '/wordcard',
  //   name: 'word-card',
  //   component: () => import('../views/WordCard.vue')
  // },
  // {
  //   path: '/memorycard',
  //   name: 'memory-card',
  //   component: () => import('../views/MemoryCard.vue')
  // },
  // {
  //   path: '/testcard',
  //   name: 'test-card',
  //   component: () => import('../views/TestCard.vue')
  // },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
