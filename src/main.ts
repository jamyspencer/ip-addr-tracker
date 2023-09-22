import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'

const routes = [
    {
        path: "/",
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const pinia = createPinia()


/* add icons to the library */
library.add(faChevronRight)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(pinia)
    .mount("#app")

