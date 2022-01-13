import axios from "axios";
const state = {
  testingItems: [],
  testingItem: {}
}

const mutations = {
  update_testingItems_state(state, payload) {
    state.testingItems = payload
  },
  update_testingItem_state(state, testingItem) {
    state.testingItem = testingItem
  }
}

const actions = {
  getTestings({commit}) {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        console.log('Axios Success ', response)
        commit('update_testingItems_state', response.data)
      })
      .catch(e => {
        console.log(e)
      })
  },
  getTesting({commit}, id) {
    axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        console.log('Axios Success ', response)
        commit('update_testingItem_state', response.data)
      })
      .catch(e => {
        console.log(e)
      })
  },
}

const getters = {
  testingItems: state => state.testingItems,
  // testingItemById: (state) => (id) => {
  //   return state.testingItems.find(testingItem => testingItem.id === id)
  // }
}

const testingModule = {
  state,
  mutations,
  actions,
  getters
}

export default testingModule;