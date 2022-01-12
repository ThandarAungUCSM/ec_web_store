import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
const BrandList = () => import('@/views/BrandList')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/BrandList/:name',
    name: 'BrandList',
    component: BrandList,
    props: true
    // beforeEnter: (to, from, next) => 
    // {
    //     next();
    // }
    // beforeEnter: checkAuth
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: "/"
  // },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(), // doesn't affect back-end
  routes
})

router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.name}`);
  next();
});

// function checkAuth(to, from, next) 
// {
//     if (IsAuthenticated()) next();
//     else next("/login");
// }

export default router
