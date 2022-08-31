import { createRouter, createWebHistory } from 'vue-router';
import SallyView from '../views/SallyView.vue';

const routes = [
  {
    path: '/',
    name: 'sally',
    component: SallyView,
  },
  {
    path: '/brown',
    name: 'brown',
    component() {
      return import(/* webpackChunkName: "brown" */ '../views/BrownView.vue');
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
