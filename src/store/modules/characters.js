

export default {
  state: {
    characters: []
  },
  getters: {
    CHARACTERS: state => {
      return state.characters
    }
  },
  mutations: {
    SET_CHARACTER: (state, payload) => {
      state.characters = payload
    }
  },
  actions: {
    GET_CHARACTER: async ({ commit }) => {
      await fetch('https://rickandmortyapi.com/api/character/')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          commit('SET_CHARACTER', data)
        })
    }
  }
}

