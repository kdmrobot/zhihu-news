/**
 * Created by wb.huanghuaqing on 2017/2/27.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Counter from '../country/Counter.vue'
Vue.use(VueRouter)
import index from '../country/index.vue'
const test = { template: '<div>test</div>' }
const routes = [
    { path: '/', component:index },
    { path: '/country', component: Counter },
    { path: '/test', component: test }
]

const router = new VueRouter({
    mode: 'history',
    base:__dirname+'',
    routes:routes
})

export default router

