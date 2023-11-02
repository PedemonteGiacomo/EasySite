<template>
  <q-page>
    <div class="row full-width">
      <q-parallax src="/images/services/condominio.jpeg">
        <transition type="animation" appear mode="out-in" enter-active-class="animated tada slower">
          <h2 class="text-black text-bold text-italic">Pulizie Appartamenti</h2>
        </transition>
      </q-parallax>
    </div>

    <div class="q-pa-md">
      <!-- <q-intersection :key="'first-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <p class="text-h5">
        I nostri servizi di pulizia per appartamenti sono progettati per mantenere il tuo spazio vitale pulito,
        confortevole e accogliente. Riconosciamo quanto sia importante avere un ambiente pulito e ordinato in cui
        vivere e
        rilassarsi.
      </p>
      <!-- </transition>
      </q-intersection>
      <q-intersection :key="'second-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <p class="text-h5">
        I nostri addetti alle pulizie sono altamente qualificati e attenti ai dettagli. Ogni appartamento ha le sue
        esigenze, e noi personalizziamo i nostri servizi per garantire che ogni angolo sia trattato con cura.
      </p>
      <!-- </transition>
      </q-intersection>
      <q-intersection :key="'third-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <p class="text-h5">
        I servizi di pulizia per appartamenti includono la pulizia e la disinfezione di tutte le stanze, la gestione
        dei
        rifiuti, la pulizia dei pavimenti, la pulizia delle superfici e molto altro. Curiamo ogni dettaglio per
        offrirti
        uno spazio pulito e piacevole.
      </p>
      <!-- </transition>
      </q-intersection>-->
      <q-intersection :key="'services-list-header'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated slideInRight slower">
          <h3>I nostri servizi di pulizia per appartamenti includono:</h3>
        </transition>
      </q-intersection>
      <!--<q-intersection :key="'fourth-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <ul class="text-h5">
        <li>Pulizia e disinfezione di tutte le stanze</li>
        <li>Pulizia e lucidatura dei pavimenti</li>
        <li>Pulizia delle superfici e degli oggetti</li>
        <li>Gestione dei rifiuti e dello smaltimento</li>
        <li>Pulizia delle finestre e dei vetri</li>
        <li>Igienizzazione di bagni e cucine</li>
      </ul>
      <!-- </transition>
      </q-intersection>
      <q-intersection :key="'fifth-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <p class="text-h5">
        Sappiamo che il tuo appartamento è il tuo rifugio, e ci impegniamo a fornirti un ambiente pulito e ordinato in
        cui
        ti senti a tuo agio. Il nostro team si prende cura dei dettagli in modo che tu possa goderti la tua casa senza
        preoccupazioni.
      </p>
      <!-- </transition>
      </q-intersection>
      <q-intersection :key="'six-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <p class="text-h5">
        Contattaci oggi stesso per scoprire come i nostri servizi di pulizia per appartamenti possono contribuire a
        mantenere il tuo spazio vitale in ottime condizioni.
      </p>
      <!-- </transition>
      </q-intersection> -->
    </div>

    <div class="row justify-center">
      <h2 class="text-bold text-italic">Contattaci subito!</h2>
    </div>
    <div class="row justify-center" v-scroll-fire="bounceImage">
      <div class="shadow-10">
        <CatchingClientComponent />
      </div>
    </div>

    <q-intersection :key="'button-finish'">
      <transition type="animation" mode="out-in" appear enter-active-class="animated tada slower">
        <router-link to="/contattaci" class="router-link-no-style-title">
          <div class="row justify-center q-mt-xl">
            <q-btn style="width: 80%" color="secondary" label="Richiedi subito un preventivo! Contattaci Ora!"
              icon="phone" />
          </div>
        </router-link>
      </transition>
    </q-intersection>
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
