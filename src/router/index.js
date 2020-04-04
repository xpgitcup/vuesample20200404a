import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', name: '', component: () => import('../components/default.vue'),  // 原来叫 Home,系统提示删掉
            children: [
                {path: '', name: 'status', component: () => import('../components/home/status')},
                {path: 'topography', name: 'topography', component: () => import('../components/basic/topography')},
                {path: 'stations', name: 'stations', component: () => import('../components/basic/stations')}
            ]
        },
        {path: '/Login', name: 'Login', component: Login}
    ]
})
