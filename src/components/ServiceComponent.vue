<template>
  <q-page>
    <!-- HERO SECTION WITH IMAGE BACKGROUND -->
    <section class="service-hero">
      <div class="hero-background" :style="{ backgroundImage: `url(${headerImage})` }">
        <div class="hero-overlay">
          <div class="container">
            <div class="hero-content text-center text-white">
              <h1 class="hero-title text-h3 text-weight-bold q-mb-md">
                {{ pageTitle }}
              </h1>
              <p class="hero-subtitle text-h6 opacity-90 q-mb-lg">
                Servizi professionali di pulizia a Genova
              </p>
              <div class="hero-divider"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MAIN CONTENT SECTION -->
    <section class="section">
      <div class="container">
        <div class="row q-col-gutter-xl">
          <!-- Content Column -->
          <div class="col-12">
            <!-- Service Description -->
            <div class="service-content">
              <div v-for="(section, index) in sections" :key="section.id || index" class="content-section q-mb-lg">
                <div class="itl-card q-pa-lg">
                  <p class="text-body1 text-grey-8 text-balance">
                    {{ section.content }}
                  </p>
                </div>
              </div>

              <!-- Services List -->
              <div v-if="servicesList && servicesList.length" class="services-list-section q-mb-xl">
                <div class="itl-card">
                  <div class="q-pa-lg">
                    <h2 class="text-h5 text-weight-bold text-primary q-mb-lg">
                      {{ servicesListHeader || 'I nostri servizi includono:' }}
                    </h2>
                    
                    <q-list>
                      <q-item
                        v-for="(service, index) in servicesList" 
                        :key="index"
                        class="service-list-item"
                      >
                        <q-item-section avatar>
                          <q-icon name="check_circle" color="positive" size="sm" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label class="text-body1">{{ service }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>
                </div>
              </div>

              <!-- Additional Information -->
              <div v-if="additionalInfo" class="additional-info q-mb-xl">
                <div class="itl-card q-pa-lg">
                  <p class="text-body1 text-grey-8 text-balance">
                    {{ additionalInfo }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT FORM SECTION -->
    <section class="section bg-white">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">
            {{ contactHeader || 'Richiedi un preventivo personalizzato' }}
          </h2>
          <p class="section-subtitle">
            Compila il modulo sottostante e ti contatteremo entro 24 ore
          </p>
        </div>
        
        <div class="row justify-center">
          <div class="col-12 col-md-8 col-lg-6">
            <CatchingClientComponent />
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT INFO SECTION -->
    <section class="section bg-grey-1">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="section-title">Contatti e Informazioni</h2>
          <p class="section-subtitle">
            I nostri contatti diretti e i motivi per scegliere i nostri servizi
          </p>
        </div>
        
        <div class="row q-col-gutter-xl">
          <!-- Contact Info -->
          <div class="col-12 col-lg-6">
            <div class="itl-card">
              <div class="q-pa-lg text-center">
                <h3 class="text-h6 text-weight-bold text-primary q-mb-lg">
                  Contatti diretti
                </h3>
                <div class="row justify-center q-col-gutter-md">
                  <div class="col-12 col-sm-4">
                    <div class="contact-item q-pa-md">
                      <q-icon name="phone" color="primary" size="lg" class="q-mb-sm" />
                      <div class="text-body2 text-weight-medium">+39 335 126 7227</div>
                      <div class="text-caption text-grey-6">Chiamaci ora</div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="contact-item q-pa-md">
                      <q-icon name="email" color="primary" size="lg" class="q-mb-sm" />
                      <div class="text-body2 text-weight-medium">itl.sas@virgilio.it</div>
                      <div class="text-caption text-grey-6">Inviaci una mail</div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="contact-item q-pa-md">
                      <q-icon name="schedule" color="primary" size="lg" class="q-mb-sm" />
                      <div class="text-body2 text-weight-medium">Lun-Ven 8:00-18:00</div>
                      <div class="text-caption text-grey-6">Orari di ufficio</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Benefits -->
          <div class="col-12 col-lg-6">
            <div class="itl-card">
              <div class="q-pa-lg text-center">
                <h3 class="text-h6 text-weight-bold text-primary q-mb-lg">
                  Perché sceglierci
                </h3>
                <div class="benefits-showcase">
                  <div class="row q-col-gutter-sm justify-center">
                    <div class="col-6 col-sm-3">
                      <div class="benefit-badge">
                        <q-icon name="verified" size="xl" color="positive" class="q-mb-xs" />
                        <div class="text-caption text-weight-medium text-center">Professionalità<br>garantita</div>
                      </div>
                    </div>
                    <div class="col-6 col-sm-3">
                      <div class="benefit-badge">
                        <q-icon name="eco" size="xl" color="positive" class="q-mb-xs" />
                        <div class="text-caption text-weight-medium text-center">Prodotti<br>ecologici</div>
                      </div>
                    </div>
                    <div class="col-6 col-sm-3">
                      <div class="benefit-badge">
                        <q-icon name="schedule" size="xl" color="positive" class="q-mb-xs" />
                        <div class="text-caption text-weight-medium text-center">Puntualità<br>assicurata</div>
                      </div>
                    </div>
                    <div class="col-6 col-sm-3">
                      <div class="benefit-badge">
                        <q-icon name="price_check" size="xl" color="positive" class="q-mb-xs" />
                        <div class="text-caption text-weight-medium text-center">Prezzi<br>competitivi</div>
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
  </q-page>
</template>

<script>
import CatchingClientComponent from "src/components/CatchingClientComponent.vue";

export default {
  name: "ServiceComponent",
  components: {
    CatchingClientComponent
  },
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    headerImage: {
      type: String,
      required: true
    },
    sections: {
      type: Array,
      default: () => []
    },
    servicesListHeader: {
      type: String,
      default: "I nostri servizi includono:"
    },
    servicesList: {
      type: Array,
      default: () => []
    },
    additionalInfo: {
      type: String,
      default: ""
    },
    contactHeader: {
      type: String,
      default: "Richiedi un preventivo gratuito"
    }
  }
};
</script>

<style lang="scss" scoped>

.contact-item {
  text-align: center;
  
  @media (max-width: 599px) {
    text-align: center;
    
    .q-icon {
      display: block;
      margin: 0 auto 8px auto;
    }
    
    .text-body2 {
      font-size: 0.9rem;
      line-height: 1.2;
      margin-bottom: 4px;
    }
    
    .text-caption {
      font-size: 0.75rem;
      margin-top: 4px;
    }
  }
}

.benefits-showcase {
  .benefit-badge {
    padding: 1rem 0.5rem;
    text-align: center;
    transition: all 0.3s ease;
    border-radius: 12px;
    
    &:hover {
      background: rgba(16, 185, 129, 0.08);
      transform: translateY(-2px);
    }
    
    .q-icon {
      display: block;
      margin: 0 auto 8px auto;
    }
    
    .text-caption {
      line-height: 1.3;
      font-size: 0.75rem;
      
      @media (min-width: 600px) {
        font-size: 0.8rem;
      }
    }
  }
}

.service-hero {
  position: relative;
  
  .hero-background {
    height: 280px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    
    @media (max-width: 767px) {
      height: 220px;
    }
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg, 
      rgba(15, 118, 110, 0.55) 0%, 
      rgba(13, 148, 136, 0.45) 50%,
      rgba(15, 118, 110, 0.65) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hero-content {
    z-index: 2;
    animation: fadeInUp 0.8s ease-out;
    
    .hero-title {
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      
      @media (max-width: 767px) {
        font-size: 2rem;
      }
    }
    
    .hero-subtitle {
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      max-width: 600px;
      margin: 0 auto;
      
      @media (max-width: 767px) {
        font-size: 1.1rem;
      }
    }
    
    .hero-divider {
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
      margin: 0 auto;
      border-radius: 2px;
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-section {
  .itl-card {
    position: relative;
    background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
    border: 1px solid rgba(15, 118, 110, 0.1);
    border-left: 4px solid #0F766E;
    transition: all 0.3s ease;
    
    &:hover {
      border-left-color: #0D9488;
      box-shadow: 0 8px 25px rgba(15, 118, 110, 0.1);
    }
    
    .q-pa-lg {
      padding: 2rem !important;
      
      @media (max-width: 767px) {
        padding: 1.5rem !important;
      }
    }
    
    p {
      line-height: 1.8;
      margin: 0;
      font-size: 1.1rem;
      color: #374151;
      text-align: justify;
      
      @media (max-width: 767px) {
        font-size: 1rem;
        text-align: left;
      }
      
      &::first-letter {
        font-size: 1.3em;
        font-weight: 600;
        color: #0F766E;
        float: left;
        line-height: 1;
        margin-right: 4px;
        margin-top: 2px;
      }
    }
  }
}

.services-list-section {
  .itl-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border: 1px solid rgba(15, 118, 110, 0.1);
    border-top: 4px solid #0F766E;
    
    .q-pa-lg {
      padding: 2rem !important;
      
      @media (max-width: 767px) {
        padding: 1.5rem !important;
      }
    }
    
    h2 {
      color: #1F2937;
      margin-bottom: 2rem;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #0F766E, #0D9488);
        border-radius: 2px;
      }
    }
    
    .q-list {
      padding: 0;
    }
    
    .q-item {
      padding: 1rem 0;
      border-bottom: 1px solid rgba(15, 118, 110, 0.05);
      
      &:last-child {
        border-bottom: none;
      }
      
      &:hover {
        background: rgba(15, 118, 110, 0.03);
        border-radius: 8px;
        margin: 0 -1rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      
      .q-item-section {
        &.q-item-section--avatar {
          min-width: 40px;
        }
      }
      
      .q-item-label {
        font-size: 1.05rem;
        font-weight: 500;
        color: #374151;
        line-height: 1.6;
      }
      
      .q-icon {
        font-size: 1.2rem;
      }
    }
  }
}

.additional-info {
  .itl-card {
    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
    border: 1px solid rgba(15, 118, 110, 0.1);
    border-right: 4px solid #0F766E;
    position: relative;
    
    &::before {
      content: '"';
      position: absolute;
      top: 1rem;
      right: 1.5rem;
      font-size: 4rem;
      color: rgba(15, 118, 110, 0.08);
      font-family: Georgia, serif;
      line-height: 1;
    }
    
    .q-pa-lg {
      padding: 2rem 2.5rem 2rem 2rem !important;
      
      @media (max-width: 767px) {
        padding: 1.5rem !important;
      }
    }
    
    p {
      line-height: 1.8;
      margin: 0;
      font-size: 1.1rem;
      color: #4B5563;
      text-align: justify;
      font-style: italic;
      position: relative;
      z-index: 2;
      
      @media (max-width: 767px) {
        font-size: 1rem;
        text-align: left;
      }
    }
  }
}
</style>
