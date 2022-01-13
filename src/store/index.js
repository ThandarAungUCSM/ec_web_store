import { createStore } from 'vuex'
import testingStore from './testingStore'
import testingStoreFiles from './testingStoreFiles'
export default createStore({
  state: {
    count: 10
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    testingStore,
    testingStoreFiles
  }
})

// const store = createStore({
// 	modules: {

// 	}
// });