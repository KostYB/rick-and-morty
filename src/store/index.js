import Vue from 'vue'
import Vuex from 'vuex'
import characters from './modules/characters.js'
import locations from './modules/locations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    characters,
    locations
  }
})
