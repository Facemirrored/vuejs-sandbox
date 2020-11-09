// good for overall global states, like header for example
export const updateValue = ({commit}, payload) => {
  commit('updateValue', payload);
};