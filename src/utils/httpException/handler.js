// import store from '@/store'

export const handle200 = function(response, formatRes) {
  if (response.code === 200) {
    formatRes.data = response.data
    return
  }
  // if (response.code === 2100) {
  //   store.dispatch('popup/showSnackbar', [response.msg, 'error'])
  // }
  // if (response.code === 2005) {
  //   store.dispatch('popup/showSnackbar', [response.msg, 'error'])
  // }
  formatRes.flag = false
}

// export const handle404 = function(response) {
//   console.log(response.msg)
//   store.dispatch('popup/showSnackbar', ['接口未找到', 'error', 6000])
// }

export const handle500 = function(response) {
  console.log(response)
  // store.dispatch('popup/showSnackbar', ['服务器错误', 'error', 6000])
}

// export const handle401 = async function(response) {
//   console.log(response.msg)
//   store.dispatch('user/showLogin', 'Token认证失败！请重新登录')
// }
