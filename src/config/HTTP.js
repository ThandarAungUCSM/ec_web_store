import qs from 'qs';
import axios from 'axios';
var HTTP = function(API_URL,params, requestType){
    return new Promise((resolve,reject)=>{
      if (requestType == 'post') {
          axios.post(API_URL, qs.stringify(params)).then((res) => {
              if (res.data.status == 10001) {
                  console.log('please login')
              } else if (res.data.status == 1) {
                  resolve(res);
              } else {
                  reject(res);
              }
          })
      } else {
          axios({
              method: 'get',
              url: API_URL,
              params: params
          }).then((res) => {
              if (res.data.status == 10001) {
                console.log('please login')
              } else if (res.data.status == 1) {
                  console.log(res.data.data);
                  resolve(res);
              } else {
                  reject(res);
              }
          })
      }
    })
}
export default HTTP; // https://stackoverflow.com/questions/61135769/import-and-module-exports-in-vuex-module-show-uncaught-typeerror-cannot-assign
// https://flaviocopes.com/cannot-assign-readonly-property-export/ // (VueJS is browser code and use ES6 modules)