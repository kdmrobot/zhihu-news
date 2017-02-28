/**
 * Created by wb.huanghuaqing on 2017/2/24.
 */
import 'babel-polyfill'
import Vue from 'vue'
import store from './component/store'
import router from './route/routes'

new Vue({
    el: '#app',
    store,
    router,
    template: `
    <div id="app">
      <h1>Active Links</h1>
      <!--<ul>
       <li><router-link to="/">/index</router-link></li>
        <li><router-link to="/country">/country</router-link></li>
        <li><router-link to="/test" >/test</router-link></li>    
      </ul>-->
       <router-view class="view"></router-view>
    </div>
  `
})

