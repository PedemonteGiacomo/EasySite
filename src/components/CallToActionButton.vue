<template>
  <div :class="['cta-section', { 'bg-white': whiteBackground }]">
    <div class="container">
      <div class="cta-content text-center">
        <!-- Optional title -->
        <div v-if="title" class="cta-title text-h4 text-weight-bold text-primary q-mb-md">
          {{ title }}
        </div>
        
        <!-- Optional subtitle -->
        <div v-if="subtitle" class="cta-subtitle text-body1 text-grey-7 q-mb-md">
          {{ subtitle }}
        </div>
        
        <!-- Main CTA button -->
        <router-link :to="buttonLink" class="cta-link">
          <q-btn 
            :label="buttonLabel"
            :icon="buttonIcon"
            :class="ctaButtonClass"
            :size="buttonSize"
            no-caps
          />
        </router-link>
        
        <!-- Optional secondary action -->
        <div v-if="showSecondary" class="cta-secondary q-mt-md">
          <router-link to="/servizi">
            <q-btn 
              label="Scopri i nostri servizi"
              icon="arrow_forward"
              class="itl-btn-text"
              no-caps
            />
          </router-link>
        </div>
        
        <!-- Trust indicators -->
        <div class="cta-features q-mt-lg">
          <div class="row justify-center q-gutter-lg">
            <div class="feature-item">
              <q-icon name="schedule" size="sm" color="positive" />
              <span class="text-caption text-grey-7">Risposta rapida</span>
            </div>
            <div class="feature-item">
              <q-icon name="verified" size="sm" color="positive" />
              <span class="text-caption text-grey-7">Preventivo gratuito</span>
            </div>
            <div class="feature-item">
              <q-icon name="phone" size="sm" color="positive" />
              <span class="text-caption text-grey-7">Consulenza telefonica</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallToActionButton",
  props: {
    // Legacy props for backward compatibility
    intersectionKey: {
      type: String,
      default: "cta"
    },
    buttonLabel: {
      type: String,
      required: true
    },
    buttonIcon: {
      type: String,
      default: "phone"
    },
    buttonLink: {
      type: String,
      required: true
    },
    
    // New modern props
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "primary",
      validator: (val) => ['primary', 'secondary', 'accent'].includes(val)
    },
    size: {
      type: String,
      default: "large",
      validator: (val) => ['medium', 'large', 'xl'].includes(val)
    },
    showSecondary: {
      type: Boolean,
      default: false
    },
    whiteBackground: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ctaButtonClass() {
      const variants = {
        primary: 'itl-btn-primary',
        secondary: 'itl-btn-secondary', 
        accent: 'itl-btn-primary' // Accent uses same style as primary
      };
      return variants[this.variant];
    },
    buttonSize() {
      return this.size === 'xl' ? 'xl' : 'lg';
    }
  }
};
</script>

<style lang="scss" scoped>
.cta-section {
  padding: 40px 0;
  
  &.bg-white {
    background-color: white;
    box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
  }
  
  @media (min-width: 768px) {
    padding: 56px 0;
  }
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-link {
  text-decoration: none;
  display: inline-block;
  
  .q-btn {
    min-width: 280px;
    padding: 16px 32px;
    
    @media (max-width: 767px) {
      min-width: 240px;
      width: 100%;
      max-width: 320px;
    }
  }
}

.cta-secondary {
  @media (max-width: 767px) {
    .q-btn {
      width: 100%;
      max-width: 280px;
    }
  }
}

.cta-features {
  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;
    min-width: 120px;
    
    @media (max-width: 767px) {
      min-width: 80px;
      
      .text-caption {
        font-size: 11px;
      }
    }
  }
}
</style>
