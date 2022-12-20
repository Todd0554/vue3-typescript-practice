import { createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path:"/",
        component: () => import("@/views/Index.vue")
    },
    {
        path:"/login",
        component: () => import("@/views/LogIn.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router