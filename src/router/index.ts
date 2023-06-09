import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import CaseOpening from "@/views/CaseOpening.vue"
import CaseOpeningDetails from "@/views/CaseOpeningDetails.vue"
import StoreView from "@/views/StoreView.vue"
import StoreDetailsView from "@/views/StoreDetailsView.vue"
import PlayView from "@/views/PlayView.vue"
import InventoryView from "@/views/InventoryView.vue"
import LookingView from "@/views/LookingView.vue"
import WatchView from "@/views/WatchView.vue"
import SettingsView from "@/views/SettingsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/store",
      name: "store",
      component: StoreView,
    },
    {
      path: "/store/:caseName",
      name: "storeDetails",
      component: StoreDetailsView,
    },
    {
      path: "/play",
      name: "play",
      component: PlayView,
    },
    {
      path: "/inventory",
      name: "inventory",
      component: InventoryView,
    },
    {
      path: "/looking",
      name: "looking",
      component: LookingView,
    },
    {
      path: "/watch",
      name: "watch",
      component: WatchView,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
    },
    // {
    //   path: "/caseOpening",
    //   name: "caseOpening",
    //   component: CaseOpening,
    // },
    // {
    //   path: "/caseOpening/:casename",
    //   name: "caseOpeningDetails",
    //   component: CaseOpeningDetails,
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
})

export default router
