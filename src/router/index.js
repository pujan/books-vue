import { createRouter, createWebHistory } from 'vue-router';
import Authors from '../views/Authors.vue';
import Books from '../views/Books.vue';
import Home from '../views/Home.vue';
import BookDetails from '../views/BookDetails.vue';
import AuthorDetails from '../views/AuthorDetails.vue';

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
        component: Books,
        // component: () => import(/* webpackChunkName: "books" */ '../views/Books.vue')
    },
    {
        path: '/books/:id',
        name: 'book-details',
        props: true,
        component: BookDetails
    },
    {
        path: '/authors',
        name: 'Authors',
        component: Authors
        // component: () => import(/* webpackChunkName: "about" */ '../views/Authors.vue')
    },
    {
        path: '/authors/:id',
        name: 'author-details',
        props: true,
        component: AuthorDetails
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
