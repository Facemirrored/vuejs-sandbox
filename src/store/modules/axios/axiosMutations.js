export const authUser = (state, userData) => {
  state.idToken = userData.token;
  state.userId = userData.userId;
};

export const storeUser = (state, user) => {
  console.log("storeUser Mutation", user);
  state.user = user;
};

export const clearAuthData = (state) => {
  state.idToken = null;
  state.userId = null;
  state.user = null;
};