<template>
  <q-page>
    <div class="row full-width">
      <q-parallax src="/images/services/uffici.jpeg">
        <transition type="animation" appear mode="out-in" enter-active-class="animated tada slower">
          <h2 class="text-black text-bold text-italic">Pulizie uffici</h2>
        </transition>
      </q-parallax>
    </div>

    <div class="q-pa-md">
      <!-- <q-intersection :key="'first-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            I nostri servizi di pulizia per uffici sono progettati per mantenere il tuo ambiente di lavoro pulito,
            igienico e
            confortevole. Sappiamo quanto sia importante creare una prima impressione positiva e fornire uno spazio di
            lavoro
            ordinato ai tuoi dipendenti e clienti.
          </p>
        <!-- </transition>
      </q-intersection>
      <q-intersection :key="'second-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            I nostri esperti addetti alle pulizie sono altamente qualificati e addestrati per affrontare le sfide uniche
            della
            pulizia degli uffici. Ogni ufficio è diverso e le tue esigenze sono importanti per noi. Personalizziamo i
            nostri
            servizi per soddisfare le tue richieste specifiche.
          </p>
        <!-- </transition>
      </q-intersection>
      <q-intersection :key="'third-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            I nostri servizi di pulizia per uffici includono la pulizia e la disinfezione di superfici, la gestione dei
            rifiuti, la pulizia dei pavimenti, la pulizia delle vetrate e molto altro. Ogni dettaglio è curato per
            garantire
            che il tuo ufficio sia sempre al meglio.
          </p>
        <!-- </transition>
      </q-intersection>-->
      <q-intersection :key="'services-list-header'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated slideInRight slower">
          <h3>I nostri servizi di pulizia per uffici includono:</h3>
        </transition>
      </q-intersection>
      <!-- <q-intersection :key="'fourth-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <ul class="text-h5">
            <li>Pulizia e disinfezione di superfici e oggetti</li>
            <li>Pulizia e lucidatura dei pavimenti</li>
            <li>Pulizia delle aree comuni e delle zone di lavoro</li>
            <li>Gestione dei rifiuti e dello smaltimento</li>
            <li>Pulizia di vetrate e finestre</li>
            <li>Igienizzazione di bagni e cucine</li>
          </ul>
        <!-- </transition>
      </q-intersection>
      <q-intersection :key="'fifth-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            Sappiamo che la pulizia degli uffici deve essere svolta con discrezione e rapidità. Il nostro team si impegna
            a
            garantire che il tuo ufficio sia sempre presentabile e che tu possa concentrarti sul tuo lavoro senza
            preoccuparti
            della pulizia.
          </p>
        <!-- </transition>
      </q-intersection>
      <q-intersection :key="'sixth-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            Contattaci oggi stesso per scoprire come i nostri servizi di pulizia per uffici possono contribuire a creare
            uno
            spazio di lavoro piacevole e professionale.
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
