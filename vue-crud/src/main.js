import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import VueRouter from "vue-router";
import Confirm from "./pages/admin/Confirm.vue";
import Products from "./pages/admin/Products.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    authenticated: false,
  },
  mutations: {
    setAuthentication(state, status) {
      state.authenticated = status;
    },
  },
});
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: {
        name: "main",
      },
    },
    {
      path: "/admin/confirm",
      name: "confirm",
      component: Confirm,
    },
    {
      path: "/admin/products",
      name: "products",
      component: Products,
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated == false) {
          next(false);
        } else {
          next();
        }
      },
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router: router,
  store: store,
}).$mount("#app");
