import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 123,
  name:"huanghuaqing"
}
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  changeName(state,value){
    state.name = value
  }
}

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  },
  setName ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('changeName','haha')
        resolve()
      }, 1000)
    })
  }
}
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
