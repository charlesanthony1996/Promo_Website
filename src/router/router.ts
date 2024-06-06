import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import About from '../components/About.vue'
import Home from "../components/Home.vue"
import DataPrivacy from '../components/DataPrivacy.vue'
import Faq from '../components/Faq.vue'


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
    },
    {
        path: '/data_privacy',
        name: 'data_privacy',
        component: DataPrivacy
    },
    {
        path: '/faq',
        name: 'faq',
        component: Faq
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
