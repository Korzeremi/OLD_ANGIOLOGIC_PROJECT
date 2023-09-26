import { createRouter, createWebHistory } from 'vue-router';
import Index from '../src/views/Index.vue';
import Home from '../src/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
