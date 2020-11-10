import {createRouter, createWebHistory} from 'vue-router'
import Landing from './components/Landing.vue'
import Landing2 from './components/landing2a.vue'
const routes =[
    {path:'/',component:Landing},
    {path:'/index2',component:Landing2}
]
const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router