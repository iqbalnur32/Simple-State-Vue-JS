import Vue from "vue"
import Vuex from "vuex"
import router from "../router/index.js"
import store from "../store/index.js"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLogin: false,
		errorMessage: '',
		successMessage: '',
		token: '',
		users: ''
	},
	mutations: {
		SET_ERROR_MESSAGE(state, payload) {
			state.errorMessage = payload
			setTimeout(state.errorMessage = null, 2000);
		},
		SET_ISLOGIN(state, payload){
			state.isLogin = payload
		},
	},
	actions: {
		login(context, payload) {
			localStorage.setItem('isLogin', true)
			router.push({
				name:'Home'
			})
		},
		logout(context, payload) {
			router.push({
				name:'Login'
			})
			localStorage.clear()
			context.commit('SET_ISLOGIN',payload)

		}
	},

	modules: {
	}
}) 