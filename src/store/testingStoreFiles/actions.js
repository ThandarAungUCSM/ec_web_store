import axios from "axios";

export const getTestingsFiles = ({ commit }) => {
   return new Promise((resolve, reject) => {
      axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        commit('SET_ITEMS', response.data)
        resolve(response)
      })
      .catch(e => {
        commit('SET_ITEMS', [])
        reject(`err: ${e}`);
      })
   })
};

export const getTestingFiles = ({ commit }, id) => {
  return new Promise((resolve, reject) => {
     axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
     .then(response => {
       commit('SET_ITEM', response.data)
       resolve(response)
     })
     .catch(e => {
       commit('SET_ITEM', {})
       reject(`err: ${e}`);
     })
  })
};