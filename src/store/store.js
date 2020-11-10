import Vue from "vue";
import Vuex from "vuex"
import counterModule from "./modules/counterModul"
import axiosModule from "./modules/axios/axiosModul"
import * as actions from "./actions"
import * as mutations from "./mutations"
import * as getters from "./getters"

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  modules: {
    counterModule: counterModule,
    axiosModule: axiosModule
  },
  getters,
  mutations,
  actions
});

// Note: Use modules for specific data (for example account user data) and other non module files for seperation of code (getters, mutations, actions)