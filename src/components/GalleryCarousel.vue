<!-- Modern responsive image carousel -->
<template>
  <div class="itl-gallery-carousel">
    <q-carousel 
      v-model="slide" 
      :autoplay="autoplay ? 4000 : false"
      swipeable 
      animated
      arrows
      navigation
      infinite
      class="gallery-carousel rounded-borders"
      :height="carouselHeight"
    >
      <q-carousel-slide 
        :name="1" 
        img-src="/images/carousel/genova.jpg"
        class="gallery-slide"
      >
        <div class="slide-overlay">
          <div class="slide-content">
            <h3 class="slide-title text-white text-weight-bold">
              Genova e Provincia
            </h3>
            <p class="slide-subtitle text-white opacity-90">
              Operiamo in tutta la zona metropolitana
            </p>
          </div>
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide 
        :name="2" 
        img-src="/images/office/material.jpg"
        class="gallery-slide"
      >
        <div class="slide-overlay">
          <div class="slide-content">
            <h3 class="slide-title text-white text-weight-bold">
              Attrezzature Professionali
            </h3>
            <p class="slide-subtitle text-white opacity-90">
              Utilizziamo i migliori strumenti del settore
            </p>
          </div>
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide 
        :name="3" 
        img-src="/images/services/sanficazione.jpg"
        class="gallery-slide"
      >
        <div class="slide-overlay">
          <div class="slide-content">
            <h3 class="slide-title text-white text-weight-bold">
              Sanificazione Professionale
            </h3>
            <p class="slide-subtitle text-white opacity-90">
              Trattamenti specializzati per ogni ambiente
            </p>
          </div>
        </div>
      </q-carousel-slide>
      
      <q-carousel-slide 
        :name="4" 
        img-src="/images/services/condominio.jpeg"
        class="gallery-slide"
      >
        <div class="slide-overlay">
          <div class="slide-content">
            <h3 class="slide-title text-white text-weight-bold">
              Pulizie Condominiali
            </h3>
            <p class="slide-subtitle text-white opacity-90">
              Manteniamo pulite le aree comuni
            </p>
          </div>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <!-- Optional autoplay toggle (hidden on mobile) -->
        <q-carousel-control 
          position="top-right" 
          :offset="[18, 18]" 
          class="gt-xs"
        >
          <q-chip 
            :color="autoplay ? 'positive' : 'grey'"
            text-color="white"
            icon="play_arrow"
            clickable
            @click="autoplay = !autoplay"
            class="autoplay-chip"
          >
            Auto
          </q-chip>
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useQuasar } from 'quasar';

export default {
  name: "GalleryCarousel",
  setup() {
    const $q = useQuasar();
    
    const slide = ref(1);
    const autoplay = ref(true);
    
    // Responsive height
    const carouselHeight = computed(() => {
      if ($q.screen.xs) return '320px';
      if ($q.screen.sm) return '400px';
      if ($q.screen.md) return '480px';
      return '520px';
    });

    return {
      slide,
      autoplay,
      carouselHeight,
    };
  },
};
</script>

<style lang="scss" scoped>
.itl-gallery-carousel {
  width: 100%;
  
  .gallery-carousel {
    width: 100%;
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    overflow: hidden;
    
    .gallery-slide {
      position: relative;
      background-size: cover;
      background-position: center;
      
      .slide-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          135deg, 
          transparent 0%, 
          rgba(0, 0, 0, 0.3) 50%,
          rgba(15, 118, 110, 0.6) 100%
        );
        display: flex;
        align-items: flex-end;
        padding: 32px;
        
        @media (max-width: 767px) {
          padding: 20px;
        }
      }
      
      .slide-content {
        .slide-title {
          font-size: 1.5rem;
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          
          @media (max-width: 767px) {
            font-size: 1.25rem;
          }
        }
        
        .slide-subtitle {
          font-size: 1rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          
          @media (max-width: 767px) {
            font-size: 0.9rem;
          }
        }
      }
    }
    
    // Custom navigation styling
    .carousel-controls {
      .control-btn {
        backdrop-filter: blur(8px);
        box-shadow: var(--shadow-hover);
        
        &:hover {
          transform: scale(1.05);
          box-shadow: var(--shadow-strong);
        }
      }
    }
    
    .autoplay-chip {
      backdrop-filter: blur(8px);
      font-size: 11px;
      height: 28px;
    }
    
    // Custom navigation dots
    .q-carousel__navigation {
      .q-btn {
        background-color: rgba(255, 255, 255, 0.5);
        
        &.q-carousel__navigation--active {
          background-color: white;
        }
      }
    }
  }
}
</style>
