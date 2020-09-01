import { getToken, setToken, getUser, setUser } from '@/utils/token.js'
import { login } from '@/api/login'

export default {
  namespaced: true,
  state() {
    return {
      token: getToken(),
      userInfo: getUser()
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setToken(token)
    },
    SET_USER(state, info) {
      state.userInfo = info
      setUser(info)
    }
  },
  actions: {
    async login({ commit }, formData) {
      const res = await login(formData)
      if (res.flag) {
        commit('SET_TOKEN', res.data.token)
        commit('SET_USER', res.data)
        return true
      }
      return false
    }
  }
}
