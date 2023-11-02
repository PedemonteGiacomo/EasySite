<!-- Toolbar to make sticky the contacts of the owner contacts  -->

<template>
  <div class="q-pa-md">
    <div class="row no-wrap shadow-1">
      <q-page-sticky expand position="top">
        <q-toolbar elevated class="sticky-toolbar">
          <q-toolbar-title> Richiedi un preventivo! </q-toolbar-title>

          <q-btn flat round dense icon="phone">
            <q-menu transition-show="rotate" transition-hide="rotate">
              <q-list style="min-width: 100px">
                <router-link to="/contattaci" class="router-link-no-style">
                  <q-item clickable>
                    <q-item-section>Contattaci Subito!</q-item-section>
                  </q-item>
                </router-link>
                <q-separator />
                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label overline>LUCIANO</q-item-label>
                    <q-item-label>+39 335 126 7227</q-item-label>
                    <q-item-label>itl.sas@virgilio.it</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label overline>FEDERICO</q-item-label>
                    <q-item-label>+39 389 6405346</q-item-label>
                    <q-item-label>fmorasrl96@gmail.com</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item v-ripple>
                  <q-item-section>
                    <q-item-label overline>FILIPPO</q-item-label>
                    <q-item-label>+39 377 276 6580</q-item-label>
                    <q-item-label>sas.ilforte@gmail.com</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </q-page-sticky>
    </div>
  </div>
</template>

<script>
// Your script code...
</script>

<style lang="sass" scoped>
/* Add this to make the toolbar sticky */
.sticky-toolbar
  color: #000
  background: #00d6d6

/* Add this to make the toolbar responsive */
.q-responsive
  width: 100%
  max-width: 600px /* Adjust the maximum width as needed */
  margin: 0 auto

.router-link-no-style
  text-decoration: none
  color: black
</style>
