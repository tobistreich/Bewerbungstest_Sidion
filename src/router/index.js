// DEFINE OUR ROUTING RULES //
import {createRouter, createWebHistory} from "vue-router"
import QuizView from "../views/QuizView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/quiz/:id",
            name: 'quiz',
            component: QuizView
        },
    ]
})

export default router