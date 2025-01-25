import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/series/:id',
      name: 'series-details-id',
      component: () => import('../views/SeriesDetailsView.vue'),
    },
    {
      path: '/series',
      name: 'series-details',
      component: () => import('../views/SeriesView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
