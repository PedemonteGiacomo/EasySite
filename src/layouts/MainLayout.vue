<template>
  <q-layout view="hhh LpR fFf">
    <!-- Use your custom toolbar component here -->
    <ToolbarComponent />

    <q-page-container>
      <router-view />
      <ContactTollbarComponent />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white" style="position:absolute">
      <q-toolbar class="custom-toolbar text-white">
        <div class="row items-center justify-center q-gutter-md q-mb-sm">
          <q-avatar square size="100px" style="width: 200px;">
            <img src="icons/ITL_Logo.png" />
          </q-avatar>

          <div class="q-gutter-sm">
            <q-toolbar-title v-if="$q.platform.is.desktop" class="text-h4 text-bold">ITL srl Impresa di Pulizie Genova</q-toolbar-title>
            <q-toolbar-title v-if="$q.platform.is.mobile" class="text-bold">ITL - Pulizie Genova</q-toolbar-title>
          </div>
        </div>
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

<style scoped>
.custom-toolbar {
  width: 100%;
  height: fit-content;
  /* Adjust the width as needed */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  /* Add padding to control spacing */
}

/* Additional styles as needed */
</style>
