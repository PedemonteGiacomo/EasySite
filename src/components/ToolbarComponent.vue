<!-- Toolbar above the Tabs in the header -->

<template>
  <q-header elevated>
    <!--
      <div class="row no-wrap shadow-1">
    -->
    <q-toolbar class="custom-toolbar text-white q-my-sm">
      <q-avatar class="shadow-2">
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
      </q-avatar>

      <q-toolbar-title v-if="$q.platform.is.desktop">ITL srl Impresa di pulizie Genova</q-toolbar-title>

      <q-toolbar-title v-if="$q.platform.is.mobile">ITL - Pulizie Genova</q-toolbar-title>

      <q-btn class="shadow-2" flat round dense icon="favorite" />
    </q-toolbar>
    <TabsComponent />

    <!--
      </div>
    -->
  </q-header>
</template>

<script>
import { defineComponent } from "vue";
import TabsComponent from "./TabsComponent.vue";
import { useQuasar } from 'quasar'

export default defineComponent({
  components: {
    TabsComponent,
  },
  name: "MainLayout",
  setup() {
    const $q = useQuasar()
  }
});
</script>

<style scoped>
.custom-toolbar {
  width: 100%;
  /* Adjust the width as needed */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  /* Add padding to control spacing */
}

/* Additional styles as needed */
</style>
