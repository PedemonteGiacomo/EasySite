<template>
  <q-header elevated>
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
   <!-- Conclude the header with TABS -->
    <TabsComponent/>
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
