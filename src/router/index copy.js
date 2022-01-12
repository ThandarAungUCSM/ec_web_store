import { createRouter, createWebHistory } from 'vue-router' 
import App from '@/App'
// import VueMeta from 'vue-meta';
import Home from '../views/Home.vue'

// const Home = r => require(['@/views/Home.vue'], r);
const BrandList = r => require(['@/views/BrandList.vue'], r);
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }
// ]

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
          path: '',
          name: 'Home',
          component: Home,
          redirect: '/Home'
      },
      {
          path: '/about',
          name: 'About',
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
          path: '/brandList',
          name: 'BrandList',
          component: BrandList
      }
    ]
  }
]

// const app = createApp(App);
const router = createRouter({
  history: createWebHistory,
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log(to.meta);
//   next();
// });
// https://vuejscode.com/ncaught-typeerror-cannot-use-in-operator-to-search-for-path-in-undefined-vue-router

// app.use(VueMeta)
// app.use(router)
export default router
