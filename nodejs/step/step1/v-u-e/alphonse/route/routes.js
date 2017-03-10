/**
 * Created by wb.huanghuaqing on 2017/2/27.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Counter from '../component/Counter.vue'
Vue.use(VueRouter)
import index from '../component/index.vue'

/*const test = { template: '<div>test</div>' }
const routes = [
    { path: '/', component:index },
    { path: '/country', component: Counter },
    { path: '/test', component: test }
]
const Home = { template: '<div><h2>Home</h2></div>' }
const About = { template: '<div><h2>About</h2></div>' }

const Users = {
    template: `
    <div>
      <h2>Users</h2>
      <router-view></router-view>
    </div>
  `
}*/
const Home = { template: '<div><h2>Home</h2></div>' }
const About = { template: '<div><h2>About</h2></div>' }
const User = { template: '<div>{{ $route.params.username }}</div>' }
const Users = {
    template: `
    <div>
      <h2>Users</h2>
      <router-view></router-view>
    </div>
  `
}
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/users', component: Users,
            children: [
                { path: ':username', name: 'user', component: User }
            ]
        }
    ]
})

/*const router = new VueRouter({
    mode: 'history',
    base:__dirname+'',
    routes:routes
})*/

export default router

