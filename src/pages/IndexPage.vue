<template>
  <q-page>
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="row items-center min-h-screen q-py-xl no-gutters">
          <div class="col-12 col-md-6">
            <div class="container">
              <div class="hero-text q-pl-lg">
                <h1 class="hero-title text-balance">
                  ITL Impresa di Pulizie
                  <span class="text-primary">Genova</span> 
                  dal 1984
                </h1>
                <p class="hero-subtitle text-balance">
                  ITL è l'impresa di pulizie di riferimento a Genova dal 1984. Offriamo servizi professionali 
                  di pulizie domestiche, uffici, condomini e cantieri con velocità, accuratezza e 
                  prodotti ecologici certificati. Preventivo gratuito in 24 ore.
                </p>
                <div class="hero-actions row q-gutter-md q-mt-lg">
                  <router-link to="/contattaci">
                    <q-btn 
                      label="Richiedi Preventivo Gratuito" 
                      icon="request_quote"
                      class="itl-btn-primary"
                      size="lg"
                      no-caps
                    />
                  </router-link>
                  <router-link to="/servizi">
                    <q-btn 
                      label="Scopri i nostri servizi" 
                      icon="arrow_forward"
                      class="itl-btn-secondary"
                      size="lg"
                      no-caps
                    />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="gallery-container full-width-gallery">
              <GalleryCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- QUALITY PROMISE SECTION -->
    <section class="section bg-white">
      <div class="container text-center">
        <h2 class="section-title">Impresa di Pulizie Genova: Eccellenza in ogni dettaglio</h2>
        <p class="section-subtitle">
          ITL è l'impresa di pulizie di riferimento a Genova e provincia. I nostri servizi 
          professionali di pulizia offrono risultati impeccabili che superano le aspettative. 
          Ogni spazio è trasformato con precisione grazie alla nostra esperienza dal 1984 e 
          all'uso di prodotti ecologici certificati.
        </p>
      </div>
    </section>

    <!-- TRUST INDICATORS SECTION -->
    <section ref="statsSection" class="section">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">ITL Impresa Pulizie Genova: La nostra esperienza in numeri</h2>
          <p class="section-subtitle">
            Oltre 40 anni di esperienza nell'impresa di pulizie a Genova. 
            Affidabilità e qualità comprovate da decenni di servizio professionale 
            sul territorio genovese e in tutta la Liguria.
          </p>
        </div>

        <div class="row q-col-gutter-lg justify-center">
          <div class="col-12 col-sm-6 col-md-3">
            <div class="itl-card text-center q-pa-lg stats-card">
              <div class="stat-number text-primary text-weight-bold q-mb-sm" style="font-size: 2.5rem;">
                {{ animatedYears }}+
              </div>
              <div class="text-h6 text-weight-medium q-mb-xs">Anni di esperienza</div>
              <p class="text-body2 text-grey-7 q-ma-none">
                Dal 1984 al servizio di Genova e provincia
              </p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-3">
            <div class="itl-card text-center q-pa-lg stats-card">
              <div class="stat-number text-primary text-weight-bold q-mb-sm" style="font-size: 2.5rem;">
                {{ animatedClients }}+
              </div>
              <div class="text-h6 text-weight-medium q-mb-xs">Clienti soddisfatti</div>
              <p class="text-body2 text-grey-7 q-ma-none">
                Privati e aziende ci scelgono ogni giorno
              </p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-3">
            <div class="itl-card text-center q-pa-lg stats-card">
              <div class="stat-number text-primary text-weight-bold q-mb-sm" style="font-size: 2.5rem;">
                {{ animatedHours }}h
              </div>
              <div class="text-h6 text-weight-medium q-mb-xs">Risposta rapida</div>
              <p class="text-body2 text-grey-7 q-ma-none">
                Preventivo gratuito entro 24 ore
              </p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-3">
            <div class="itl-card text-center q-pa-lg stats-card">
              <div class="stat-number text-primary text-weight-bold q-mb-sm" style="font-size: 2.5rem;">
                {{ animatedPercent }}%
              </div>
              <div class="text-h6 text-weight-medium q-mb-xs">Eco-friendly</div>
              <p class="text-body2 text-grey-7 q-ma-none">
                Solo prodotti certificati e sostenibili
              </p>
            </div>
          </div>
        </div>

        <!-- Trust badges -->
        <div class="row justify-center q-mt-xl q-col-gutter-md">
          <div class="col-auto">
            <div class="trust-badge">
              <q-icon name="verified_user" size="md" color="positive" class="q-mr-sm" />
              <span class="text-body2 text-weight-medium">Assicurazione RC</span>
            </div>
          </div>
          <div class="col-auto">
            <div class="trust-badge">
              <q-icon name="eco" size="md" color="positive" class="q-mr-sm" />
              <span class="text-body2 text-weight-medium">Prodotti ecologici</span>
            </div>
          </div>
          <div class="col-auto">
            <div class="trust-badge">
              <q-icon name="schedule" size="md" color="positive" class="q-mr-sm" />
              <span class="text-body2 text-weight-medium">Puntualità garantita</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US SECTION -->
    <section class="section bg-white">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">Perché scegliere ITL come impresa di pulizie a Genova</h2>
          <p class="section-subtitle">
            I nostri valori e il nostro impegno per offrire servizi di pulizia 
            eccellenti a Genova dal 1984
          </p>
        </div>

        <div class="itl-grid cols-4">
          <ServiceCard 
            iconName="eco" 
            title="Cura dell'ambiente"
            description="Utilizziamo prodotti ecologici a basso impatto e mezzi di trasporto ibridi per un futuro più sostenibile." 
          />
          <ServiceCard 
            iconName="star" 
            title="Soddisfazione garantita"
            description="La tua soddisfazione è la nostra priorità. Offriamo servizi personalizzati che superano le aspettative." 
          />
          <ServiceCard 
            iconName="cleaning_services" 
            title="Pulizia professionale"
            description="Metodologie avanzate e personale esperto per un livello di pulizia che conferisce freschezza ai tuoi spazi." 
          />
          <ServiceCard 
            iconName="access_time" 
            title="Flessibilità oraria"
            description="Lavoriamo nei momenti più convenienti per te, adattandoci alle tue esigenze di orario e frequenza." 
          />
        </div>
      </div>
    </section>

    <!-- COMPANY STORY SECTION -->
    <section class="section">
      <div class="container">
        <div class="row items-center q-col-gutter-xl">
          <div class="col-12 col-md-6">
            <q-img 
              src="images/office/material.jpg" 
              class="rounded-borders"
              style="height: 400px;"
              fit="cover"
              alt="ITL Impresa di Pulizie Genova - Attrezzature e prodotti professionali per pulizie di qualità"
            />
          </div>
          <div class="col-12 col-md-6">
            <h2 class="section-title">ITL Impresa di Pulizie: qualità dal 1984 a Genova</h2>
            <p class="text-body1 q-mb-md text-grey-8 text-balance">
              ITL è un'impresa di pulizie consolidata a Genova dal 1984. Ci dedichiamo a fornire 
              servizi di pulizia di qualità eccezionale che superano le aspettative dei nostri 
              clienti su tutto il territorio genovese e ligure.
            </p>
            <p class="text-body1 q-mb-lg text-grey-8 text-balance">
              Sappiamo quanto sia importante mantenere un ambiente pulito, sano e invitante, 
              sia per abitazioni private che per uffici commerciali. Per questo la nostra 
              impresa di pulizie utilizza metodologie innovative e prodotti 
              all'avanguardia per garantire risultati straordinari a Genova.
            </p>
            <router-link to="/about#storia">
              <q-btn 
                label="La nostra storia" 
                icon="arrow_forward"
                class="itl-btn-text"
                no-caps
              />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- LOCATION SECTION -->
    <section class="section bg-white">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">ITL Impresa Pulizie: dove trovarci a Genova</h2>
          <p class="section-subtitle">
            La nostra impresa di pulizie serve Genova e tutta la provincia ligure 
            con professionalità, puntualità e oltre 40 anni di esperienza
          </p>
        </div>
        <MapComponent address="ITL s.r.l. IMPRESA PULIZIA, Genova Italy" />
      </div>
    </section>

    <!-- QUOTE SECTION -->
    <section class="section bg-grey-1">
      <div class="container">
        <div class="quote-section text-center">
          <q-icon 
            name="format_quote" 
            size="3rem" 
            color="primary" 
            class="quote-icon q-mb-md"
          />
          
          <blockquote class="quote-text">
            Siamo guidati dalla costante ricerca di innovazione: attraverso l'integrazione di metodologie all'avanguardia e
            una profonda dedizione al servizio, siamo in grado di raggiungere livelli di eccellenza nella qualità delle
            pulizie che trasformano ogni ambiente in uno spazio fresco e vitale.
          </blockquote>
          
          <div class="quote-attribution q-mt-lg">
            <div class="quote-author text-weight-bold text-primary">
              ITL s.r.l.
            </div>
            <div class="quote-title text-grey-7">
              Impresa di Pulizie • Dal 1984
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <CallToActionButton 
      title="Contattaci Ora"
      buttonLabel="Richiedi preventivo gratuito"
      buttonIcon="request_quote"
      buttonLink="/contattaci"
      subtitle="Trasforma il tuo spazio con i nostri servizi professionali di pulizia"
      :showSecondary="true"
      :whiteBackground="true"
    />
  </q-page>
</template>

<style lang="scss" scoped>
.hero-section {
  background: linear-gradient(135deg, #F7FAFC 0%, #EDF2F7 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  
  .hero-title {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    animation: fadeSlideIn 1s ease-out;
    position: relative;
    
    .text-primary {
      background: linear-gradient(135deg, $primary 0%, $secondary 50%, $accent 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      /* Fallback per browser che non supportano background-clip: text */
      @supports not (-webkit-background-clip: text) {
        background: none;
        color: $primary;
      }
    }
    
    @media (min-width: 768px) {
      font-size: 3rem;
    }
    
    @media (min-width: 1024px) {
      font-size: 3.5rem;
    }
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #6B7280;
    margin-bottom: 2rem;
    animation: fadeSlideIn 1s ease-out 0.2s both;
    
    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
  
  .hero-actions {
    animation: fadeSlideIn 1s ease-out 0.4s both;
    
    @media (max-width: 1023px) {
      flex-direction: column;
      
      .q-btn {
        width: 100%;
      }
    }
  }
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gallery-container {
  width: 100%;
  
  @media (max-width: 1023px) {
    margin: 3rem 1rem 2rem 1rem;
    order: 2;
    padding: 1rem;
    border-radius: 12px;
    box-sizing: border-box;
    max-width: calc(100% - 2rem);
  }
  
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  &.full-width-gallery {
    @media (max-width: 1023px) {
      width: auto !important;
      margin-right: 1rem !important;
    }
    
    @media (min-width: 1024px) {
      width: calc(50vw - 2rem);
      margin-right: calc(-25vw + 50%);
    }
  }
}

.hero-text {
  @media (max-width: 1023px) {
    text-align: center;
    order: 1;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

.stats-card {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }
}

.stats-card {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }
}

.trust-badge {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background: rgba(15, 118, 110, 0.08);
  border-radius: 30px;
  border: 1px solid rgba(15, 118, 110, 0.2);
  
  @media (max-width: 1023px) {
    justify-content: center;
  }
}

.stat-number {
  line-height: 1;
}

.quote-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1rem;
  
  .quote-icon {
    opacity: 0.7;
    transform: rotate(180deg);
  }
  
  .quote-text {
    font-size: 1.375rem;
    line-height: 1.6;
    font-weight: 400;
    font-style: italic;
    color: #374151;
    margin: 0;
    position: relative;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
      line-height: 1.7;
    }
    
    @media (min-width: 1024px) {
      font-size: 1.625rem;
      line-height: 1.8;
    }
  }
  
  .quote-attribution {
    .quote-author {
      font-size: 1.125rem;
      letter-spacing: 0.5px;
    }
    
    .quote-title {
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 4px;
    }
  }
}

.min-h-screen {
  min-height: 80vh;
  
  @media (max-width: 1023px) {
    min-height: auto;
  }
}

// Remove old animations
.animated {
  animation: none !important;
}
</style>


<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import GalleryCarousel from "../components/GalleryCarousel.vue";
import { useMeta } from 'quasar';
import MapComponent from "src/components/MapComponent.vue";
import ServiceCard from "src/components/ServiceCard.vue";
import CallToActionButton from "src/components/CallToActionButton.vue";

// all the MetaData that application needs to have like API handlers for G-Analytics and SEO
const metaData = {
  // sets document title
  title: 'ITL Impresa di Pulizie Genova | Servizi Professionali dal 1984',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => title,

  // meta tags
  meta: {
    description: { 
      name: 'description', 
      content: 'ITL Impresa di Pulizie Genova: servizi professionali di pulizie domestiche, uffici, condomini e cantieri. Dal 1984 a Genova e provincia. Preventivo gratuito in 24h.' 
    },
    keywords: { 
      name: 'keywords', 
      content: 'ITL impresa pulizie Genova, pulizie domestiche Genova, pulizie uffici Genova, pulizie condomini Genova, impresa pulizie professionale, servizi pulizie Liguria, pulizie cantiere Genova, sanificazione Genova' 
    },
    author: { name: 'author', content: 'ITL s.r.l. Impresa di Pulizie' },
    robots: { name: 'robots', content: 'index,follow' },
    
    // Open Graph / Facebook
    'og:title': { property: 'og:title', content: 'ITL Impresa di Pulizie Genova | Servizi Professionali dal 1984' },
    'og:description': { property: 'og:description', content: 'ITL Impresa di Pulizie Genova: servizi professionali di pulizie domestiche, uffici, condomini e cantieri. Dal 1984 a Genova e provincia.' },
    'og:type': { property: 'og:type', content: 'website' },
    'og:url': { property: 'og:url', content: 'https://itl-impresadipulizie-genova.web.app' },
    'og:site_name': { property: 'og:site_name', content: 'ITL Impresa di Pulizie Genova' },
    'og:locale': { property: 'og:locale', content: 'it_IT' },
    
    // Twitter Card
    'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
    'twitter:title': { name: 'twitter:title', content: 'ITL Impresa di Pulizie Genova | Servizi Professionali dal 1984' },
    'twitter:description': { name: 'twitter:description', content: 'ITL Impresa di Pulizie Genova: servizi professionali dal 1984. Preventivo gratuito in 24h.' },
    
    // Geographic SEO
    'geo.region': { name: 'geo.region', content: 'IT-LIG' },
    'geo.placename': { name: 'geo.placename', content: 'Genova' },
    'geo.position': { name: 'geo.position', content: '44.4056;8.9463' },
    'ICBM': { name: 'ICBM', content: '44.4056, 8.9463' },
    
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  }

  // other metadata if needed
}

export default defineComponent({
  components: {
    GalleryCarousel,
    MapComponent,
    ServiceCard,
    CallToActionButton
  },
  name: "IndexPage",
  setup() {
    useMeta(metaData);
    
    // Animation counters
    const animatedYears = ref(0);
    const animatedClients = ref(0);
    const animatedHours = ref(0);
    const animatedPercent = ref(0);
    
    // Ref per la sezione statistiche
    const statsSection = ref(null);
    
    // Flag per controllare se l'animazione è già stata eseguita
    const animationTriggered = ref(false);
    
    // Counter animation function
    const animateValue = (obj, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.value = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };
    
    // Funzione per avviare le animazioni
    const startAnimations = () => {
      if (!animationTriggered.value) {
        animationTriggered.value = true;
        setTimeout(() => animateValue(animatedYears, 0, 40, 1500), 200);
        setTimeout(() => animateValue(animatedClients, 0, 500, 1800), 400);
        setTimeout(() => animateValue(animatedHours, 0, 24, 1200), 600);
        setTimeout(() => animateValue(animatedPercent, 0, 100, 1600), 800);
      }
    };
    
    // Intersection Observer per rilevare quando la sezione entra nel viewport
    let observer = null;
    
    onMounted(() => {
      if (statsSection.value) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                startAnimations();
              }
            });
          },
          {
            threshold: 0.3, // Avvia quando il 30% della sezione è visibile
            rootMargin: '-50px 0px' // Inizia un po' prima che sia completamente visibile
          }
        );
        observer.observe(statsSection.value);
      }
    });
    
    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
      }
    });

    return {
      statsSection,
      animatedYears,
      animatedClients,
      animatedHours,
      animatedPercent,
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
