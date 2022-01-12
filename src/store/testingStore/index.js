import axios from "axios";
const state = {
  productItems: []
}

const mutations = {
  update_product_state(state, payload) {
    state.productItems = payload
  }
}

const actions = {
  getProducts({commit}) {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        console.log('Axios Success ', response)
        commit('update_product_state', response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }
}

const getters = {
  productItems: state => state.productItems,
  productItemById: (state) => (id) => {
    return state.productItems.find(productItem => productItem.id === id)
  }
}

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule;