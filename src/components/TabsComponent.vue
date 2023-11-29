<!-- Simple component to contains the tabs to the menu that is reported both in the <header> and in the <footer> -->

<template>
  <q-tabs v-model="tab">
    <router-link to="/" class="router-link-no-style-title">
      <q-tab name="Home" label="Home" />
    </router-link>
    <q-tab color="primary" name="About" label="Chi siamo?">
      <q-menu transition-show="jump-down" transition-hide="jump-up">
        <q-list style="min-width: 100px">
          <router-link to="/about#storia" class="router-link-no-style">
            <q-item clickable>
              <q-item-section>Storia dell'impresa</q-item-section>
            </q-item>
          </router-link>
          <q-separator />
          <router-link to="/about#missioni" class="router-link-no-style">
            <q-item clickable>
              <q-item-section>Missioni e Valori</q-item-section>
            </q-item>
            <q-separator />
          </router-link>
          <router-link to="/about#testimonianze" class="router-link-no-style">
            <q-item clickable>
              <q-item-section>Testimonianze dei Clienti</q-item-section>
            </q-item>
          </router-link>
        </q-list>
      </q-menu>
    </q-tab>
    <q-tab color="primary" name="Services" label="Servizi">
      <q-menu transition-show="jump-down" transition-hide="jump-up">
        <q-list style="min-width: 100px">
          <router-link to="/servizi/pulizie-domestiche" class="router-link-no-style">
            <q-item clickable>
              <q-item-section>Pulizie Appartamenti</q-item-section>
            </q-item>
          </router-link>
          <router-link to="/servizi/pulizie-condomini" class="router-link-no-style">
            <q-item clickable>
              <q-item-section>Pulizie Condomini</q-item-section>
            </q-item>
          </router-link>
          <router-link to="/servizi/pulizie-uffici" class="router-link-no-style">
            <q-item clickable>
              <q-item-section>Pulizie Uffici</q-item-section>
            </q-item>
          </router-link>
          <router-link to="/servizi/pulizie-specializzate" class="router-link-no-style">
            <q-item clickable>
              <q-item-section>Pulizie Specializzate</q-item-section>
            </q-item>
          </router-link>
          <router-link to="/servizi/pulizie-cantiere" class="router-link-no-style">
            <q-item clickable>
              <q-item-section>Pulizie Cantiere</q-item-section>
            </q-item>
          </router-link>
          <q-separator />
          <router-link to="/servizi/sanificazioni" class="router-link-no-style">
            <q-item clickable>
              <q-item-section>Trattamenti di Sanificazione</q-item-section>
            </q-item>
          </router-link>
        </q-list>
      </q-menu>
    </q-tab>
    <q-tab name="Contattaci" label="Contattaci">
      <q-menu transition-show="rotate" transition-hide="rotate" style="width: fit-content; height: fit-content;">
        <q-list>
          <router-link to="/contattaci" class="router-link-no-style">
            <q-item clickable>
              <q-item-section>Contattaci Subito!</q-item-section>
            </q-item>
          </router-link>
          <q-separator />
          <router-link to="/contattaci" class="router-link-no-style">
            <q-item v-ripple>
              <q-item-section>
                <q-item-label overline>LUCIANO</q-item-label>
                <q-item-label>+39 335 126 7227</q-item-label>
                <q-item-label>itl.sas@virgilio.it</q-item-label>
              </q-item-section>
            </q-item>
          </router-link>
          <q-separator />
          <router-link to="/contattaci" class="router-link-no-style">
            <q-item v-ripple>
              <q-item-section>
                <q-item-label overline>FEDERICO</q-item-label>
                <q-item-label>+39 389 6405346</q-item-label>
                <q-item-label>fmorasrl96@gmail.com</q-item-label>
              </q-item-section>
            </q-item>
          </router-link>
          <q-separator />
          <router-link to="/contattaci" class="router-link-no-style">
            <q-item v-ripple>
              <q-item-section>
                <q-item-label overline>FILIPPO</q-item-label>
                <q-item-label>+39 377 276 6580</q-item-label>
                <q-item-label>sas.ilforte@gmail.com</q-item-label>
              </q-item-section>
            </q-item>
          </router-link>
        </q-list>
      </q-menu>
    </q-tab>
  </q-tabs>
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

<style lang="sass" scoped>
.router-link-no-style
  text-decoration: none
  color: black

.router-link-no-style-title
  text-decoration: none
  color: white
</style>
