import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/LayoutBox.vue'),
    children: [
      {
        path:'home',
        alias:'',
        component: () => import('@/views/home/Home.vue'),
        children:[{
          path:':catagoryId',
          component:()=>import('@/views/home/Home.vue'),
        }],
      },
      {
        path: 'cart',
        component: () => import('@/views/ShoppingCart.vue'),
        meta:{
          needAuth:true
        }
      },
      {
        path: 'user',
        component: () => import('@/views/UserInfo.vue'),
        meta:{
          needAuth:true,
        }
      },
      {
        path: 'product/:id',
        component: () => import('@/views/ProductView.vue'),
      },
     
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/AuthPage.vue'),
  },
  {
    path: '/register',
    component: () => import('@/views/AuthPage.vue'),
  },
 
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to,from)=>{
  const loginUser = useLoginUserStore()
  if(to.meta.needAuth){
    if(!loginUser.isLogin){
      return '/login'
    }}
})

export default router