
import VueRouter from 'vue-router'
import Vue from 'vue'

import Main from '../pages/Main.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
		path: '/',
		name: 'mainPage',
		component: Main,
		props: true
	}]
})
