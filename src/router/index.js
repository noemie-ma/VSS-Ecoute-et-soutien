import { createRouter, createWebHistory } from "vue-router";
import AccueilPage from "@/components/AccueilPage.vue";
import ContactPage from "@/components/ContactPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import HeaderPage from "@/components/HeaderPage.vue";

const routes = [
  {
    path: "/AccueilPage",
    name: "AccueilPage",
    component: AccueilPage,
  },
  {
    path: "/ContactPage",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/FooterPage",
    name: "FooterPage",
    component: FooterPage,
  },
  {
    path: "/HeaderPage",
    name: "HeaderPage",
    component: HeaderPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
