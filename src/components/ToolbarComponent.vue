<template>
  <q-header elevated class="bg-white text-dark border-b">
    <div class="container">
      <q-toolbar class="q-py-sm">
        <!-- Logo and title -->
        <router-link to="/" class="router-link-no-style">
          <div class="row items-center no-wrap logo-container">
            <q-avatar square size="70px" class="q-mr-md" style="width: 120px;">
              <img src="icons/ITL_Logo.png" />
            </q-avatar>
            <div>
              <div class="text-h6 text-weight-bold text-primary">Impresa di Pulizie Genova</div>
            </div>
          </div>
        </router-link>

        <q-space />

        <!-- Desktop navigation -->
        <div class="gt-sm">
          <TabsComponent />
        </div>

        <!-- Mobile menu button -->
        <q-btn 
          flat 
          dense 
          round 
          icon="menu" 
          class="lt-md text-primary"
          @click="mobileMenu = true"
        />
      </q-toolbar>
    </div>

    <!-- Mobile drawer -->
    <q-drawer
      v-model="mobileMenu"
      side="right"
      overlay
      behavior="mobile"
      class="bg-white mobile-drawer"
      :width="Math.min(320, $q.screen.width - 40)"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-lg">
          <!-- Header -->
          <div class="row items-center q-mb-lg">
            <q-avatar square size="50px" class="q-mr-sm" style="width: 70px;">
              <img src="icons/ITL_Logo.png" />
            </q-avatar>
            <div>
              <div class="text-h6 text-weight-bold text-primary">Impresa di Pulizie Genova</div>
              <div class="text-caption text-grey-7">Menu</div>
            </div>
            <q-space />
            <q-btn flat dense round icon="close" @click="mobileMenu = false" />
          </div>

          <!-- Navigation links -->
          <q-list>
            <q-item 
              clickable 
              v-ripple 
              @click="navigateAndClose('/')"
              :active="$route.path === '/'"
              active-class="text-primary bg-primary-1"
            >
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section>Home</q-item-section>
            </q-item>

            <q-expansion-item
              expand-separator
              icon="info"
              label="Chi siamo?"
              class="text-dark"
            >
              <q-item 
                clickable 
                v-ripple 
                @click="navigateAndClose('/about#storia')"
                :inset-level="0.2"
              >
                <q-item-section>Storia dell'impresa</q-item-section>
              </q-item>
              <q-item 
                clickable 
                v-ripple 
                @click="navigateAndClose('/about#missioni')"
                :inset-level="0.2"
              >
                <q-item-section>Missioni e Valori</q-item-section>
              </q-item>
              <q-item 
                clickable 
                v-ripple 
                @click="navigateAndClose('/about#testimonianze')"
                :inset-level="0.2"
              >
                <q-item-section>Testimonianze dei Clienti</q-item-section>
              </q-item>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="cleaning_services"
              label="Servizi"
              class="text-dark"
            >
              <q-item 
                clickable 
                v-ripple 
                @click="navigateAndClose('/servizi')"
                :inset-level="0.2"
              >
                <q-item-section>Panoramica</q-item-section>
              </q-item>
              <q-separator />
              <q-item 
                clickable 
                v-ripple 
                @click="navigateAndClose('/servizi/pulizie-domestiche')"
                :inset-level="0.2"
              >
                <q-item-section>Pulizie Appartamenti</q-item-section>
              </q-item>
              <q-item 
                clickable 
                v-ripple 
                @click="navigateAndClose('/servizi/pulizie-condomini')"
                :inset-level="0.2"
              >
                <q-item-section>Pulizie Condomini</q-item-section>
              </q-item>
              <q-item 
                clickable 
                v-ripple 
                @click="navigateAndClose('/servizi/pulizie-uffici')"
                :inset-level="0.2"
              >
                <q-item-section>Pulizie Uffici</q-item-section>
              </q-item>
              <q-item 
                clickable 
                v-ripple 
                @click="navigateAndClose('/servizi/pulizie-specializzate')"
                :inset-level="0.2"
              >
                <q-item-section>Pulizie Specializzate</q-item-section>
              </q-item>
              <q-item 
                clickable 
                v-ripple 
                @click="navigateAndClose('/servizi/pulizie-cantiere')"
                :inset-level="0.2"
              >
                <q-item-section>Pulizie Cantiere</q-item-section>
              </q-item>
              <q-separator />
              <q-item 
                clickable 
                v-ripple 
                @click="navigateAndClose('/servizi/sanificazioni')"
                :inset-level="0.2"
              >
                <q-item-section>Trattamenti di Sanificazione</q-item-section>
              </q-item>
            </q-expansion-item>

            <q-item 
              clickable 
              v-ripple 
              @click="navigateAndClose('/contattaci')"
              :active="$route.path === '/contattaci'"
              active-class="text-primary bg-primary-1"
            >
              <q-item-section avatar>
                <q-icon name="phone" />
              </q-item-section>
              <q-item-section>Contattaci</q-item-section>
            </q-item>
          </q-list>

          <!-- Contact info in drawer -->
          <q-separator class="q-my-md" />
          <div class="text-caption text-grey-6 q-mb-sm">Contatti Diretti</div>
          <div class="text-body2 q-mb-xs"><strong>Tel:</strong> +39 335 126 7227</div>
          <div class="text-body2 q-mb-xs contact-email"><strong>Email:</strong> itl.sas@virgilio.it</div>
        </div>
      </q-scroll-area>
    </q-drawer>
  </q-header>
</template>

<script>
import { defineComponent, ref } from "vue";
import TabsComponent from "./TabsComponent.vue";
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    TabsComponent,
  },
  name: "ToolbarComponent",
  setup() {
    const mobileMenu = ref(false);
    const router = useRouter();

    const navigateAndClose = (path) => {
      mobileMenu.value = false;
      router.push(path);
    };

    return {
      mobileMenu,
      navigateAndClose,
    };
  }
});
</script>

<style scoped>
.border-b {
  border-bottom: 1px solid #E5E7EB;
}

/* Prevent overflow in mobile drawer */
.contact-email {
  word-break: break-word;
  overflow-wrap: break-word;
}

/* Ensure proper text wrapping in mobile menu */
.q-drawer .q-item__section {
  min-width: 0;
  overflow: hidden;
}

.q-drawer .q-item__label {
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Responsive mobile drawer */
.mobile-drawer {
  max-width: calc(100vw - 40px);
}

/* Logo hover effect */
.logo-container {
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.02);
    opacity: 0.9;
  }
  
  &:active {
    transform: scale(0.98);
  }
}

/* Remove underline from router links */
.router-link-no-style {
  text-decoration: none;
  color: inherit;
}
</style>
