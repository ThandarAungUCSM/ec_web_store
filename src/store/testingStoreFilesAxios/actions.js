// import {getItems, getItem} from "src/services/customAxios";

// export const getItemsFun = ({ commit }) => {
//   return new Promise((resolve, reject) => {
//     getItems()
//       .then(res => {
//         commit("SET_ITEMS_AXIOS", res);
//         resolve(res);
//       })
//       .catch(err => {
//         commit("SET_IREMS_AXIOS", []);
//         reject(err);
//       });
//   });
// };

// export const getItemFun = ({ commit }, id) => {
//   return new Promise((resolve, reject) => {
//      getItem(id)
//      .then(response => {
//        commit('SET_ITEM_AXIOS', response.data)
//        resolve(response)
//      })
//      .catch(e => {
//        commit('SET_ITEM_AXIOS', {})
//        reject(`err: ${e}`);
//      })
//   })
// };