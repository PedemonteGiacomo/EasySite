<template>
  <q-page padding>

    <div class="row justify-center q-mt-xl shadow-20" ref="storia" v-scroll-fire="bounceImage">
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

    <q-card v-if="$q.platform.is.desktop" dark bordered class="q-mt-xl shadow-20 row bg-blue-8" ref="missioni"
      v-scroll-fire="bounceImage">
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

    <div v-if="$q.platform.is.mobile" class="row justify-center q-mt-xl shadow-20" ref="missioni_tel"
      v-scroll-fire="bounceImage">
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
          <p class="text-h5">
            Siamo grati per la fiducia che i nostri clienti ci hanno dimostrato in tutti
            questi anni e continueremo a lavorare instancabilmente per onorare quella
            fiducia, offrendo servizi di pulizia eccezionali e costruendo relazioni durature.
          </p>
        </q-card-section>
      </q-card>
    </div>

    <div class="row justify-center q-mt-xl shadow-20" v-scroll-fire="bounceImage">
      <q-card dark bordered class="bg-blue-8 my-card">
        <q-card-section>
          <div class="text-h3 text-bold text-italic" ref="testimonianze">Testimonianze</div>
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
      <AboutUsCarousel style="width: 100%;" />
    </div>

    <GoogleReviews/>

    <div class="row justify-center">
      <q-intersection :key="'h2-principles'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated fadeInLeftBig slower">
          <h2 class="text-body text-center text-italic" data-index="h2-principles">
            Dove trovarci
          </h2>
        </transition>
      </q-intersection>
    </div>

    <MapComponent address="ITL Srl IMPRESA PULIZIA, Genova Italy" />

    <CallToActionButton
      intersectionKey="button-finish"
      buttonLabel="Richiedi subito un preventivo! Contattaci Ora!"
      buttonIcon="phone"
      buttonLink="#/contattaci"
    />

  </q-page>
</template>

<script>
import AboutUsCarousel from 'src/components/AboutUsCarousel.vue';
import MapComponent from 'src/components/MapComponent.vue';
import CallToActionButton from 'src/components/CallToActionButton.vue';
import GoogleReviews from 'src/components/GoogleReviews.vue';

export default {
  components: {
    AboutUsCarousel,
    MapComponent,
    CallToActionButton,
    GoogleReviews
  },
  setup() {
    return {
      bounceImage(el) {
        // in this example, when the `<div>` comes into view,
        // we bounce it for 2 seconds
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
      },

      slideInLeft(el) {
        el.classList.add('animate-slideInLeft');

        setTimeout(() => {
          if (document.body.contains(el)) {
            el.classList.remove('animate-slideInLeft');
          }
        }, 2000);
      },
    }
  }
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

.animate-bounce
  animation: q-bounce 2s infinite

@keyframes q-bounce
  0%, 20%, 50%, 80%, 100%
    transform: translateY(0)
  40%
    transform: translateY(-30px)
  60%
    transform: translateY(-15px)

.animate-fadeIn
  animation: fadeIn 2s

.animate-slideInRight
  animation: slideInRight 2s

.animate-slideInLeft
  animation: slideInLeft 2s

@keyframes fadeIn
  from
    opacity: 0
  to
    opacity: 1

@keyframes slideInRight
  from
    transform: translateX(100%)
    opacity: 0
  to
    transform: t

@keyframes slideInLeft
  from
    transform: translateX(100%)
    opacity: 0
  to
    transform: t
</style>
