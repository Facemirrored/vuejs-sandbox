const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + 'Clicks'
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  increment: context => {
    context.commit('increment', 1);
  },
  decrement: ({commit}, payload) => {
    commit('increment', payload);
  },
  asyncIncrement: ({commit}, payload) => {
    setTimeout(() => {
      commit("increment", payload.val);
    }, payload.duration)
  },
  asyncDecrement: ({commit}) => {
    setTimeout(() => {
      commit("decrement", 1);
    }, 1000)
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}