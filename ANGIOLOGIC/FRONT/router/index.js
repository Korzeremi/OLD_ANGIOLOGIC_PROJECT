import { createRouter, createWebHistory } from 'vue-router';
import Index from '../src/views/Index.vue';
import Project from '../src/views/Project.vue';
import Settings from '../src/views/Settings.vue';
import Help from '../src/views/Help.vue';
import Infos from '../src/views/Infos.vue';
// import Home from '../src/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/Project',
    name: 'Project',
    component: Project,
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/Help',
    name: 'Help',
    component: Help,
  },
  {
    path: '/Infos',
    name: 'Infos',
    component: Infos,
  },
  // {
  //   path: '/Home',
  //   name: 'Home',
  //   component: Home,
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
