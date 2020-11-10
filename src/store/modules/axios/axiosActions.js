import axios from "./../../../axios-auth"
import globalaxios from "axios"

export const setLogoutTimer = ({dispatch}, expirationTime) => {
  setTimeout(() => {
    console.log("Logout Timer finished");
    dispatch('logout');
  }, expirationTime * 1000);
};

export const signup = ({commit, dispatch}, authData) => {
  axios.post(
      '/signupNewUser?key=AIzaSyDYaiprilZ7gBPjM4UDSuK01oUjBe8UcOE',
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }
  ).then((response) => {
    console.log("Success signup call", response);
    commit('authUser', {
      token: response.data.idToken,
      userId: response.data.localId
    });
    const now = new Date();
    const expirationDate = new Date(
        now.getTime() + response.data.expiresIn * 1000);
    localStorage.setItem('token', response.data.idToken);
    localStorage.setItem('expiresIn', expirationDate);
    localStorage.setItem('userId', response.data.userId);
    dispatch('storeUser', authData);
    dispatch('setLogoutTimer', response.data.expiresIn);
  })
  .catch((error) => console.log("ERROR", error));
};

export const login = ({commit, dispatch}, authData) => {
  axios.post(
      '/verifyPassword?key=AIzaSyDYaiprilZ7gBPjM4UDSuK01oUjBe8UcOE',
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }
  ).then((response) => {
    console.log("Success signin call", response);
    commit('authUser', {
      token: response.data.idToken,
      userId: response.data.localId
    });
    const now = new Date();
    const expirationDate = new Date(
        now.getTime() + response.data.expiresIn * 1000);
    localStorage.setItem('token', response.data.idToken);
    localStorage.setItem('expiresIn', expirationDate);
    localStorage.setItem('userId', response.data.userId)
    dispatch('setLogoutTimer', response.data.expiresIn)
  }).catch((error) => console.log("ERROR", error));
};

export const tryAutoLogin = ({commit}) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }

  const expirationDate = localStorage.getItem('expiresIn')
  if (new Date() >= expirationDate) {
    return;
  }

  commit('authUser', {
    token: token,
    userId: localStorage.getItem('userId')
  })
};

export const storeUser = ({state}, userData) => {
  if (!state.idToken) {
    return;
  }

  globalaxios.post("/user.json" + "?auth=" + state.idToken, userData)
  .then(res => {
    console.log("storeUser Action", res);
  })
  .catch(error => console.log("storeUser Error", error))
};

export const fetchUser = ({commit, state}) => {
  if (!state.idToken) {
    console.log("no idToken for fetchUser");
    return;
  }

  globalaxios.get("/ex17Users.json" + "?auth=" + state.idToken)
  .then((response) => {
    const data = response.data;
    console.log("fetchUser /ex17users.json", data);
    const users = [];
    for (let key in data) {
      const user = data[key];
      user.id = key;
      users.push(user);
    }
    console.log("commit('storeUser')", users[0]);
    commit('storeUser', users[0]);
  })
  .catch(error => {
    console.log(error)
  })
};

export const logout = ({commit}) => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiresIn');
  localStorage.removeItem('userId');
  commit('clearAuthData');
};