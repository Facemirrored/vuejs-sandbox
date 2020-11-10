import * as getters from "./axiosGetters"
import * as actions from "./axiosActions"
import * as mutations from "./axiosMutations"

const state = {
  idToken: null,
  userId: null,
  user: null
};

export default {
  state,
  getters,
  actions,
  mutations
}