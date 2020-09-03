

export default {
  state: {
    characters: [],
    characterById: []
  },
  getters: {
    CHARACTERS: state => {
      return state.characters
    },
    CHARACTER_BY_ID: state => {
      return state.characterById
    }
  },
  mutations: {
    SET_CHARACTERS: (state, payload) => {
      state.characters = payload
    },
    SET_CHARACTER_BY_ID: (state, payload) => {
      state.characterById = payload
    }
  },
  actions: {
    GET_CHARACTERS: async ({ commit }) => {
      await fetch('https://rickandmortyapi.com/api/character/')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          commit('SET_CHARACTERS', data)
        })
    },
    GET_CHARACTER_BY_ID: async ({ commit }, payload) => {
      await fetch('https://rickandmortyapi.com/api/character/' + payload)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          commit('SET_CHARACTER_BY_ID', data)
        })
    }
  }
}

