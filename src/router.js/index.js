import { createRouter, createWebHistory } from "vue-router";

import IndexView from '@/views/layout/Indexview.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
    {
        path: '/',
        component: IndexView
    }, {
        path: '/login',
        component: LoginView
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router