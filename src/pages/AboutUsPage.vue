<template>
  <q-page padding>

    <div class="row justify-center q-mt-xl shadow-20">
      <q-card dark bordered class="bg-blue-8 my-card">
        <q-card-section>
          <div class="text-h3 text-bold text-italic">Storia dell'impresa</div>
          <div class="text-subtitle2 text-bold text-italic">ITL - Impresa di Pulizie</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <p class="text-h5">
            Da oltre 35 anni, ITL è sinonimo di eccellenza nel settore delle pulizie.
            Fondata con una visione di creare ambienti impeccabili, la nostra impresa
            ha compiuto un percorso straordinario verso l'eccellenza.
          </p>
          <p class="text-h5">
            Sin dai nostri umili inizi, abbiamo perseguito con passione e determinazione
            l'obiettivo di offrire servizi di pulizia di alta qualità, garantendo
            competenza, affidabilità e professionalità in ogni progetto che affrontiamo.
          </p>
          <p class="text-h5">
            Ogni sfida che abbiamo incontrato nel corso degli anni ci ha resi più forti,
            e oggi siamo orgogliosi di essere una delle aziende leader nel settore delle
            pulizie. La nostra storia è una testimonianza del nostro impegno a offrire
            risultati straordinari ai nostri clienti.
          </p>
        </q-card-section>
      </q-card>
    </div>

    <q-card v-if="$q.platform.is.desktop" dark bordered class="q-mt-xl shadow-20 row bg-blue-8">
      <!-- Left Column - Description -->
      <div class="bg-blue-8 my-card-row2 col-6">
        <q-card-section>
          <div class="text-h3 text-bold text-italic">Missioni e Valori</div>
          <div class="text-subtitle2 text-bold text-italic">ITL - Impresa di Pulizie</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <p class="text-h5">
            La nostra missione è semplice ma potente: migliorare la qualità della vita
            delle persone attraverso ambienti puliti, sicuri e salubri. Ogni giorno, ci
            impegniamo a superare le aspettative dei nostri clienti fornendo servizi di pulizia straordinari.
          </p>
          <p class="text-h5">
            I nostri valori fondamentali - competenza, affidabilità e dedizione -
            guidano ogni aspetto del nostro lavoro. Siamo dedicati a mantenere gli
            standard più elevati di professionalità e adattiamo ogni servizio alle
            esigenze uniche dei nostri clienti.
          </p>
        </q-card-section>
      </div>

      <!-- Right Column - AboutUsCarousel -->

      <div class="col-6">
        <q-card-section>
        <AboutUsCarousel class="q-h-full q-w-full" />
        </q-card-section>
      </div>
      <p class="text-h5 q-ml-md">
        Siamo grati per la fiducia che i nostri clienti ci hanno dimostrato in tutti
        questi anni e continueremo a lavorare instancabilmente per onorare quella
        fiducia, offrendo servizi di pulizia eccezionali e costruendo relazioni durature.
      </p>
    </q-card>

    <div v-if="$q.platform.is.mobile" class="row justify-center q-mt-xl shadow-20">
      <q-card dark bordered class="bg-blue-8 my-card">
        <q-card-section>
          <div class="text-h3 text-bold text-italic">Missioni e Valori</div>
          <div class="text-subtitle2 text-bold text-italic">ITL - Impresa di Pulizie</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <p class="text-h5">
            La nostra missione è semplice ma potente: migliorare la qualità della vita
            delle persone attraverso ambienti puliti, sicuri e salubri. Ogni giorno, ci
            impegniamo a superare le aspettative dei nostri clienti fornendo servizi di pulizia straordinari.
          </p>
          <p class="text-h5">
            I nostri valori fondamentali - competenza, affidabilità e dedizione -
            guidano ogni aspetto del nostro lavoro. Siamo dedicati a mantenere gli
            standard più elevati di professionalità e adattiamo ogni servizio alle
            esigenze uniche dei nostri clienti.
          </p>
          <p class="text-h5 q-ml-md">
            Siamo grati per la fiducia che i nostri clienti ci hanno dimostrato in tutti
            questi anni e continueremo a lavorare instancabilmente per onorare quella
            fiducia, offrendo servizi di pulizia eccezionali e costruendo relazioni durature.
          </p>
        </q-card-section>
      </q-card>
    </div>

    <div class="row justify-center q-mt-xl shadow-20">
      <q-card dark bordered class="bg-blue-8 my-card">
        <q-card-section>
          <div class="text-h3 text-bold text-italic">Testimonianze</div>
          <div class="text-subtitle2 text-bold text-italic">ITL - Impresa di Pulizie</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <p class="text-h5">
            Le testimonianze dei nostri clienti sono la migliore conferma del nostro
            impegno a offrire servizi di pulizia straordinari. Ogni giorno ci impegniamo
            a superare le aspettative e a creare ambienti impeccabili per i nostri clienti.
          </p>
          <p class="text-h5">
            La voce dei nostri clienti è la nostra più grande motivazione e ci ispira a
            continuare a crescere e a migliorare. Siamo orgogliosi delle relazioni che
            abbiamo costruito con i nostri clienti nel corso degli anni e non vediamo
            l'ora di continuare a servirli con passione e dedizione.
          </p>
        </q-card-section>
      </q-card>
    </div>

    <div v-if="$q.platform.is.mobile" class="row justify-center q-mt-xl shadow-10">
      <AboutUsCarousel style="width: 100%;"/>
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

    <q-intersection :key="'h2-principles'" v-scroll-fire="bounceImage">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeInLeftBig slower">
        <h2 class="text-body text-center text-italic" data-index="h2-principles">
          Dove trovarci
        </h2>
      </transition>
    </q-intersection>


    <MapComponent address="ITL Srl IMPRESA PULIZIA, Genova Italy"/>
  </q-page>
</template>

<script>
import AboutUsCarousel from 'src/components/AboutUsCarousel.vue';
import { useQuasar } from 'quasar'
import MapComponent from 'src/components/MapComponent.vue';

export default {
  components: {
    AboutUsCarousel,
    MapComponent
  },
  name: 'AboutUsPage',
  setup() {
    const $q = useQuasar()
  },
  mounted() {
    this.setupSmoothScroll();
  },
  methods: {
    setupSmoothScroll() {
      // Add click event listeners to anchor links for smooth scrolling
      const anchorLinks = document.querySelectorAll('.anchor-link');
      anchorLinks.forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          const targetId = event.currentTarget.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const offset = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: offset,
              behavior: 'smooth',
            });
          }
        });
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.router-link-no-style-title
  text-decoration: none
  color: white
.my-card
  width: 100%
.my-card-row2
  width: 50%

</style>
