import $axios from 'axios'

export const getItems = () => {
  return $axios.get(`http://jsonplaceholder.typicode.com/posts`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' // + access
      }
  }, {})
  .then(res => res.data.data)
  .catch(err => throw err)
}

export const getItem = (id) => {
  return $axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' // + access
      }
  }, {})
  .then(res => res.data.data)
  .catch(err => throw err)
}