import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import CaseOpening from "@/views/CaseOpening.vue"
import CaseOpeningDetails from "@/views/CaseOpeningDetails.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/caseOpening",
      name: "caseOpening",
      component: CaseOpening,
    },
    {
      path: "/caseOpening/:casename",
      name: "caseOpeningDetails",
      component: CaseOpeningDetails,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
})

export default router
