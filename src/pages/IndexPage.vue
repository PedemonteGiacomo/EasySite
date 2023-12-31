<template>
  <q-page>
    <!-- TITLE DESCRIPTION AND GALLERY CAROUSEL -->
    <transition-group type="animation" appear mode="out-in" enter-active-class="animated slideInRight slower">
      <br />
      <h2 key="title" class="q-mb-md text-h2 text-center text-italic text-weight-bold">
        ITL - Impresa di Pulizie Genova
      </h2>

      <DescriptionContainer :containerClass="'description-container'" :textClass="'text-h6 text-body text-center text-italic'">
        Una realtà fondata sulla soddisfazione del cliente, caratterizzata
          dalla velocità e dall'accuratezza nell'effettuare pulizie complete per
          varie tipologie di immobili. Dalle abitazioni condominiali agli
          uffici, dai magazzini ai garage, ci occupiamo anche delle pulizie
          post-cantiere e di interventi di pulizia approfondita.
      </DescriptionContainer>

      <GalleryCarousel key="carousel"/>
    </transition-group>

    <DescriptionContainer :containerClass="'description-container'" :textClass="'text-h5 text-center'" class="q-mt-xl">
      Eccellenza in ogni dettaglio: il nostro servizio di pulizia offre risultati impeccabili che superano le tue
      aspettative. <br />Ogni spazio trasformato in uno scenario di pulizia e freschezza, grazie alla nostra attenzione ai
      dettagli e all'uso di prodotti di alta qualità.
    </DescriptionContainer>

    <!-- QUALITY SECTION -->
    <q-intersection :key="'h6-description'" v-scroll-fire="bounceImage">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeInLeftBig slower">
        <h2 class="text-body text-center text-italic" data-index="h6-description">
          Qualità al primo posto: ecco come lavoriamo!
        </h2>
      </transition>
    </q-intersection>

    <DescriptionContainer :containerClass="'description-container'" :textClass="'text-h5 text-center'">
      La nostra dedizione alla qualità è tangibile attraverso i risultati
      concreti del nostro impegno! Qui di seguito, potrai ammirare una
      selezione di foto che testimoniano il trasformarsi degli spazi grazie
      all'intervento professionale dell'impresa di pulizie ITL. Dai uffici
      agli appartamenti, fino ai cantieri a Genova, la differenza è evidente.
    </DescriptionContainer>

    <!--BEFORE/AFTER block-->
    <div class="q-pa-md">
      <div class="row items-start justify-center">
        <before-after-card before-text="Prima" before-image="images/before-after/before-1.jpg" after-text="Dopo"
          after-image="images/before-after/after-1.jpg" card-height="223" v-scroll-fire="rubberBand" />
        <before-after-card before-text="Prima" before-image="images/before-after/before-sanification.jpg"
          after-text="Dopo" after-image="images/before-after/after-sanification.jpg" card-height="223"
          v-scroll-fire="rubberBand" />
        <before-after-card before-text="Prima" before-image="images/before-after/real-1.jpg" after-text="Dopo"
          after-image="images/before-after/after-real-1.jpg" card-height="223" v-scroll-fire="rubberBand" />
      </div>
    </div>

    <!-- ANOTHER DESCRIPTION - HOW THE COMPANY WORKS IN BRIEF -->
    <DescriptionContainer :containerClass="'description-container'" :textClass="'text-h5 text-center'">
      La nostra squadra di professionisti esperti è dedicata a rendere il tuo
        ambiente brillante e incontaminato, garantendo standard di pulizia
        elevati. Affidati a un team di esperti, appassionati della propria arte, che cura
        ogni angolo con cura e precisione. La nostra filosofia abbraccia la sostenibilità: utilizziamo prodotti
        ecologici e pratiche a basso impatto per preservare l'ambiente e il
        futuro delle generazioni.<br />
    </DescriptionContainer>

    <!-- ABOUT THE COMPANY INTRODUCTION -->
    <q-intersection :key="'h2-description'" v-scroll-fire="bounceImage">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeInLeftBig slower">
        <h2 class="text-body text-center text-italic" data-index="h2-description">
          Pulizie di qualità dal 1984
        </h2>
      </transition>
    </q-intersection>

    <DescriptionContainer :containerClass="'description-container'" :textClass="'text-h5 text-center'">
      Un passo verso un futuro più verde: i nostri servizi di pulizia non solo
        valorizzano i tuoi spazi, ma contribuiscono anche a un ambiente più
        sano. La tua soddisfazione è il nostro traguardo: lavoriamo incessantemente
        per offrire un'esperienza cliente indimenticabile, basata su servizi
        personalizzati e risultati straordinari.
    </DescriptionContainer>

    <!-- IMAGE WITH TEXT -->
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

    <!-- PRINCIPLES -->
    <q-intersection :key="'h2-principles'" v-scroll-fire="bounceImage">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeInLeftBig slower">
        <h2 class="text-body text-center text-italic" data-index="h2-principles">
          I nostri principi
        </h2>
      </transition>
    </q-intersection>

    <DescriptionContainer :containerClass="'description-container'" :textClass="'text-h5 text-center'">
      Abbiamo abbracciato l'innovazione: le nostre metodologie avanzate, unite
        alla passione per il servizio, ci permettono di raggiungere livelli di
        pulizia ineguagliabili. Il nostro approccio moderno e le tecnologie all'avanguardia ci
        consentono di offrire una pulizia efficace e un ambiente che trasmette
        vitalità
    </DescriptionContainer>

    <!-- Icon Cards for Business Engagment -->
    <div class="q-pa-md row justify-center">
      <ServiceCard iconName="compost" title="Cura dell'ambiente"
        description="Preserviamo il nostro prezioso ambiente utilizzando prodotti ecologici a basso impatto e adottando mezzi di trasporto ibridi, contribuendo così a un futuro più sostenibile con servizi efficienti." />
      <ServiceCard iconName="diversity_1" title="Soddisfazione del Cliente"
        description="La tua soddisfazione è la nostra priorità. Lavoriamo con impegno costante per superare le tue aspettative, offrendo servizi personalizzati che riflettono le tue esigenze e garantendo un'esperienza cliente positiva." />
      <ServiceCard iconName="cleaning_services" title="Pulizia efficace"
        description="La pulizia impeccabile è il nostro marchio di fabbrica. Attraverso metodologie avanzate e personale esperto, assicuriamo un livello di pulizia che conferisce freschezza e vitalità ai tuoi spazi, qualsiasi essi siano." />
    </div>

    <DescriptionContainer :containerClass="'description-container'" :textClass="'text-h5 text-center'">
      Siamo guidati dalla costante ricerca di innovazione: attraverso l'integrazione di metodologie all'avanguardia e
        una profonda dedizione al servizio, siamo in grado di raggiungere livelli di eccellenza nella qualità delle
        pulizie.
    </DescriptionContainer>

    <q-intersection :key="'h2-principles'" v-scroll-fire="bounceImage">
      <transition type="animation" mode="out-in" appear enter-active-class="animated fadeInLeftBig slower">
        <h2 class="text-body text-center text-italic" data-index="h2-principles">
          Dove trovarci
        </h2>
      </transition>
    </q-intersection>

    <MapComponent address="ITL Srl IMPRESA PULIZIA, Genova Italy" />

    <CallToActionButton intersectionKey="button-finish" buttonLabel="Richiedi subito un preventivo! Contattaci Ora!"
      buttonIcon="phone" buttonLink="#/contattaci" />
  </q-page>
</template>


<script>
import { defineComponent, ref, onMounted } from "vue";
import GalleryCarousel from "../components/GalleryCarousel.vue";
import { useMeta } from 'quasar';
import MapComponent from "src/components/MapComponent.vue";
import BeforeAfterCard from "src/components/BeforeAfterCard.vue";
import ServiceCard from "src/components/ServiceCard.vue";
import CallToActionButton from "src/components/CallToActionButton.vue";
import DescriptionContainer from "src/components/DescriptionContainer.vue";

// all the MetaData that application needs to have like API handlers for G-Analytics and SEO
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
  }

  // other metadata if needed
}

export default defineComponent({
  components: {
    GalleryCarousel,
    MapComponent,
    BeforeAfterCard,
    ServiceCard,
    CallToActionButton,
    DescriptionContainer
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
      // other animation that can be useful
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

      rubberBand(el) {
        el.classList.add('animate-rubberBand');

        setTimeout(() => {
          if (document.body.contains(el)) {
            el.classList.remove('animate-rubberBand');
          }
        }, 4000);
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

@keyframes rubberBand
  from
    transform: scale3d(1, 1, 1)
  30%
    transform: scale3d(1.25, 0.75, 1)
  40%
    transform: scale3d(0.75, 1.25, 1)
  50%
    transform: scale3d(1.15, 0.85, 1)
  65%
    transform: scale3d(0.95, 1.05, 1)
  75%
    transform: scale3d(1.05, 0.95, 1)
  to
    transform: scale3d(1, 1, 1)
.animate-rubberBand
  animation: rubberBand 1.5s

</style>
