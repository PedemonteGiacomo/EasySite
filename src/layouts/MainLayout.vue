<template>
  <q-layout view="hhh LpR fFf">
    <!-- Modern header -->
    <ToolbarComponent />

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Floating contact button (replaces ContactTollbarComponent) -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn 
        fab 
        icon="phone" 
        class="itl-btn-primary"
        size="lg"
        @click="callLuciano"
      >
        <q-tooltip class="bg-primary text-white" anchor="center left" self="center right">
          Chiama Luciano
        </q-tooltip>
      </q-btn>
    </q-page-sticky>

    <!-- Modern footer in normal flow -->
    <footer class="modern-footer">
      <div class="footer-main bg-white">
        <div class="container">
          <div class="q-py-xl">
            <div class="row q-col-gutter-xl items-start">
              <!-- Logo and company info -->
              <div class="col-12 col-sm-3 text-center">
                <router-link to="/" class="router-link-no-style">
                  <q-avatar square size="100px" class="q-mb-lg footer-logo" style="width: 140px;">
                    <img src="icons/ITL_Logo.png" alt="ITL Logo" />
                  </q-avatar>
                </router-link>
                <div class="text-h5 text-weight-bold text-primary q-mb-sm">Impresa di Pulizie Genova</div>
                <div class="text-body1 text-grey-7 q-mb-md">Dal 1984 a Genova</div>
              </div>
              
              <!-- Contact info -->
              <div class="col-12 col-sm-3">
                <div class="text-h6 text-weight-bold q-mb-lg text-primary">Contatti Diretti</div>
                <div class="contact-list q-gutter-md">
                  <div class="contact-item">
                    <q-icon name="location_on" color="primary" size="sm" class="contact-icon" />
                    <div class="contact-details">
                      <div class="text-body2 text-weight-medium text-grey-8">Indirizzo</div>
                      <div class="text-body2 text-grey-7">Via Archimede 58r, Genova</div>
                    </div>
                  </div>
                  
                  <div class="contact-item">
                    <q-icon name="phone" color="primary" size="sm" class="contact-icon" />
                    <div class="contact-details">
                      <div class="text-body2 text-weight-medium text-grey-8">Telefoni</div>
                      <a href="tel:+393351267227" class="footer-link">Luciano: +39 335 126 7227</a>
                      <a href="tel:+393896405346" class="footer-link">Federico: +39 389 640 5346</a>
                      <a href="tel:+393772766580" class="footer-link">Filippo: +39 377 276 6580</a>
                    </div>
                  </div>
                  
                  <div class="contact-item">
                    <q-icon name="email" color="primary" size="sm" class="contact-icon" />
                    <div class="contact-details">
                      <div class="text-body2 text-weight-medium text-grey-8">Email</div>
                      <a href="mailto:itl.sas@virgilio.it" class="footer-link">itl.sas@virgilio.it</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Services links -->
              <div class="col-12 col-sm-3">
                <div class="text-h6 text-weight-bold q-mb-lg text-primary">I Nostri Servizi</div>
                <div class="footer-links q-gutter-sm">
                  <router-link to="/servizi" class="footer-nav-link">Panoramica Servizi</router-link>
                  <router-link to="/servizi/pulizie-domestiche" class="footer-nav-link">Pulizie Appartamenti</router-link>
                  <router-link to="/servizi/pulizie-uffici" class="footer-nav-link">Pulizie Uffici</router-link>
                  <router-link to="/servizi/pulizie-condomini" class="footer-nav-link">Pulizie Condomini</router-link>
                  <router-link to="/servizi/pulizie-cantiere" class="footer-nav-link">Pulizie Cantiere</router-link>
                  <router-link to="/servizi/sanificazioni" class="footer-nav-link">Sanificazioni</router-link>
                </div>
              </div>
              
              <!-- Company links -->
              <div class="col-12 col-sm-3">
                <div class="text-h6 text-weight-bold q-mb-lg text-primary">Azienda</div>
                <div class="footer-links q-gutter-sm q-mb-lg">
                  <router-link to="/" class="footer-nav-link">Home</router-link>
                  <router-link to="/about" class="footer-nav-link">Chi Siamo</router-link>
                  <router-link to="/contattaci" class="footer-nav-link">Contatti</router-link>
                  <router-link to="/privacy_policy" class="footer-nav-link">Privacy Policy</router-link>
                </div>
                
                <!-- <div class="text-h6 text-weight-bold q-mb-md text-primary">Orari</div>
                <div class="contact-item" style="align-items: flex-start;">
                  <q-icon name="schedule" color="primary" size="sm" class="contact-icon" />
                  <div class="contact-details">
                    <div class="text-body2 text-grey-7">Lun-Ven: 8:00-18:00</div>
                    <div class="text-body2 text-grey-6">Weekend: Su appuntamento</div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Copyright bar -->
      <div class="footer-bottom">
        <div class="container">
          <div class="row items-center justify-between q-py-md">
            <div class="col-12 col-md-auto text-center">
              <div class="text-body2 text-white">
                © 2026 ITL s.r.l. - Impresa di Pulizie Genova
              </div>
            </div>
            <div class="col-12 col-md-auto text-center q-mt-sm">
              <div class="text-body2 text-white opacity-80">
                Sito realizzato da <a href="https://portfolio-d52a5.web.app/" target="_blank" class="portfolio-link">Giacomo Pedemonte</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script>
import ToolbarComponent from "../components/ToolbarComponent.vue";
import { ref } from 'vue';

export default {
  components: {
    ToolbarComponent,
  },
  name: "MainLayout",
  methods: {
    callLuciano() {
      window.location.href = 'tel:+393351267227';
    }
  }
};
</script>

<style scoped>
.router-link-no-style {
  text-decoration: none;
  color: inherit;
}

.router-link-clean {
  text-decoration: none;
  color: #6B7280;
  font-size: 14px;
  padding: 4px 0;
  transition: color 0.2s ease;
}

.router-link-clean:hover {
  color: #0F766E;
}

.border-t {
  border-top: 1px solid #E5E7EB;
}

/* Modern Footer Styles */
.modern-footer {
  margin-top: auto;
}

.footer-main {
  border-top: 3px solid var(--primary);
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.footer-logo {
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.footer-logo:hover {
  transform: scale(1.05);
}

.contact-list {
  display: flex;
  flex-direction: column;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
}

.contact-icon {
  margin-top: 2px;
  flex-shrink: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.footer-link {
  color: #4B5563;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.4;
  transition: all 0.2s ease;
  display: block;
  
  &:hover {
    color: var(--primary);
    text-decoration: underline;
    transform: translateX(4px);
  }
  
  &:active {
    transform: translateX(2px);
  }
}

.footer-links {
  display: flex;
  flex-direction: column;
}

.footer-nav-link {
  color: #6B7280;
  text-decoration: none;
  font-size: 14px;
  padding: 6px 0;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    color: var(--primary);
    padding-left: 8px;
  }
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover:before {
    width: 4px;
  }
}

.footer-bottom {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  
  @media (max-width: 767px) {
    .col-md-auto:first-child {
      margin-bottom: 8px;
    }
    
    .col-md-auto:last-child {
      margin-top: 0 !important;
    }
  }
}

.portfolio-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  border-bottom: 1px dotted rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease;
  
  &:hover {
    color: white;
    border-bottom: 1px solid white;
    transform: scale(1.02);
  }
}
</style>
