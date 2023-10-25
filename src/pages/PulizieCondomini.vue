<template>
  <q-page>
    <div class="row full-width">
      <q-parallax src="/images/services/condominio.jpeg">
        <transition type="animation" appear mode="out-in" enter-active-class="animated tada slower">
          <h2 class="text-black text-bold text-italic">Pulizie Condomini</h2>
        </transition>
      </q-parallax>
    </div>

    <div class="q-pa-md">
      <!-- <q-intersection :key="'first-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            I nostri servizi di pulizia per condomini sono pensati per mantenere gli spazi comuni e le aree condivise
            pulite,
            ordinate e accoglienti. Riconosciamo l'importanza di creare un ambiente piacevole e igienico per tutti gli
            abitanti del condominio.
          </p>
        <!-- </transition>
      </q-intersection>
      <q-intersection :key="'second-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            I nostri addetti alle pulizie sono altamente qualificati e pronti ad affrontare le sfide uniche della pulizia
            dei
            condomini. Ogni condominio ha esigenze diverse, e noi personalizziamo i nostri servizi per garantire la
            massima
            soddisfazione dei residenti.
          </p>
        <!-- </transition>
      </q-intersection>
      <q-intersection :key="'third-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            I servizi di pulizia per condomini includono la pulizia e la disinfezione delle aree comuni, la gestione dei
            rifiuti, la pulizia dei corridoi, l'igiene degli ascensori e molto altro. Ogni dettaglio è curato per
            garantire un
            ambiente pulito e piacevole per tutti gli abitanti.
          </p>
        <!-- </transition>
      </q-intersection>-->
      <q-intersection :key="'services-list-header'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated slideInRight slower"> -->
          <h3>I nostri servizi di pulizia per condomini includono:</h3>
        </transition>
      </q-intersection>
      <!--<q-intersection :key="'fourth-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <ul class="text-h5">
            <li>Pulizia e disinfezione delle aree comuni</li>
            <li>Pulizia dei pavimenti e dei corridoi</li>
            <li>Pulizia degli ascensori</li>
            <li>Gestione dei rifiuti e dello smaltimento</li>
            <li>Pulizia delle aree esterne</li>
            <li>Manutenzione e pulizia delle scale</li>
          </ul>
        <!-- </transition>
      </q-intersection>
      <q-intersection :key="'fifth-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            Sappiamo che la pulizia dei condomini richiede attenzione ai dettagli e rispetto per la privacy dei residenti.
            Il
            nostro team si impegna a garantire che le aree comuni siano sempre ben tenute e che gli spazi riflettano la
            cura
            che mettiamo nel nostro lavoro.
          </p>
        <!-- </transition>
      </q-intersection>
      <q-intersection :key="'six-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
          <p class="text-h5">
            Contattaci oggi stesso per scoprire come i nostri servizi di pulizia per condomini possono contribuire a
            creare un
            ambiente condiviso pulito e confortevole per tutti gli abitanti.
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
