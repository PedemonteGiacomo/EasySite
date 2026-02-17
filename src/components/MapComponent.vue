<template>
  <div class="map-container">
    <div class="map-wrapper itl-card">
      <div class="map-header q-pa-md bg-grey-1">
        <div class="row items-center q-gutter-sm">
          <q-icon name="location_on" color="primary" size="sm" />
          <div>
            <div class="text-subtitle2 text-weight-medium">La nostra sede</div>
            <div class="text-caption text-grey-7">{{ address }}</div>
          </div>
        </div>
      </div>
      
      <div class="responsive-iframe">
        <iframe 
          :src="mapUrl" 
          frameborder="0" 
          style="border:0;" 
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
          loading="lazy"
          :title="`Mappa di ${address}`"
        ></iframe>
      </div>
      
      <!-- Fallback for when iframe doesn't load -->
      <div class="map-fallback q-pa-lg text-center" v-if="showFallback">
        <q-icon name="map" size="xl" color="grey-5" class="q-mb-md" />
        <div class="text-h6 text-weight-medium q-mb-sm">Visualizza sulla mappa</div>
        <div class="text-body2 text-grey-7 q-mb-md">{{ address }}</div>
        <q-btn 
          :href="fallbackMapUrl"
          target="_blank"
          label="Apri in Google Maps"
          icon="open_in_new"
          class="itl-btn-primary"
          no-caps
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  props: {
    address: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showFallback: false
    };
  },
  computed: {
    mapUrl() {
      // Use Google Maps embed for specific address
      const formattedAddress = encodeURIComponent(this.address);
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.2147462537447!2d8.931385476518033!3d44.405474971103186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343f4c5a7c2e5%3A0x7f8b7e8b7e8b7e8b!2sVia%20Archimede%2C%2058%2C%2016142%20Genova%20GE!5e0!3m2!1sit!2sit!4v1708185600000!5m2!1sit!2sit`;
    },
    fallbackMapUrl() {
      const formattedAddress = encodeURIComponent(this.address);
      return `https://www.google.com/maps/search/${formattedAddress}`;
    }
  },
  mounted() {
    // Simple fallback detection
    setTimeout(() => {
      const iframe = this.$el.querySelector('iframe');
      if (iframe && !iframe.src.includes('google')) {
        this.showFallback = true;
      }
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.map-container {
  max-width: 800px;
  margin: 0 auto;
}

.map-wrapper {
  overflow: hidden;
  margin-bottom: 0;
}

.map-header {
  border-bottom: 1px solid #E5E7EB;
}

.responsive-iframe {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.map-fallback {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F9FAFB;
}
</style>
