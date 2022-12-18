import { createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path:"/",
        component: () =>("@/views/Index.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router