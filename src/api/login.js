import http from '@/utils/http'

export async function login(data) {
  const res = http.post('/user/login', data)
  return res
}
