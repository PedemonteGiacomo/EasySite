<template>
  <q-page>
    <!-- TITLE DESCRIPTION AND CAROUSEL-->
    <transition-group type="animation" appear mode="out-in" enter-active-class="animated slideInRight slower">
      <br />
      <h2 key="title" class="q-mb-md text-h2 text-center text-italic text-weight-bold">
        ITL - Impresa di Pulizie Genova
      </h2>

      <div class="description-container q-mb-sm">
        <h6 key="description" class="text-body text-center text-italic" style="width: 100%">
          Una realtà fondata sulla soddisfazione del cliente, caratterizzata
          dalla velocità e dall'accuratezza nell'effettuare pulizie complete per
          varie tipologie di immobili. Dalle abitazioni condominiali agli
          uffici, dai magazzini ai garage, ci occupiamo anche delle pulizie
          post-cantiere e di interventi di pulizia approfondita.
        </h6>
      </div>

      <GalleryCarousel key="carousel" />
    </transition-group>
    <!-- <q-intersection :key="'fourth-label'">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
    <div class="description-container q-mt-xl">
      <p class="text-h5 text-center">
        Eccellenza in ogni dettaglio: il nostro servizio di pulizia offre
        risultati impeccabili che superano le tue aspettative. <br />Ogni spazio
        trasformato in uno scenario di pulizia e freschezza, grazie alla nostra
        attenzione ai dettagli e all'uso di prodotti di alta qualità.
      </p>
    </div>
    <!-- </transition>
    </q-intersection> -->
    <!-- QUALITY SECTION -->
    <q-intersection :key="'h6-description'" v-scroll-fire="bounceImage">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeInLeftBig slower">
        <h2 class="text-body text-center text-italic" data-index="h6-description">
          Qualità al primo posto: ecco come lavoriamo!
        </h2>
      </transition>
    </q-intersection>
    <!-- <q-intersection :key="'fourth-label'">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
    <div class="description-container q-mt-xl">
      <p class="text-h5 text-center">
        La nostra dedizione alla qualità è tangibile attraverso i risultati
        concreti del nostro impegno! Qui di seguito, potrai ammirare una
        selezione di foto che testimoniano il trasformarsi degli spazi grazie
        all'intervento professionale dell'impresa di pulizie ITL. Dai uffici
        agli appartamenti, fino ai cantieri a Genova, la differenza è evidente.
        <br />
      </p>
    </div>
    <!-- </transition>
    </q-intersection> -->
    <div class="q-pa-md">
      <div class="row items-start justify-center">
        <!-- <q-intersection v-for="index in 3" :key="index">
          <transition-group
            type="animation"
            mode="out-in"
            appear
            enter-active-class="animated pulse slower"
          >-->
        <q-card class="my-card shadow-2 q-ml-md q-mr-md q-mb-md">
          <div class="row items-center">
            <div class="col">
              <h6 class="text-caption text-center text-italic text-weight-bold">
                Prima
              </h6>
              <q-img class="col" style="height: 223px" src="images/before-after/before-1.jpg" />
            </div>

            <q-separator vertical />

            <div class="col">
              <h6 class="text-caption text-center text-italic text-weight-bold">
                Dopo
              </h6>
              <q-img class="col" style="height: 223px" src="images/before-after/after-1.jpg" />
            </div>
          </div>
        </q-card>

        <q-card class="my-card shadow-2 q-ml-md q-mr-md q-mb-md">
          <div class="row items-center">
            <div class="col">
              <h6 class="text-caption text-center text-italic text-weight-bold">
                Prima
              </h6>
              <q-img class="col" style="height: 223px" src="images/before-after/before-2.jpg" />
            </div>

            <q-separator vertical />

            <div class="col">
              <h6 class="text-caption text-center text-italic text-weight-bold">
                Dopo
              </h6>
              <q-img class="col" style="height: 223px" src="images/before-after/after-2.jpg" />
            </div>
          </div>
        </q-card>

        <q-card class="my-card shadow-2 q-ml-md q-mr-md q-mb-md">
          <div class="row items-center">
            <div class="col">
              <h6 class="text-caption text-center text-italic text-weight-bold">
                Prima
              </h6>
              <q-img class="col" style="height: 223px" src="images/before-after/real-1.jpg" />
            </div>

            <q-separator vertical />

            <div class="col">
              <h6 class="text-caption text-center text-italic text-weight-bold">
                Dopo
              </h6>
              <q-img class="col" style="height: 223px" src="images/before-after/after-real-1.jpg" />
            </div>
          </div>
        </q-card>
        <!-- </transition-group>
        </q-intersection>
      -->
      </div>
    </div>
    <!-- <q-intersection :key="'fourth-label'">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
    <div class="description-container q-mt-xl">
      <p class="text-h5 text-center">
        La nostra squadra di professionisti esperti è dedicata a rendere il tuo
        ambiente brillante e incontaminato, garantendo standard di pulizia
        elevati. Affidati a un team di esperti, appassionati della propria arte, che cura
        ogni angolo con cura e precisione. La nostra filosofia abbraccia la sostenibilità: utilizziamo prodotti
        ecologici e pratiche a basso impatto per preservare l'ambiente e il
        futuro delle generazioni.<br />
      </p>
    </div>
    <!-- </transition>
    </q-intersection> -->

    <!-- IMAGE WITH DESCRIPTION-->
    <q-intersection :key="'h2-description'" v-scroll-fire="bounceImage">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeInLeftBig slower">
        <h2 class="text-body text-center text-italic" data-index="h2-description">
          Pulizie di qualità dal 1984
        </h2>
      </transition>
    </q-intersection>
    <!-- <q-intersection :key="'fourth-label'"  v-scroll-fire="bounceImage">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
    <div class="description-container q-mt-xl">
      <p class="text-h5 text-center">
        Un passo verso un futuro più verde: i nostri servizi di pulizia non solo
        valorizzano i tuoi spazi, ma contribuiscono anche a un ambiente più
        sano.
        La tua soddisfazione è il nostro traguardo: lavoriamo incessantemente
        per offrire un'esperienza cliente indimenticabile, basata su servizi
        personalizzati e risultati straordinari.<br>
        Oltre a uno spazio impeccabile, ti garantiamo un viaggio cliente senza
        intoppi, in cui le tue esigenze sono al centro di tutto ciò che
        facciamo.
      </p>
    </div>
    <!-- </transition>
    </q-intersection> -->
    <!-- <q-intersection>
      <transition v-if="animate" type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
    <div :key="'qualità-content'" class="q-pa-md row justify-center">
      <q-img src="images/office/material.jpg" spinner-color="white" style="height: 500px; width: 80%"
        img-class="my-custom-image" class="rounded-borders justify-center">
        <div class="absolute-right" style="width: 200px">
          <p class="text-subtitle1 text-center">
            <br />
            Pulizie di Qualità: <br />Il Tuo Ambiente <br />
            Brillante e Impeccabile
          </p>
          <p class="text-subtitle2 text-center">
            Presso ITL - Impresa di Pulizie, ci dedichiamo a fornire servizi di
            pulizia di qualità eccezionale che superano le aspettative dei
            nostri clienti. <br /><br />Sappiamo quanto sia importante per te
            mantenere un ambiente pulito, sano e invitante, sia a casa che in
            ufficio.
          </p>
        </div>
      </q-img>
    </div>
    <!-- </transition>
    </q-intersection> -->

    <!-- PRINCIPLES -->
    <q-intersection :key="'h2-principles'" v-scroll-fire="bounceImage">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeInLeftBig slower">
        <h2 class="text-body text-center text-italic" data-index="h2-principles">
          I nostri principi
        </h2>
      </transition>
    </q-intersection>
    <!-- <q-intersection :key="'fourth-label'">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
    <div class="description-container q-mt-xl">
      <p class="text-h5 text-center">
        Abbiamo abbracciato l'innovazione: le nostre metodologie avanzate, unite
        alla passione per il servizio, ci permettono di raggiungere livelli di
        pulizia ineguagliabili. <br />
        Il nostro approccio moderno e le tecnologie all'avanguardia ci
        consentono di offrire una pulizia efficace e un ambiente che trasmette
        vitalità
      </p>
    </div>
    <!-- </transition>
    </q-intersection> -->

    <!--<q-intersection>-->
    <div class="q-pa-md row justify-center">
      <!-- <transition type="animation" mode="" appear enter-active-class="animated bounceInLeft slower">-->
      <q-card class="q-mr-xl q-ml-xl q-mb-md shadow-10" style="width: 310px" :key="'cura-ambiente'"
        v-scroll-fire="bounceImage">
        <q-card-section class="q-pt-lg q-pb-xl text-center">
          <q-avatar size="225px" color="teal" text-color="white" class="shadow-20">
            <q-icon name="compost" size="100px" />
          </q-avatar>
          <div class="q-mt-md icon-description">
            <h6 class="text-subtitle2">Cura dell'ambiente</h6>
            <p class="text-caption">
              Preserviamo il nostro prezioso ambiente utilizzando prodotti
              ecologici a basso impatto e adottando mezzi di trasporto
              ibridi, contribuendo così a un futuro più sostenibile con
              servizi efficienti.
            </p>
          </div>
        </q-card-section>
      </q-card>
      <!--</transition>
         </q-intersection>
      <q-intersection :key="'soddisfazione-cliente'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated bounceInUp slower">-->
      <q-card class="q-mr-xl q-ml-xl q-mb-md shadow-10" style="width: 310px" :key="'soddisfazione-cliente'"
        v-scroll-fire="bounceImage">
        <q-card-section class="q-pt-lg q-pb-xl text-center">
          <q-avatar size="225px" color="teal" text-color="white" class="shadow-20">
            <q-icon name="diversity_1" size="100px" />
          </q-avatar>
          <div class="q-mt-md icon-description">
            <h6 class="text-subtitle2">Soddisfazione del Cliente</h6>
            <p class="text-caption">
              La tua soddisfazione è la nostra priorità. Lavoriamo con
              impegno costante per superare le tue aspettative, offrendo
              servizi personalizzati che riflettono le tue esigenze e
              garantendo un'esperienza cliente positiva.
            </p>
          </div>
        </q-card-section>
      </q-card>
      <!-- </transition>
        </q-intersection>
      <q-intersection :key="'pulizia-imppeccabile'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated bounceInRight slower">-->
      <q-card class="q-mb-md q-ml-xl q-mr-xl shadow-10" style="width: 310px" :key="'pulizia-efficace'"
        v-scroll-fire="bounceImage">
        <q-card-section class="q-pt-lg q-pb-xl text-center">
          <q-avatar size="225px" color="teal" text-color="white" class="shadow-20">
            <q-icon name="cleaning_services" size="100px" />
          </q-avatar>
          <div class="q-mt-md icon-description">
            <h6 class="text-subtitle2">Pulizia efficace</h6>
            <p class="text-caption">
              La pulizia impeccabile è il nostro marchio di fabbrica.
              Attraverso metodologie avanzate e personale esperto,
              assicuriamo un livello di pulizia che conferisce freschezza e
              vitalità ai tuoi spazi.
            </p>
          </div>
        </q-card-section>
      </q-card>
      <!--  </transition>-->
    </div>
    <!--  </q-intersection>-->

    <!-- <q-intersection :key="'fourth-label'">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeIn slower"> -->
    <div class="description-container q-mt-xl">
      <p class="text-h5 text-center">
        Siamo guidati dalla costante ricerca di innovazione: attraverso l'integrazione di metodologie all'avanguardia e
        una profonda dedizione al servizio, siamo in grado di raggiungere livelli di eccellenza nella pulizia che superano
        qualsiasi aspettativa. Il nostro approccio rivoluzionario e l'impiego di tecnologie all'avanguardia ci permettono
        di offrire una pulizia che va al di là dell'ordinario, conferendo agli ambienti una vitalità rinnovata.
      </p>
    </div>

    <q-intersection :key="'h2-principles'" v-scroll-fire="bounceImage">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeInLeftBig slower">
        <h2 class="text-body text-center text-italic" data-index="h2-principles">
          Dove trovarci
        </h2>
      </transition>
    </q-intersection>

    <!-- Simple component to manage embedded maps provided by google, modify the url
     to get the correct position (search first on maps and paste the relevant part of the URL) -->
    <div class="row justify-center">
      <iframe width="600" height="450" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=POSITION_TO_RETRIEVE"
        allowfullscreen>
      </iframe>
    </div>

    <q-intersection :key="'button-finish'" v-scroll-fire="bounceImage">
      <transition type="animation" mode="out-in" appear enter-active-class="animated tada slower">
        <router-link to="/contattaci" class="router-link-no-style-title"> <!-- Since this is present the transition animation is not displayed -->
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
import GalleryCarousel from "../components/GalleryCarousel.vue";
import { useMeta } from 'quasar';

const metaData = {
  // sets document title
  title: 'ITL srl impresa di pulizie',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - Genova`,

  // meta tags
  meta: {
    //title: { name: "title", content: 'ITL sas Impresa di pulizie'},
    description: { name: 'description', content: 'ITL impresa di pulizie genova, servizi di pulizie' },
    keywords: { name: 'keywords', content: 'ITL impresa di pulizi Genova' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  },

  // CSS tags
  link: {
    material: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  },

  // JS tags
  script: {
    ldJson: {
      type: 'application/ld+json',
      innerHTML: `{ "@context": "http://schema.org" }`
    },
    // Add the Google Tag for Analytics script and tracking code provided by Firebase
    gtag: {
      src: 'https://www.googletagmanager.com/gtag/js?id=GOOGLE_ANALYTICS_TAG',
      async: true
    },
    gtagConfig: {
      content: `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        };
        gtag("js", new Date());
        gtag("config", "GOOGLE_ANALYTICS_TAG");
      `,
    },
  },

  // <html> attributes
  htmlAttr: {
    'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
    empty: undefined // generates <html empty>
  },

  // <body> attributes
  bodyAttr: {
    'action-scope': 'xyz', // generates <body action-scope="xyz">
    empty: undefined // generates <body empty>
  },

  // <noscript> tags
  noscript: {
    default: 'This is content for browsers with no JS (or disabled JS)'
  }
}



export default defineComponent({
  components: {
    GalleryCarousel,
  },
  name: "IndexPage",
  setup() {
    useMeta(metaData)
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
  },
});
</script>

<style lang="sass" scoped>
.router-link-no-style-title
  text-decoration: none
  color: white

.my-card
  height: 300px
  width: 400px
  max-width: 350px

/* Add this for active animation */
.slideInRightActive
  animation: slideInRight 1s
.description-container
  position: relative
  top: 70%
  left: 50%
  transform: translate(-50%, -2%)
  width: 80%

.icon-size
  font-size: 48px

.icon-description
  width: 100%
  text-align: center

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
