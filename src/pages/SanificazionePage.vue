<template>
  <q-page>
    <div class="row full-width">
      <q-parallax src="/images/services/sanificazione2.jpeg">
        <transition type="animation" appear mode="out-in" enter-active-class="animated tada slower">
          <h2 class="text-black text-bold text-italic">Sanificazioni</h2>
        </transition>
      </q-parallax>
    </div>

    <div class="q-pa-md">
      <!-- <q-intersection :key="'first-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <p class="text-h5">
        I nostri servizi di sanificazione sono progettati per creare un ambiente sicuro e igienico. La sanificazione è
        fondamentale per proteggere la salute e il benessere delle persone che frequentano i tuoi spazi.
      </p>
      <!-- </transition>
      </q-intersection>
      <q-intersection :key="'second-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <p class="text-h5">
        I nostri addetti alla sanificazione sono altamente qualificati e seguono protocolli rigorosi per garantire che
        tutte le superfici vengano trattate in modo adeguato. Utilizziamo prodotti e attrezzature all'avanguardia per
        eliminare germi, batteri e virus.
      </p>
      <!-- </transition>
      </q-intersection>
      <q-intersection :key="'third-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <p class="text-h5">
        I servizi di sanificazione includono la pulizia e la disinfezione profonda di tutte le aree, la gestione dei
        rifiuti contaminati, la sanificazione di ambienti critici e molto altro. La tua sicurezza è la nostra
        priorità.
      </p>
      <!-- </transition>
      </q-intersection>-->
      <q-intersection :key="'services-list-header'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated slideInRight slower">
          <h3>I nostri servizi di sanificazione includono:</h3>
        </transition>
      </q-intersection>
      <!--<q-intersection :key="'fourth-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <ul class="text-h5">
        <li>Pulizia e disinfezione profonda di tutte le aree</li>
        <li>Sanificazione di ambienti critici</li>
        <li>Utilizzo di prodotti e attrezzature specializzate</li>
        <li>Gestione sicura dei rifiuti contaminati</li>
        <li>Servizi personalizzati in base alle tue esigenze</li>
      </ul>
      <!-- </transition>
      </q-intersection>
      <q-intersection :key="'fifth-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <p class="text-h5">
        La sanificazione è fondamentale, soprattutto in situazioni di emergenza o quando è necessario garantire la
        massima
        igiene. Il nostro team è impegnato a offrirti un ambiente sicuro e pulito in ogni circostanza.
      </p>
      <!-- </transition>
      </q-intersection>
      <q-intersection :key="'six-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <p class="text-h5">
        Contattaci oggi stesso per scoprire come i nostri servizi di sanificazione possono contribuire a proteggere la
        salute delle persone e a garantire ambienti igienici.
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
        <div class="row justify-center q-mt-xl">
          <q-btn style="width: 80%" color="secondary" label="Richiedi subito un preventivo! Contattaci Ora!"
            icon="phone" href="#/contattaci"/>
        </div>
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
