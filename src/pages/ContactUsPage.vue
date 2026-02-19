<template>
  <q-page class="bg-grey-1">
    <!-- HERO SECTION -->
    <section class="section hero-section">
      <div class="container text-center">
        <h1 class="hero-title text-h2 text-weight-bold q-mb-lg">
          Richiedi un preventivo gratuito
        </h1>
        <p class="hero-subtitle text-h5 text-grey-7 q-mb-none">
          Siamo qui per rispondere a tutte le tue domande sui nostri servizi di pulizia
        </p>
      </div>
    </section>

    <!-- MAIN CONTACT SECTION -->
    <section class="section">
      <div class="container">
        <div class="row q-col-gutter-xl justify-center">
          <!-- Contact Form -->
          <div class="col-12 col-md-6">
            <CatchingClientComponent />
          </div>
          
          <!-- Contact Info Sidebar -->
          <div class="col-12 col-md-6">
            <div class="contact-sidebar">
              <!-- Direct Contact Card -->
              <div class="itl-card direct-contact-card">
                <div class="q-pa-lg">
                  <div class="form-header q-mb-lg text-center">
                    <h3 class="text-h5 text-weight-bold text-primary q-mb-sm">
                      Contatto diretto
                    </h3>
                    <p class="text-body2 text-grey-7">
                      Preferisci parlare direttamente con noi?
                    </p>
                  </div>
                  
                  <div class="contact-methods q-gutter-md">
                    <div class="contact-method">
                      <div class="row items-center q-gutter-sm q-mb-sm">
                        <q-icon name="phone" color="primary" size="sm" />
                        <span class="text-weight-medium">Telefono</span>
                      </div>
                      <div class="contact-details q-ml-md">
                        <div class="contact-person">
                          <div class="text-body2 text-weight-medium">Luciano</div>
                          <a href="tel:+393351267227" class="text-body2 text-primary contact-link">+39 335 126 7227</a>
                        </div>
                        <div class="contact-person q-mt-sm">
                          <div class="text-body2 text-weight-medium">Federico</div>
                          <a href="tel:+393896405346" class="text-body2 text-primary contact-link">+39 389 6405346</a>
                        </div>
                        <div class="contact-person q-mt-sm">
                          <div class="text-body2 text-weight-medium">Filippo</div>
                          <a href="tel:+393772766580" class="text-body2 text-primary contact-link">+39 377 276 6580</a>
                        </div>
                      </div>
                    </div>

                    <q-separator />

                    <div class="contact-method">
                      <div class="row items-center q-gutter-sm q-mb-sm">
                        <q-icon name="email" color="primary" size="sm" />
                        <span class="text-weight-medium">Email</span>
                      </div>
                      <div class="contact-details q-ml-md">
                        <a href="mailto:itl.sas@virgilio.it" class="text-body2 text-primary contact-link">itl.sas@virgilio.it</a>
                      </div>
                    </div>

                    <q-separator />

                    <div class="contact-method">
                      <div class="row items-center q-gutter-sm q-mb-sm">
                        <q-icon name="location_on" color="primary" size="sm" />
                        <span class="text-weight-medium">Indirizzo</span>
                      </div>
                      <div class="contact-details q-ml-md">
                        <div class="text-body2">Via Archimede 58r, Genova, Italia</div>
                      </div>
                    </div>
                    
                    <q-separator />

                    <div class="contact-method">
                      <div class="row items-center q-gutter-sm q-mb-sm">
                        <q-icon name="schedule" color="primary" size="sm" />
                        <span class="text-weight-medium">Orari di contatto</span>
                      </div>
                      <div class="contact-details q-ml-md">
                        <div class="hours-info">
                          <div class="hours-item row justify-between q-mb-xs">
                            <span>Lunedì - Venerdì</span>
                            <span class="text-weight-medium">8:00 - 18:00</span>
                          </div>
                          <div class="hours-item row justify-between">
                            <span>Sabato e Domenica</span>
                            <span class="text-grey-6">Su appuntamento</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RESPONSE TIME SECTION -->
    <section class="section bg-white">
      <div class="container text-center">
        <h2 class="section-title">Tempi di risposta rapidi</h2>
        <p class="section-subtitle">
          La tua richiesta è importante per noi. Ecco come gestiamo i contatti.
        </p>
        
        <div class="row justify-center">
          <div class="col-12 col-md-8">
            <div class="response-timeline">
              <div class="timeline-item">
                <div class="timeline-icon">
                  <q-icon name="schedule" size="lg" color="primary" />
                </div>
                <div class="timeline-content">
                  <h4 class="text-h6 text-weight-bold">Entro 2 ore</h4>
                  <p class="text-body2 text-grey-7">Conferma di ricezione della tua richiesta</p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-icon">
                  <q-icon name="call" size="lg" color="secondary" />
                </div>
                <div class="timeline-content">
                  <h4 class="text-h6 text-weight-bold">Entro 24 ore</h4>
                  <p class="text-body2 text-grey-7">Chiamata per discutere le tue esigenze</p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-icon">
                  <q-icon name="assignment" size="lg" color="accent" />
                </div>
                <div class="timeline-content">
                  <h4 class="text-h6 text-weight-bold">Entro 48 ore</h4>
                  <p class="text-body2 text-grey-7">Preventivo dettagliato e personalizzato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LOCATION SECTION -->
    <section class="section">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">Dove trovarci</h2>
          <p class="section-subtitle">
            Siamo strategicamente posizionati per servire Genova e provincia
          </p>
        </div>
        <MapComponent address="ITL s.r.l. IMPRESA PULIZIA, Genova Italy" />
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CatchingClientComponent from "src/components/CatchingClientComponent.vue";
import MapComponent from "src/components/MapComponent.vue";
import { useMeta } from 'quasar';

// SEO metadata
const metaData = {
  title: 'Contatti ITL Genova | Preventivo Gratuito Pulizie - Chiamaci Subito',
  titleTemplate: title => `${title}`,
  meta: {
    description: { 
      name: 'description', 
      content: 'Contatta ITL per un preventivo gratuito di pulizie a Genova. Servizi professionali per casa, ufficio e condomini. Chiamaci al numero o compila il form. Risposta entro 24 ore.' 
    },
    keywords: { 
      name: 'keywords', 
      content: 'contatti ITL Genova, preventivo gratuito pulizie Genova, ITL telefono contatti, richiesta preventivo pulizie, contatti impresa pulizie Genova'
    },
    // Open Graph
    'og:title': {
      property: 'og:title',
      content: 'Contatti ITL Genova | Preventivo Gratuito Pulizie'
    },
    'og:description': {
      property: 'og:description',
      content: 'Contatta ITL per un preventivo gratuito di pulizie a Genova. Servizi professionali per casa, ufficio e condomini.'
    },
    'og:type': { property: 'og:type', content: 'website' },
    'og:site_name': { property: 'og:site_name', content: 'ITL Impresa di Pulizie' },
    // Twitter Cards
    'twitter:title': {
      name: 'twitter:title',
      content: 'Contatti ITL Genova | Preventivo Gratuito Pulizie'
    },
    'twitter:description': {
      name: 'twitter:description',
      content: 'Contatta ITL per un preventivo gratuito di pulizie a Genova. Servizi professionali per casa e ufficio.'
    }
  }
}

export default defineComponent({
  name: "ContactUsPage",
  components: {
    CatchingClientComponent,
    MapComponent,
  },
  setup() {
    useMeta(metaData);
  },
});
</script>

<style lang="scss" scoped>
.hero-section {
  padding: 4rem 0;
  background: white;
  border-bottom: 1px solid rgba(15, 118, 110, 0.1);
}

.hero-title {
  background: linear-gradient(135deg, $primary 0%, $secondary 50%, $accent 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Fallback per browser che non supportano background-clip: text */
  @supports not (-webkit-background-clip: text) {
    background: none;
    color: $primary;
  }
  text-shadow: 0 4px 12px rgba(15, 118, 110, 0.2);
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
  letter-spacing: -0.02em;
  position: relative;
  animation: fadeSlideIn 1s ease-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, $primary, $secondary);
    border-radius: 2px;
    animation: scaleIn 0.8s ease-out 0.3s both;
  }
}

.hero-subtitle {
  font-weight: 400;
  line-height: 1.5;
  max-width: 700px;
  margin: 0 auto;
  color: $grey-6;
  animation: fadeSlideIn 1s ease-out 0.2s both;
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

@keyframes scaleIn {
  from {
    transform: translateX(-50%) scaleX(0);
  }
  to {
    transform: translateX(-50%) scaleX(1);
  }
}

.contact-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
  
  @media (max-width: 1023px) {
    position: static;
  }
}

.direct-contact-card {
  @media (min-width: 768px) {
    min-height: 650px;
    display: flex;
    flex-direction: column;
    
    .q-pa-lg {
      flex: 1;
      display: flex;
      flex-direction: column;
      
      .contact-methods {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
}

.contact-method {
  .contact-person {
    padding: 8px 0;
  }
}

.contact-link {
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
  
  &:hover {
    text-decoration: underline;
    transform: scale(1.02);
    filter: brightness(1.1);
  }
  
  &:active {
    transform: scale(0.98);
  }
}

.hours-info {
  .hours-item {
    padding: 4px 0;
    font-size: 14px;
  }
}

.response-timeline {
  display: flex;
  flex-direction: column;
  gap: 32px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
  
  .timeline-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
    
    @media (max-width: 767px) {
      flex-direction: row;
      text-align: left;
      gap: 16px;
    }
    
    .timeline-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: rgba(15, 118, 110, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
      
      @media (max-width: 767px) {
        width: 60px;
        height: 60px;
        margin-bottom: 0;
        flex-shrink: 0;
      }
    }
    
    .timeline-content {
      h4 {
        margin-bottom: 8px;
      }
    }
  }
}
</style>
