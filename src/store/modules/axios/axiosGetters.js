export const user = state => {
  return state.user;
};

export const isAuthenticated = state => {
  return state.idToken !== null;
};