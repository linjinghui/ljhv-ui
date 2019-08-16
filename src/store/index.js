import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({  
	state: {
		user: {
			age: 18
		}
	},  
	getters: {},
  mutations: {
		setAge (state) {
			state.user.age = 10;
		}
	}  
});