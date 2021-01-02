import Vue from "vue";
import VueRouter from "vue-router";

const lazyLoading = (view) => {
  return () => import(`@/views/${view}.vue`);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: lazyLoading("home"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
