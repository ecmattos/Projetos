import axios from 'axios'

export function productsList (context) {
  axios.get('http://localhost:8000/api/products')
    .then((response) => {
      console.log(response.data.data)
      context.commit('SET_PRODUCTS', response.data.data || [])
    })
}

