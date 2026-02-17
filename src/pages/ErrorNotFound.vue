<template>
  <div class="error-page">
    <div class="container text-center">
      <div class="error-content">
        <!-- Error illustration -->
        <div class="error-icon q-mb-lg">
          <q-icon name="search_off" size="8rem" color="grey-4" />
        </div>
        
        <!-- Error message -->
        <h1 class="error-title text-h2 text-weight-bold text-grey-8 q-mb-md">
          Pagina non trovata
        </h1>
        <div class="error-code text-h1 text-weight-bold text-grey-5 q-mb-lg">
          404
        </div>
        
        <p class="error-description text-body1 text-grey-7 q-mb-xl">
          La pagina che stai cercando non esiste o è stata spostata.
          <br class="gt-xs" />
          Torna alla home page o contattaci se hai bisogno di aiuto.
        </p>
        
        <!-- Action buttons -->
        <div class="error-actions q-gutter-md">
          <router-link to="/">
            <q-btn
              label="Torna alla Home"
              icon="home"
              class="itl-btn-primary"
              size="lg"
              no-caps
            />
          </router-link>
          <router-link to="/contattaci">
            <q-btn
              label="Contattaci"
              icon="phone"
              class="itl-btn-secondary"
              size="lg"
              no-caps
            />
          </router-link>
        </div>
        
        <!-- Helpful links -->
        <div class="helpful-links q-mt-xl">
          <div class="text-body2 text-grey-6 q-mb-md">Pagine utili:</div>
          <div class="links-grid">
            <router-link to="/servizi/pulizie-domestiche" class="helpful-link">
              <q-btn flat no-caps label="Servizi di Pulizia" class="itl-btn-text" />
            </router-link>
            <router-link to="/about" class="helpful-link">
              <q-btn flat no-caps label="Chi Siamo" class="itl-btn-text" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useMeta } from 'quasar';

// SEO metadata
const metaData = {
  title: 'Pagina non trovata - 404',
  titleTemplate: title => `${title} - ITL Genova`,
  meta: {
    description: { name: 'description', content: 'Pagina non trovata. Torna alla home page di ITL Impresa di Pulizie Genova.' },
  }
}

export default defineComponent({
  name: "ErrorNotFound",
  setup() {
    useMeta(metaData);
  },
});
</script>

<style lang="scss" scoped>
.error-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #F7FAFC 0%, #EDF2F7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}

.error-content {
  max-width: 600px;
  
  .error-title {
    @media (max-width: 767px) {
      font-size: 1.75rem;
    }
  }
  
  .error-code {
    font-size: 6rem;
    line-height: 1;
    opacity: 0.6;
    
    @media (max-width: 767px) {
      font-size: 4rem;
    }
  }
  
  .error-actions {
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      
      .q-btn {
        width: 100%;
        max-width: 280px;
      }
    }
  }
  
  .helpful-links {
    .links-grid {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
      
      .helpful-link {
        text-decoration: none;
      }
    }
  }
}
</style>
