import { createStore } from 'vuex'
import testingStore from './testingStore'
import testingStoreFiles from './testingStoreFiles'
import testingStoreFilesAxios from './testingStoreFilesAxios'
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
    testingStoreFiles,
    testingStoreFilesAxios
  }
})

// const store = createStore({
// 	modules: {

// 	}
// });