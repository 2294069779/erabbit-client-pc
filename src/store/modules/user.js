// 用户模块
export default {
  namespaced: true,
  state () {
    return {
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        tiken: ''
      }
    }
  },
  mutations: {
    setuser (state, playload) {
      state.profile = playload
    }
  }
}
