<template>
  <q-page>
    <div class="row full-width">
      <q-parallax src="/images/services/pulizie_specializzate.jpeg">
        <transition type="animation" appear mode="out-in" enter-active-class="animated tada slower">
          <h2 class="text-black text-bold text-italic">Pulizie Specializzate</h2>
        </transition>
      </q-parallax>
    </div>

    <div class="q-pa-md">
      <!-- <q-intersection :key="'first-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            I nostri servizi di pulizie specializzate sono progettati per affrontare sfide uniche e situazioni
            particolari.
            Sappiamo che ci sono momenti in cui è necessario un approccio specifico per ottenere risultati eccezionali.
          </p>
        <!-- </transition>
      </q-intersection>
      <q-intersection :key="'second-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            I nostri esperti addetti alle pulizie specializzate sono altamente qualificati e addestrati per utilizzare
            tecniche e prodotti specifici per affrontare situazioni complesse. Dalle macchie difficili alla rimozione di
            odori
            persistenti, siamo qui per aiutarti.
          </p>
        <!-- </transition>
      </q-intersection>
      <q-intersection :key="'third-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            I servizi di pulizie specializzate includono la rimozione di macchie ostinate, la pulizia di tappeti e
            moquette,
            la pulizia di ambienti contaminati, la rimozione di odori e molto altro. Personalizziamo i nostri servizi in
            base
            alle tue necessità.
          </p>
        <!-- </transition>
      </q-intersection>-->
      <q-intersection :key="'services-list-header'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated slideInRight slower">
          <h3>I nostri servizi di pulizie specializzate includono:</h3>
        </transition>
      </q-intersection>
      <!--<q-intersection :key="'fourth-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <ul class="text-h5">
            <li>Rimozione di macchie difficili</li>
            <li>Pulizia di tappeti e moquette</li>
            <li>Pulizia di ambienti contaminati</li>
            <li>Rimozione di odori persistenti</li>
            <li>Trattamenti specifici per materiali delicati</li>
          </ul>
        <!-- </transition>
      </q-intersection>
      <q-intersection :key="'fifth-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            Sappiamo che ogni situazione richiede un approccio diverso. Il nostro team è impegnato a fornirti soluzioni
            efficaci e professionali per risolvere problemi specifici di pulizia.
          </p>
        <!-- </transition>
      </q-intersection>
      <q-intersection :key="'six-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            Contattaci oggi stesso per scoprire come i nostri servizi di pulizie specializzate possono contribuire a
            ottenere
            risultati eccezionali nei momenti in cui ne hai bisogno.
          </p>
        <!-- </transition>
      </q-intersection> -->
    </div>

    <q-intersection :key="'button-finish'">
      <transition type="animation" mode="out-in" appear enter-active-class="animated tada slower">
        <router-link to="/contattaci" class="router-link-no-style-title">
        <div class="row justify-center q-mt-xl">
          <q-btn
            style="width: 80%"
            color="secondary"
            label="Richiedi subito un preventivo! Contattaci Ora!"
            icon="phone"
          />
        </div>
      </router-link>
      </transition>
    </q-intersection>

    <!-- <q-intersection :key="'contattaci'">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower">
        <div class="row justify-center">
          <h2 class="text-bold text-italic">Contattaci subito!</h2>
        </div>
      </transition>
    </q-intersection>
    <q-intersection :key="'contactForm'">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower">
        <div class="row justify-center">
          <div class="shadow-10">
            <CatchingClientComponent />
          </div>
        </div>
      </transition>
    </q-intersection> -->
    <div class="row justify-center">
      <h2 class="text-bold text-italic">Contattaci subito!</h2>
    </div>
    <div class="row justify-center" v-scroll-fire="bounceImage">
      <div class="shadow-10">
        <CatchingClientComponent />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import CatchingClientComponent from "src/components/CatchingClientComponent.vue";

export default defineComponent({
  components: {
    CatchingClientComponent,
  },
});
</script>

<style lang="sass" scoped>
.router-link-no-style-title
  text-decoration: none
  color: white
</style>
