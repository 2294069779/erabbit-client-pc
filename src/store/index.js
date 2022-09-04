import { createStore } from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

import { createVuexPersistedState } from 'vue-persistedstate'

// vue2.0 创建仓库 new Vuex.Strore({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  modules: {
    category,
    user,
    cart
  },
  plugins: [
    createVuexPersistedState({
      key: 'eribbir-client-pc',
      // storage:window.localStorage,
      whiteList: ['user', 'cart']
      // blackList: [],
    })
  ]
})
