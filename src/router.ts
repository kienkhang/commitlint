import { createRouter, createWebHistory } from 'vue-router'
import FormDetail from "./components/FormDetail.vue"
import Login from "./components/Login.vue"


const routes = [
    {
        path: '/',
        component: FormDetail
    },
    {
        path: '/login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router