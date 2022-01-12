import { createStore } from 'vuex'
import testingStore from './testingStore'
export default createStore({
  state: {
    count: 10
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    testingStore
  }
})