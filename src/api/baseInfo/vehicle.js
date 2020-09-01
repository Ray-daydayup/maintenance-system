import http from '@/utils/http'

const urlPrefix = '/baseinfo/vehicle'

export async function getList(data) {
  const url = urlPrefix + '/list'
  const res = http.post(url, data)
  return res
}
export async function add(data) {
  const url = urlPrefix + '/add'
  const res = http.post(url, data)
  return res
}

export async function del(id) {
  const url = urlPrefix + '/delete'
  const params = { id }
  const res = http.get(url, { params })
  return res
}
export async function update(data) {
  const url = urlPrefix + '/update'
  const res = http.post(url, data)
  return res
}

export default {
  getList,
  add,
  del,
  update
}
