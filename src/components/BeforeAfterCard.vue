<template>
  <div class="before-after-card itl-card">
    <div class="card-header q-pa-md text-center">
      <h3 class="text-h6 text-weight-bold text-primary">Prima e Dopo</h3>
      <p class="text-caption text-grey-7">Risultati del nostro lavoro</p>
    </div>
    
    <div class="comparison-container">
      <div class="image-side before-side">
        <div class="image-label">
          <q-chip 
            :label="beforeText" 
            color="negative"
            text-color="white"
            size="sm"
            class="absolute-top-left q-ma-sm"
          />
        </div>
        <q-img 
          :src="beforeImage" 
          class="comparison-image"
          fit="cover"
          loading="lazy"
        >
          <template v-slot:error>
            <div class="absolute-full flex flex-center bg-grey-3 text-grey-7">
              <q-icon name="image_not_supported" size="lg" />
            </div>
          </template>
        </q-img>
      </div>

      <div class="divider">
        <q-icon name="arrow_forward" size="md" color="primary" class="bg-white rounded-borders q-pa-xs shadow-2" />
      </div>

      <div class="image-side after-side">
        <div class="image-label">
          <q-chip 
            :label="afterText" 
            color="positive"
            text-color="white"
            size="sm"
            class="absolute-top-right q-ma-sm"
          />
        </div>
        <q-img 
          :src="afterImage" 
          class="comparison-image"
          fit="cover"
          loading="lazy"
        >
          <template v-slot:error>
            <div class="absolute-full flex flex-center bg-grey-3 text-grey-7">
              <q-icon name="image_not_supported" size="lg" />
            </div>
          </template>
        </q-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeforeAfterCard",
  props: {
    beforeText: {
      type: String,
      default: "Prima"
    },
    beforeImage: {
      type: String,
      required: true
    },
    afterText: {
      type: String,
      default: "Dopo"
    },
    afterImage: {
      type: String,
      required: true
    },
    // Keep cardHeight for backwards compatibility but use responsive height
    cardHeight: {
      type: Number,
      default: 280
    }
  }
};
</script>

<style lang="scss" scoped>
.before-after-card {
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-strong);
    
    @media (max-width: 767px) {
      transform: none; // Disable hover effects on mobile
    }
  }
  
  .card-header {
    background: linear-gradient(135deg, #F7FAFC 0%, #EDF2F7 100%);
    border-bottom: 1px solid #E5E7EB;
  }
}

.comparison-container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 280px;
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 16px;
    padding: 16px;
  }
}

.image-side {
  position: relative;
  height: 280px;
  
  @media (max-width: 767px) {
    height: 200px;
  }
  
  .comparison-image {
    height: 100%;
    width: 100%;
  }
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  z-index: 2;
  
  @media (max-width: 767px) {
    padding: 8px 0;
    
    .q-icon {
      transform: rotate(90deg);
    }
  }
}

// Enhance chip styling
.q-chip {
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
