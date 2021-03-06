/*
 * @Author: TerryMin
 * @Date: 2022-05-28 23:28:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-07-05 16:47:05
 * @Description: file not
 */
import { createStore } from "vuex"

// root state object.
// each Vuex instance is just a single state tree.
const state = {
	count: 0,
	name: "zhangsan"
}

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
	increment(state) {
		state.count++
	},
	decrement(state) {
		state.count--
	},
	changeNames(state) {
		state.name = "TerryMin"
	}
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
	increment: ({ commit }) => commit("increment"),
	decrement: ({ commit }) => commit("decrement"),
	changeName: ({ commit }) => commit("changeNames"),
	incrementIfOdd({ commit, state }) {
		if ((state.count + 1) % 2 === 0) {
			commit("increment")
		}
	},
	incrementAsync({ commit }) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				commit("increment")
				resolve()
			}, 1000)
		})
	}
}

// getters are functions.
const getters = {
	evenOrOdd: (state) => {
		console.log(55, state)
		return state.count % 2 === 0 ? "even" : "odd"
	}
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
	state,
	getters,
	actions,
	mutations
})
