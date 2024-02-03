import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/Layout.vue'),
    children: [
      {
        path:'home',
        alias:'',
        component: () => import('@/views/home/Home.vue'),
      },
      {
        path: 'cart',
        component: () => import('@/views/ShoppingCart.vue'),
      },
      {
        path: 'user',
        component: () => import('@/views/UserInfo.vue'),
      },
    ],
  },
 
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
