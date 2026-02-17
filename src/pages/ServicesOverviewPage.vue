<template>
  <q-page class="bg-grey-1">
    <!-- HERO SECTION -->
    <section class="section hero-section">
      <div class="container text-center">
        <h1 class="hero-title text-h2 text-weight-bold q-mb-lg">
          I Nostri Servizi
        </h1>
        <p class="hero-subtitle text-h5 text-grey-7 q-mb-none">
          Soluzioni complete di pulizia professionale per ogni esigenza
        </p>
      </div>
    </section>

    <!-- SERVICES GRID SECTION -->
    <section class="section bg-white">
      <div class="container">        
        <div class="row q-col-gutter-xl">
          <div 
            v-for="service in services" 
            :key="service.id"
            class="col-12 col-md-6 col-lg-4"
          >
            <div class="service-card itl-card">
              <div class="service-image">
                <img :src="service.image" :alt="service.title" />
                <div class="service-overlay">
                  <q-icon :name="service.icon" size="3rem" color="white" />
                </div>
              </div>
              
              <div class="service-content q-pa-lg">
                <h3 class="service-title text-h6 text-weight-bold text-primary q-mb-sm">
                  {{ service.title }}
                </h3>
                <p class="service-description text-body2 text-grey-7 q-mb-md">
                  {{ service.description }}
                </p>
                
                <div class="service-features q-mb-lg">
                  <div 
                    v-for="feature in service.features" 
                    :key="feature"
                    class="feature-item q-mb-xs"
                  >
                    <q-icon name="check_circle" size="sm" color="positive" class="q-mr-xs" />
                    <span class="text-caption">{{ feature }}</span>
                  </div>
                </div>
                
                <router-link :to="service.link" class="service-link">
                  <q-btn 
                    label="Scopri di più"
                    icon="arrow_forward"
                    class="itl-btn-primary full-width"
                    no-caps
                  />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="section bg-grey-1">
      <div class="container text-center">
        <h2 class="section-title">Hai bisogno di un servizio personalizzato?</h2>
        <p class="section-subtitle q-mb-lg">
          Contattaci per un preventivo gratuito e personalizzato
        </p>
        
        <div class="cta-buttons row justify-center q-gutter-lg">
          <div class="col-12 col-sm-auto">
            <router-link to="/contattaci">
              <q-btn 
                label="Richiedi preventivo"
                icon="request_quote"
                class="itl-btn-primary"
                size="lg"
                no-caps
              />
            </router-link>
          </div>
          <div class="col-12 col-sm-auto">
            <q-btn 
              label="Chiamaci ora"
              icon="phone"
              class="itl-btn-secondary"
              size="lg"
              no-caps
              @click="$q.dialog({
                title: 'Chiamaci ora',
                message: 'Contattaci al +39 335 126 7227',
                ok: 'Chiama',
                cancel: 'Chiudi'
              }).onOk(() => {
                window.open('tel:+393351267227');
              })"
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useMeta } from 'quasar';

// SEO metadata
const metaData = {
  title: 'Servizi di Pulizia - ITL Impresa di Pulizie',
  titleTemplate: title => `${title} - Genova`,
  meta: {
    description: { name: 'description', content: 'Scopri tutti i servizi di pulizia professionale di ITL a Genova: uffici, appartamenti, condomini, cantieri, sanificazioni e servizi specializzati.' },
    keywords: { name: 'keywords', content: 'servizi pulizie Genova, pulizie professionali, uffici, appartamenti, condomini, cantieri, sanificazioni' },
  }
}

export default defineComponent({
  name: "ServicesOverviewPage",
  setup() {
    useMeta(metaData);
    
    const services = [
      {
        id: 1,
        title: "Pulizie Uffici",
        description: "Servizi professionali per mantenere il tuo ambiente di lavoro pulito e ordinato.",
        icon: "business",
        image: "/images/services/uffici.jpeg",
        link: "/servizi/pulizie-uffici",
        features: [
          "Pulizia superfici e arredi",
          "Igienizzazione bagni",
          "Gestione rifiuti",
          "Pulizia vetrate"
        ]
      },
      {
        id: 2,
        title: "Pulizie Appartamenti",
        description: "Manteniamo il tuo spazio vitale pulito, confortevole e accogliente.",
        icon: "home",
        image: "/images/services/condominio.jpeg",
        link: "/servizi/pulizie-domestiche",
        features: [
          "Pulizia tutte le stanze",
          "Lucidatura pavimenti",
          "Pulizia finestre",
          "Igiene bagni e cucine"
        ]
      },
      {
        id: 3,
        title: "Pulizie Condomini",
        description: "Servizi per mantenere gli spazi comuni puliti e accoglienti per tutti.",
        icon: "apartment",
        image: "/images/services/condominio.jpeg",
        link: "/servizi/pulizie-condomini",
        features: [
          "Pulizia aree comuni",
          "Pulizia ascensori",
          "Manutenzione scale",
          "Gestione rifiuti"
        ]
      },
      {
        id: 4,
        title: "Pulizie Cantiere",
        description: "Pulizie post-costruzione e manutenzione di cantieri edili.",
        icon: "construction",
        image: "/images/services/cantiere.jpeg",
        link: "/servizi/pulizie-cantiere",
        features: [
          "Rimozione detriti",
          "Pulizia post-lavori",
          "Igienizzazione ambienti",
          "Smaltimento materiali"
        ]
      },
      {
        id: 5,
        title: "Servizi Specializzati",
        description: "Soluzioni personalizzate per esigenze specifiche e settori particolari.",
        icon: "engineering",
        image: "/images/services/pulizie_specializzate.jpeg", 
        link: "/servizi/pulizie-specializzate",
        features: [
          "Pulizie tecniche",
          "Settori specifici",
          "Soluzioni personalizzate",
          "Attrezzature specializzate"
        ]
      },
      {
        id: 6,
        title: "Sanificazioni",
        description: "Servizi di sanificazione per creare ambienti sicuri e igienici.",
        icon: "coronavirus",
        image: "/images/services/sanificazione2.jpeg",
        link: "/servizi/sanificazioni",
        features: [
          "Disinfezione profonda",
          "Ambienti critici",
          "Prodotti certificati",
          "Protocolli rigorosi"
        ]
      }
    ];

    return {
      services
    };
  }
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

.service-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 1px solid rgba(15, 118, 110, 0.1);
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(15, 118, 110, 0.15);
    border-color: rgba(15, 118, 110, 0.2);
    
    .service-image {
      .service-overlay {
        opacity: 0.9;
      }
      
      img {
        transform: scale(1.05);
      }
    }
  }
}

.service-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .service-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(15, 118, 110, 0.8), rgba(13, 148, 136, 0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
}

.service-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  
  .service-title {
    color: #1F2937;
  }
  
  .service-description {
    line-height: 1.6;
    flex-grow: 1;
  }
  
  .service-features {
    .feature-item {
      display: flex;
      align-items: flex-start;
      color: #4B5563;
      
      .q-icon {
        margin-top: 2px;
        flex-shrink: 0;
      }
    }
  }
  
  .service-link {
    margin-top: auto;
    text-decoration: none;
  }
}

.cta-buttons {
  @media (max-width: 599px) {
    .q-btn {
      width: 100%;
      max-width: 300px;
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
</style>