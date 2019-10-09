import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showMenuStatus: false
  },
  getters: {
    showMenuStatus: state => state.showMenuStatus
  },
  mutations: {
    setShowMenuStatus(state, status) {
      state.showMenuStatus = status;
    }
  },
  actions: {
    openMenu({ commit }) {
      commit("setShowMenuStatus", true);
    },
    closeMenu({ commit }) {
      commit("setShowMenuStatus", false);
    }
  }
});
