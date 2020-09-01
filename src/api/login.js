import http from '@/utils/http'

export async function login(data) {
  const params = data
  const res = http.get('/admin/login', { params })
  return res
}
