import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movement',
    name: 'Movement',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Movement.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'page-not-found',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/PageNotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
