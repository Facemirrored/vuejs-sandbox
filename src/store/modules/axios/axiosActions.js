import axios from "./../../../axios-auth"
import globalaxios from "axios"

export const signup = ({commit, dispatch}, authData) => {
  axios.post(
      'signupNewUser?key=AIzaSyDYaiprilZ7gBPjM4UDSuK01oUjBe8UcOE',
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
    dispatch('storeUser', authData);
  })
  .catch((error) => console.log("ERROR", error));
};

export const login = ({commit}, authData) => {
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
  })
  .catch((error) => console.log("ERROR", error));
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