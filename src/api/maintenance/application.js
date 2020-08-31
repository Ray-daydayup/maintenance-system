import http from '@/utils/http'

const urlPrefix = '/repair/apply'

async function getList() {
  const url = urlPrefix + '/getList'
  const res = http.get(url)
  return res
}

export default {
  getList
}
