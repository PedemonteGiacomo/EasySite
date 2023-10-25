<template>
  <q-layout view="hhh LpR fFf">
    <!-- Use your custom toolbar component here -->
    <ToolbarComponent />

    <q-page-container>
      <router-view />
      <ContactTollbarComponent />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white" style="position: relative">
      <q-toolbar>
        <q-toolbar-title>
          <div class="row">
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
            </q-avatar>
            <div v-if="$q.platform.is.desktop" class="q-ml-md">
              ITL srl Impresa di Pulizie Genova
            </div>

            <div v-if="$q.platform.is.mobile" class="q-ml-md">
              ITL Pulizie Genova
            </div>
          </div>

        </q-toolbar-title>
      </q-toolbar>
      <TabsComponent />
      <div class="row justify-center">
        <div class="row q-pa-md">
          <q-icon name="location_on" />
          <p class="q-ml-sm">Via Archimede 58r, Genova</p>

          <q-icon name="phone" class="q-ml-md" />
          <p class="q-ml-sm">+39 335 126 7227</p>

          <q-icon name="email" class="q-ml-md" />
          <p class="q-ml-sm">itl.sas@virgilio.it</p>

          <q-icon name="email" class="q-ml-md" />
          <p class="q-ml-sm">fmorasrl96@gmail.com</p>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import ToolbarComponent from "../components/ToolbarComponent.vue";
import ContactTollbarComponent from "../components/ContactTollbarComponent.vue";
import TabsComponent from "../components/TabsComponent.vue";
import { useQuasar } from 'quasar'

export default {
  components: {
    ToolbarComponent,
    ContactTollbarComponent,
    TabsComponent,
  },
  name: "MainLayout",
  setup() {
    const $q = useQuasar()
    const footerNavLinks = [
      { label: "Home", route: "/" },
      { label: "Servizi", route: "/servizi" },
      { label: "Chi Siamo", route: "/chi-siamo" },
      { label: "Contatti", route: "/contatti" },
    ];

    const navigate = (route) => {
      // Navigate to the specified route
    };

    return {
      footerNavLinks,
      navigate,
    };
  },
};
</script>
