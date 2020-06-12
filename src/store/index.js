import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasLogin: false,
    userInfo: {},
    registerInfo:{},
    TeamMembers: {},//团队成员
  },
  mutations: {
    setuserInfo(state, val) {
      state.userInfo = val;
    },
    sethasLogin(state, val) {
      state.hasLogin = val;
    },
    register(state,provider){
      state.registerInfo=provider;
    },
  },
  actions: {
    handleuserInfo(context, val) {
      context.commit('setuserInfo', val);
    },
    handlehasLogin(context, val) {
      context.commit('sethasLogin', val);
    }
  },
  modules: {
  }
})
