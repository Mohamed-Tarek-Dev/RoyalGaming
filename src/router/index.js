import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BuyAccounts from "../views/BuyAccounts.vue";
import HowToSell from "../views/HowToSell.vue";
import HowToBuy from "../views/HowToBuy.vue";
import HelpAndSupport from "../views/HelpAndSupport.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Home - Gamer App" },
  },
  {
    path: "/BuyAccounts",
    name: "BuyAccounts",
    component: BuyAccounts,
  },
  {
    path: "/HowToSell",
    name: "HowToSell",
    component: HowToSell,
  },
  {
    path: "/HowToBuy",
    name: "HowToBuy",
    component: HowToBuy,
  },
  {
    path: "/HelpAndSupport",
    name: "HelpAndSupport",
    component: HelpAndSupport,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
