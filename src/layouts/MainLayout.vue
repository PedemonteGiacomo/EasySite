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
              ITL srl Impresa di pulizie Genova
            </div>

            <div v-if="$q.platform.is.mobile" class="q-ml-md">
              ITL Pulizie Genova
            </div>
          </div>

        </q-toolbar-title>
      </q-toolbar>
      <TabsComponent />
      <div class="row justify-center q-pa-md">
        <div class="row" v-for="(contact, index) in contacts" :key="index">
          <q-icon :name="contact.icon" class="q-ml-md" />
          <p class="q-ml-sm">{{ contact.text }}</p>
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
  data() {
    return {
      contacts: [
        { icon: 'location_on', text: 'Via Archimede 58r, Genova' },
        { icon: 'phone', text: '+39 335 126 7227' },
        { icon: 'email', text: 'itl.sas@virgilio.it' },
        { icon: 'email', text: 'fmorasrl96@gmail.com' },
        { icon: 'email', text: 'sas.ilforte@gmail.com' }
      ]
    };
  }
};
</script>
