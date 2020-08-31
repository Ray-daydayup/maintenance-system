import { TOKEN_KEY, USER_KEY } from '@/config.js'

// 获取 token
export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}
// 保存 token
export function setToken(token) {
  return localStorage.setItem(TOKEN_KEY, token)
}
// 移除 token
export function removeToken() {
  localStorage.removeItem(TOKEN_KEY)
}

// 获取 user
export function getUser() {
  return JSON.parse(localStorage.getItem(USER_KEY))
}
// 保存 user
export function setUser(user) {
  return localStorage.setItem(USER_KEY, JSON.stringify(user))
}
// 移除 user
export function removeUser() {
  localStorage.removeItem(USER_KEY)
}
