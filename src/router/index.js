import Vue from "vue";
import VueRouter from "vue-router";

const lazyLoading = (dir, res) => {
  return () => import(`@/${dir}/${res}.vue`);
};

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: lazyLoading("views", "home"),
    children: [
      {
        name: "list",
        path: "/pokemons",
        component: lazyLoading("components", "pokemon-list"),
      },
      {
        name: "details",
        path: "pokemon/:name",
        component: lazyLoading("components", "pokemon-details"),
      },
      {
        name: "regions",
        path: "/regions",
        component: lazyLoading("components", "region-list"),
      },
      {
        name: "details",
        path: "region/:name",
        component: lazyLoading("components", "region-details"),
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
