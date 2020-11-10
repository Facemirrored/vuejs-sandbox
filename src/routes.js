import Ex6app from "./components/chapters/ex6serverComponents/Ex6app";
import Home from "./components/Home.vue"
import Ex7app from "./components/chapters/ex7userComponentProps/server/Ex7app";
import Ex8app from "./components/chapters/ex8scopes/Ex8app";
import WonderfulQuotesApp
  from "./components/chapters/ex9wonderfulQuotes/WonderfulQuotesApp";
import Ex10FormsApp from "./components/chapters/ex10Forms/Ex10FormsApp";
import Ex11CustomDirectivesApp
  from "./components/chapters/ex11CustomDirectives/Ex11CustomDirectivesApp";
import Ex12FiltersMixinsApp
  from "./components/chapters/ex12FiltersMixins/Ex12FiltersMixinsApp";
import Ex13app from "./components/chapters/ex13Transitions/Ex13app";
import Ex14app from "./components/chapters/ex14vueResource/Ex14app";
import Ex16Vuex from "./components/chapters/ex16Vuex/Ex16Vuex";
import Ex17Axios from "./components/chapters/ex17AxiosAuth/Ex17AxiosAuth";
import Welcome from "./components/chapters/ex17AxiosAuth/welcome/Welcome"
import Signup from "./components/chapters/ex17AxiosAuth/auth/Signup"
import Signin from "./components/chapters/ex17AxiosAuth/auth/Signin"
import Dashboard from "./components/chapters/ex17AxiosAuth/dashboard/Dashboard"

// Lazy Load for more efficiency
const User = resolve => {
  require.ensure(["./components/chapters/ex15RouterStuff/Ex15RoutingUser"],
      () => {
        resolve(
            require("./components/chapters/ex15RouterStuff/Ex15RoutingUser"))
      },
      "user");
};
const UserStart = resolve => {
  require.ensure(["./components/chapters/ex15RouterStuff/UserStart"], () => {
        resolve(require("./components/chapters/ex15RouterStuff/UserStart"))
      },
      "user");
};
const UserDetail = resolve => {
  require.ensure(["./components/chapters/ex15RouterStuff/UserDetail"], () => {
    resolve(require("./components/chapters/ex15RouterStuff/UserDetail"))
  });
};
const UserEdit = resolve => {
  require.ensure(["./components/chapters/ex15RouterStuff/UserEdit"], () => {
    resolve(require("./components/chapters/ex15RouterStuff/UserEdit"))
  });
};

export const routes = [
  {path: "", component: Home, name: "home"},
  {path: "/ex6server_components", component: Ex6app},
  {path: "/ex7user_component_props", component: Ex7app},
  {path: "/ex8scopes", component: Ex8app},
  {path: "/ex9wunderfulQuotes", component: WonderfulQuotesApp},
  {path: "/ex10forms", component: Ex10FormsApp},
  {path: "/ex11custom_directives", component: Ex11CustomDirectivesApp},
  {path: "/ex12filters_mixins", component: Ex12FiltersMixinsApp},
  {path: "/ex13transitions", component: Ex13app},
  {path: "/ex14vue_resource", component: Ex14app},
  {
    path: "/ex15RoutingUser", component: User, children: [
      {path: "", component: UserStart},
      {
        path: ":id", component: UserDetail, beforeEnter: (to, from, next) => {
          console.log(
              "Before Router Guard: " + to + " ; " + from + " ; " + next)
          next();
        }
      },
      {path: ":id/edit", component: UserEdit, name: "userEdit"}
    ]
  },
  {path: "/ex16vuex", component: Ex16Vuex, name: "ex16vuex"},
  {
    path: "/ex17axios", component: Ex17Axios, children: [
      {path: "", name: "welcomePage", component: Welcome},
      {path: '/signup', name: "signupPage", component: Signup},
      {path: '/signin', name: "signinPage", component: Signin},
      {path: '/dashboard', name: "dashboardPage", component: Dashboard}
    ]
  },
  {path: "/redirect-me", redirect: {name: "home"}},
  {path: "*", redirect: {name: "home"}}
];