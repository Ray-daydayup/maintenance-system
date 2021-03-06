import http from '@/utils/http'

const urlPrefix = '/repair/apply'

export async function getList() {
  const url = urlPrefix + '/getList'
  const res = http.get(url)
  return res
}
export async function add(data) {
  const url = urlPrefix + '/add'
  const res = http.post(url, data)
  return res
}
export async function commit(id) {
  const url = urlPrefix + '/apply'
  const res = http.post(url, id)
  return res
}
export async function del(id) {
  const url = urlPrefix + '/delete'
  const res = http.post(url, id)
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
  commit,
  del,
  update
}
