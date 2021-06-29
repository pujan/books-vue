import { createRouter, createWebHistory } from 'vue-router'
import Authors from '../views/Authors.vue'
import Books from '../views/Books.vue'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
        // component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/books',
        name: 'Books',
        component: Books
        // component: () => import(/* webpackChunkName: "books" */ '../views/Books.vue')
    },
    {
        path: '/authors',
        name: 'Authors',
        component: Authors
        // component: () => import(/* webpackChunkName: "about" */ '../views/Authors.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
