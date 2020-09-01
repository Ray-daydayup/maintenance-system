import axios from 'axios'
import { getToken } from './token'
import handleResponse from './httpException/index'
import router from '@/router'

const http = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-type': 'application/json'
  }
})

// 请求拦截器
http.interceptors.request.use(
  async (config) => {
    if (config.url === '/admin/login') {
      return config
    }
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    } else {
      router.push({ name: 'Login' })
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    const result = handleResponse(response)
    console.log(result)
    return result
  },
  (error) => {
    console.log(error.response)
    return handleResponse(error.response)
  }
)

export default http
