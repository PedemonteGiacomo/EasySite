const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      //{ path: "services", component: () => import("pages/ServicesPage.vue") }, // Add this route
    ],
  },
  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/AboutUsPage.vue") },
      //{ path: "services", component: () => import("pages/ServicesPage.vue") }, // Add this route
    ],
  },
  {
    path: "/servizi",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ServicesOverviewPage.vue") },
      {
        path: "pulizie-cantiere",
        component: () => import("pages/PulizieCantiere.vue"),
      },
      {
        path: "pulizie-uffici",
        component: () => import("pages/PulizieCommerciali.vue"),
      },
      {
        path: "pulizie-domestiche",
        component: () => import("pages/PulizieDomestiche.vue"),
      },
      {
        path: "pulizie-condomini",
        component: () => import("pages/PulizieCondomini.vue"),
      },
      {
        path: "pulizie-specializzate",
        component: () => import("pages/PulizieSpecializzate.vue"),
      },
      {
        path: "sanificazioni",
        component: () => import("pages/SanificazionePage.vue"),
      },
    ],
  },
  {
    path: "/contattaci",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/ContactUsPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
