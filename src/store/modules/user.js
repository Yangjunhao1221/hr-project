import { getToken, setToken, removeToken } from '@/utils/auth'
import { loginAPI } from '@/api/user'
const state = {
  token: getToken()//从本地存储初始化token
}
const mutations = {
  setToken(state, token) {
    state.token = token,//将vuex中的token更新
      setToken(token)//将本地缓存的token也进行更新，保持与vuex中同步
  },
  removeToken(state) {
    state.token = null,//vuex数据置空
      removeToken()//将本地缓存的token也进行置空
  }
}
const actions = {
  async login(context, data) {
    const result = await loginAPI(data)//发起异步请求登录，
    if (result.data.success) {//登陆成功
      context.commit('setToken', result.data.data)//更新token,并数据持久化
    }

  }
}
export default {
  namespaced: true,//namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
  state,
  mutations,
  actions
}
