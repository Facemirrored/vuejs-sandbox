import Vue from "vue";
import Vuex from "vuex"
import counterModul from "./modules/counterModul"
import * as actions from "./actions"
import * as mutations from "./mutations"
import * as getters from "./getters"

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  modules: {
    counterModul: counterModul
  },
  getters,
  mutations,
  actions
});

// Note: Use modules for specific data (for example account user data) and other non module files for seperation of code (getters, mutations, actions)