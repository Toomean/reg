
import VueRouter from 'vue-router'
import Vue from 'vue'

import Main from '../pages/Main.vue'
import Tile from '../pages/Tile.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: Main
        },
        {
            path: '/tile/:id',
            name: 'TilePage',
            component: Tile,
            props: true
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
