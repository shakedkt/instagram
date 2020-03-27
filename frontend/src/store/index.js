import Vue from 'vue'
import Vuex from 'vuex'
import { postStore } from '../modules/post.store.js'
import  userStore  from '../modules/user.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    postStore,
    userStore
  }
})
