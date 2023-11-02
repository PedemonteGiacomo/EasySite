<template>
  <q-page>
    <div class="row full-width">
      <q-parallax src="/images/services/cantiere.jpeg">
        <transition type="animation" appear mode="out-in" enter-active-class="animated tada slower">
          <h2 class="text-black text-bold text-italic">Pulizie Cantiere</h2>
        </transition>
      </q-parallax>
    </div>

    <div class="q-pa-md">
      <!-- <q-intersection :key="'first-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <div class="row">
        <p class="text-h5">
          Le pulizie in cantiere sono un aspetto fondamentale per mantenere un ambiente di lavoro pulito, sicuro ed
          efficiente. La nostra impresa di pulizie offre una gamma completa di servizi di pulizia in cantiere che si
          adattano alle esigenze specifiche dei tuoi progetti.
        </p>
      </div>
      <!-- </transition>
      </q-intersection>
      <q-intersection :key="'second_label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <div class="row">
        <p class="text-h5">
          I nostri servizi di pulizia in cantiere includono la rimozione di detriti, la pulizia delle superfici, la
          gestione
          dei rifiuti e molto altro. Il nostro team esperto è addestrato per affrontare le sfide uniche dei cantieri e
          garantire che lo spazio sia sempre in condizioni ottimali.
        </p>
      </div>
      <!-- </transition>
      </q-intersection>
      <q-intersection :key="'third-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <div class="row">
        <p class="text-h5">
          Sia che tu stia lavorando su un cantiere edile, un progetto di ristrutturazione o qualsiasi altra attività che
          richieda una pulizia professionale, siamo qui per aiutarti. Offriamo soluzioni personalizzate per soddisfare
          le
          tue esigenze e garantire che il tuo cantiere sia sempre al meglio.
        </p>
      </div>
      <!-- </transition>
      </q-intersection> -->
      <q-intersection :key="'services-list-header'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated slideInRight slower">
          <div class="row">
            <h3>I nostri servizi di pulizia in cantiere includono:</h3>
          </div>
        </transition>
      </q-intersection>
      <!-- <q-intersection :key="'services-list'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <ul class="text-h5">
        <li>Pulizia delle superfici e delle attrezzature</li>
        <li>Rimozione di detriti e materiali di scarto</li>
        <li>Pulizia dei pavimenti e delle aree di lavoro</li>
        <li>Gestione dei rifiuti e dello smaltimento</li>
        <li>Pulizia di vetrate e finestre</li>
        <li>Igienizzazione e disinfezione</li>
      </ul>
      <!-- </transition>
      </q-intersection>
      <q-intersection :key="'fourth-label'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
      <div class="row">
        <p class="text-h5">
          Non importa quanto grande o piccolo sia il tuo cantiere, ci occupiamo di ogni dettaglio per garantire che tu
          possa
          concentrarti sul tuo lavoro senza preoccuparti della pulizia. Contattaci oggi stesso per scoprire come
          possiamo
          contribuire al successo dei tuoi progetti con i nostri servizi di pulizia in cantiere professionali.
        </p>
      </div>
      <!-- </transition>
      </q-intersection> -->
    </div>

    <!-- <q-intersection :key="'contattaci'">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
    <div class="row justify-center">
      <h2 class="text-bold text-italic">Contattaci subito!</h2>
    </div>
    <div class="row justify-center" v-scroll-fire="bounceImage">
      <div class="shadow-10">
        <CatchingClientComponent />
      </div>
    </div>
    <!-- </transition>
    </q-intersection> -->

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
  setup() {
    return {
      //loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

      bounceImage(el) {
        // in this example, when the `<div>` comes into view,
        // we bounce it for 2 seconds
        console.log(el)
        el.classList.add('animate-bounce')

        setTimeout(() => {
          // we make sure the node is still in DOM
          // (user hasn't navigated away from the Vue component
          // rendering our `<div>`)
          // so we don't generate an error
          if (document.body.contains(el)) {
            // then remove the helper class to
            // stop bouncing
            el.classList.remove('animate-bounce')
          }
        }, 2000)
      },

      fadeIn(el) {
        el.classList.add('animate-fadeIn');

        setTimeout(() => {
          if (document.body.contains(el)) {
            el.classList.remove('animate-fadeIn');
          }
        }, 2000);
      },

      slideInRight(el) {
        el.classList.add('animate-slideInRight');

        setTimeout(() => {
          if (document.body.contains(el)) {
            el.classList.remove('animate-slideInRight');
          }
        }, 2000);
      }
    }
  },
});
</script>

<!--
  // Google tag (gtag.js)
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-ZE492RNM0C"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-ZE492RNM0C");
  </script>
-->

<style lang="sass" scoped>
.router-link-no-style-title
  text-decoration: none
  color: white
</style>
