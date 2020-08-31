import axios from 'axios'
// import tokenUnless from './tokenUnless'
// import { getToken } from './token'
import handleResponse from './httpException/index'

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
    // const flag = tokenUnless.unless(['/user/login']).checkUrl(config.url)
    // if (flag) {
    //   const token = getToken()
    //   if (token) {
    //     config.headers.Authorization = `Bearer ${token}`
    //   }
    // }
    // console.log(config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // if (handleResponse(response)) {
    //   return response.data
    // }
    const result = handleResponse(response)
    console.log(result)
    return result
    // return response
  },
  (error) => {
    return handleResponse(error.response)
    // return error
  }
)

export default http
