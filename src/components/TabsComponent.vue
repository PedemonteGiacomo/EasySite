<!-- Modern responsive navigation tabs for desktop -->
<template>
  <div class="itl-nav">
    <q-tabs 
      v-model="tab" 
      dense
      no-caps
      align="left"
      indicator-color="transparent"
      class="text-primary"
    >
      <router-link to="/" class="router-link-clean">
        <q-tab 
          name="Home" 
          label="Home"
          :class="['nav-tab', { 'nav-tab--active': $route.path === '/' }]"
        />
      </router-link>
      
      <q-tab 
        name="About" 
        label="Chi siamo?"
        :class="['nav-tab', { 'nav-tab--active': $route.path.startsWith('/about') }]"
      >
        <q-menu 
          anchor="bottom left" 
          self="top left"
          transition-show="jump-down" 
          transition-hide="jump-up"
          class="itl-dropdown"
        >
          <q-list class="q-py-sm">
            <router-link to="/about#storia" class="router-link-clean">
              <q-item clickable v-close-popup class="dropdown-item">
                <q-item-section>Storia dell'impresa</q-item-section>
              </q-item>
            </router-link>
            <router-link to="/about#missioni" class="router-link-clean">
              <q-item clickable v-close-popup class="dropdown-item">
                <q-item-section>Missioni e Valori</q-item-section>
              </q-item>
            </router-link>
            <router-link to="/about#testimonianze" class="router-link-clean">
              <q-item clickable v-close-popup class="dropdown-item">
                <q-item-section>Testimonianze dei Clienti</q-item-section>
              </q-item>
            </router-link>
          </q-list>
        </q-menu>
      </q-tab>
      
      <q-tab 
        name="Services" 
        label="Servizi"
        :class="['nav-tab', { 'nav-tab--active': $route.path.startsWith('/servizi') }]"
      >
        <q-menu 
          anchor="bottom left" 
          self="top left"
          transition-show="jump-down" 
          transition-hide="jump-up"
          class="itl-dropdown"
        >
          <q-list class="q-py-sm">
            <router-link to="/servizi" class="router-link-clean">
              <q-item clickable v-close-popup class="dropdown-item">
                <q-item-section>Panoramica</q-item-section>
              </q-item>
            </router-link>
            <q-separator class="q-my-xs" />
            <router-link to="/servizi/pulizie-domestiche" class="router-link-clean">
              <q-item clickable v-close-popup class="dropdown-item">
                <q-item-section>Pulizie Appartamenti</q-item-section>
              </q-item>
            </router-link>
            <router-link to="/servizi/pulizie-condomini" class="router-link-clean">
              <q-item clickable v-close-popup class="dropdown-item">
                <q-item-section>Pulizie Condomini</q-item-section>
              </q-item>
            </router-link>
            <router-link to="/servizi/pulizie-uffici" class="router-link-clean">
              <q-item clickable v-close-popup class="dropdown-item">
                <q-item-section>Pulizie Uffici</q-item-section>
              </q-item>
            </router-link>
            <router-link to="/servizi/pulizie-specializzate" class="router-link-clean">
              <q-item clickable v-close-popup class="dropdown-item">
                <q-item-section>Pulizie Specializzate</q-item-section>
              </q-item>
            </router-link>
            <router-link to="/servizi/pulizie-cantiere" class="router-link-clean">
              <q-item clickable v-close-popup class="dropdown-item">
                <q-item-section>Pulizie Cantiere</q-item-section>
              </q-item>
            </router-link>
            <q-separator class="q-my-xs" />
            <router-link to="/servizi/sanificazioni" class="router-link-clean">
              <q-item clickable v-close-popup class="dropdown-item">
                <q-item-section>Trattamenti di Sanificazione</q-item-section>
              </q-item>
            </router-link>
          </q-list>
        </q-menu>
      </q-tab>
      
      <router-link to="/contattaci" class="router-link-clean">
        <q-tab 
          name="Contattaci" 
          label="Contattaci"
          :class="['nav-tab', { 'nav-tab--active': $route.path === '/contattaci' }]"
        />
      </router-link>
    </q-tabs>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TabsComponent",
  setup() {
    return {
      tab: ref("Home"),
    };
  },
};
</script>

<style lang="scss" scoped>
.router-link-clean {
  text-decoration: none;
  color: inherit;
}

.itl-nav {
  .q-tabs__content {
    gap: 8px;
  }
  
  .nav-tab {
    padding: 8px 16px;
    border-radius: 16px;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0;
    text-transform: none;
    transition: all 0.2s ease;
    color: #6B7280;
    
    &:hover {
      background-color: rgba(15, 118, 110, 0.08);
      color: #0F766E;
    }
    
    &--active {
      background-color: rgba(15, 118, 110, 0.1);
      color: #0F766E !important;
      font-weight: 600;
    }
  }
}

.itl-dropdown {
  border-radius: var(--radius-small);
  box-shadow: var(--shadow-hover);
  border: 1px solid var(--border);
  overflow: hidden;
  
  .dropdown-item {
    padding: 8px 16px;
    font-size: 14px;
    color: #374151;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: #F9FAFB;
      color: #0F766E;
    }
  }
}
</style>
