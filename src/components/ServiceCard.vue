<template>
  <div class="itl-card service-card">
    <q-card-section class="text-center q-pa-lg">
      <!-- Icon container -->
      <div class="icon-container q-mb-lg">
        <q-avatar size="80px" color="primary-1" class="shadow-2">
          <q-icon :name="iconName" size="40px" color="primary" />
        </q-avatar>
      </div>
      
      <!-- Content -->
      <div class="service-content">
        <h3 class="service-title text-h6 text-weight-bold q-mb-md text-dark">
          {{ title }}
        </h3>
        <p class="service-description text-body2 text-grey-7 text-balance">
          {{ description }}
        </p>
      </div>
    </q-card-section>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    iconName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.service-card {
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-strong);
    
    @media (max-width: 767px) {
      transform: none; // Disable hover effects on mobile
    }
    
    .icon-container .q-avatar {
      transform: scale(1.05);
      background-color: rgba(15, 118, 110, 0.15) !important;
    }
  }
  
  .icon-container {
    .q-avatar {
      transition: all 0.3s ease;
    }
  }
  
  .service-content {
    .service-title {
      line-height: 1.3;
    }
    
    .service-description {
      line-height: 1.6;
    }
  }
}
</style>
