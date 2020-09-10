import Vue from 'vue'
import Router from 'vue-router'
import store from "../store/index.js"

Vue.use(Router)

const BaseRouter = [
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "about" */ '@/components/login/Login.vue'),
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import(/* webpackChunkName: "about" */ '@/components/Home.vue'),
	}
]

const routes = new Router({
	mode: 'history',
	routes: BaseRouter
})

routes.beforeEach((to, before, next) => {
	if(to.path != '/login'){
		if (store.state.isLogin) {
			next()
		}else{
			next({
				path: '/login'
			})
		}
	}else{
		next()
	}

	next()
})

export default routes
