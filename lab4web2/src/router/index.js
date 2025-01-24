import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/page/:id',
      name: 'dynamic-page',
      component: () => import('../views/DynamicPageView.vue'),
    },
    {
      path: "/recipe/:id",
      name: "recipe-details",
      component: () => import("../views/RecipeDetailsView.vue"),
      props: true,
    },
    {
      path: '/lazy',
      name: 'lazy',
      component: () => import('../views/LazyLoadedView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
});

export default router;
