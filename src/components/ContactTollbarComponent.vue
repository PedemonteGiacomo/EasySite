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
                <router-link to="/contattaci">
                  <q-item clickable>
                    <q-item-section>Contattaci Subito!</q-item-section>
                  </q-item>
                </router-link>
                <q-separator />
                <q-item clickable>
                  <q-item-section>+39 335 126 7227</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>itl.sas@virgilio.it</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>fmorasrl96@gmail.com</q-item-section>
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
</style>
