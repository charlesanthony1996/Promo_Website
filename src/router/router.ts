import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import About from '../components/About.vue'
import Home from "../components/Home.vue"


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
 
//   { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// auth setup

// router.beforeEach((to, from, next) => {
// // 

// })

export default router
