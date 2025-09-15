import axios from 'axios'

// const api = axios.create({
//   baseURL: 'http://localhost:5001/api',
// })

const api = axios.create({
  baseURL: BASE_URL,
})

export default api
