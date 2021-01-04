import Vue from "vue";
import VueRouter from "vue-router";

const lazyLoading = (dir, res) => {
  return () => import(`@/${dir}/${res}.vue`);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: lazyLoading("views", "home"),
    children: [
      {
        path: "/pokemons",
        component: lazyLoading("components", "pokemon-list"),
      },
      {
        path: "/regions",
        component: lazyLoading("components", "region-list"),
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
