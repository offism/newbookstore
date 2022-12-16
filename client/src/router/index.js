import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "./../views/Explore/HomeView";
import LoginView from "./../views/Landing/LoginView";
import RegistrationView from "./../views/Landing/RegistrationView";
import IndexView from "./../views/Landing/IndexView";

import ExploreLayout from "./../layouts/ExploreLayout";
import LandingLayout from "./../layouts/LandingLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingLayout,
    children: [
      {
        path: "",
        name: "Index",
        component: IndexView,
      },
      {
        path: "register",
        name: "registration",
        component: RegistrationView,
      },
      {
        path: "login",
        name: "login",
        component: LoginView,
      },
    ],
  },
  {
    path: "/explore",
    name: "explore",
    component: ExploreLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
