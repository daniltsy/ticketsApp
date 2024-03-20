import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Help from '../views/Help.vue';
import Auth from '@/views/Auth.vue';
import store from '@/store/index';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/help',
    name: 'help',
    component: Help,
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      layout: 'auth',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth;
  if (requireAuth && store.getters['auth/isAuth']) {
    next();
  } else if (requireAuth && !store.getters['auth/isAuth']) {
    next('/auth?message=auth');
  } else {
    next();
  }
});

export default router;
