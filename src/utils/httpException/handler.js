import { Message } from 'element-ui'
import router from '@/router'

export const handle200 = function(response, formatRes) {
  if (response.code === 200) {
    formatRes.data = response.data
    return
  }
  formatRes.flag = false
}

export const handle500 = function(response) {
  console.log(response, 'handle 500 error')
  if (response.code >= 2101 && response.code <= 2104) {
    router.push({ name: 'Login' })
  }
  Message({
    showClose: true,
    message: response.msg ? response.msg : '服务器出错',
    type: 'error'
  })
}
