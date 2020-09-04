export default {
  state: {
    locations: [],
    locationById: [],
    residents: []
  },
  getters: {
    LOCATIONS: (state) => {
      return state.locations
    },
    LOCATION_BY_ID: state => {
      return state.locationById
    },
    RESIDENTS: state => {
      return state.residents
    }
  },
  mutations: {
    SET_LOCATIONS: (state, payload) => {
      state.locations = payload
    },
    SET_LOCATION_BY_ID: (state, payload) => {
      state.locationById = payload
    },
    SET_LOCATION_BY_ID_RESIDENTS: (state, payload) => {
      const result = []
      const urls = payload.residents

      // Преобразуем каждый URL в промис, возвращённый fetch
      const requests = urls.map(url => fetch(url))

      // Promise.all будет ожидать выполнения всех промисов

      Promise.all(requests)
        .then(responses => responses.forEach(
          response => response.json()
            .then(data => {
              result.push(data)
            })
        ))
      state.residents = result
    }
  },
  actions: {
    GET_LOCATIONS: async ({ commit }, payload = 1) => {
      await fetch('https://rickandmortyapi.com/api/location/?page=' + payload)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          commit('SET_LOCATIONS', data)
        })
    },
    GET_LOCATIONS_BY_ID: async ({ commit }, payload) => {
      await fetch('https://rickandmortyapi.com/api/location/' + payload)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          commit('SET_LOCATION_BY_ID', data)
          commit('SET_LOCATION_BY_ID_RESIDENTS', data)
        })
    }
  }
}
