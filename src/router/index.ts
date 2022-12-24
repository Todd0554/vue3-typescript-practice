import { createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path:"/",
        component: () => import("@/views/Index.vue"),
        children: [
            {
                path:"",
                redirect:"/home"
            },
            {
                path:"/home",
                component:()=> import("@/views/Home.vue"),
            },
            {
                path:"/me",
                component:()=> import("@/views/Me.vue"),
            },
            {
                path:"/order",
                component:()=> import("@/views/Order.vue"),
            },

        ]
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

// 路由守卫
router.beforeEach((to,from,next)=>{
    const token = localStorage.token ? true : false
    if (to.path === "/login"){
        next()
    }else {
        token ? next() : next("/login")
    }
})

export default router