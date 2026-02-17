<template>
  <section class="section">
    <div class="container">
      <div class="text-center q-mb-xl">
        <h2 class="section-title">I Nostri Numeri</h2>
        <p class="section-subtitle">
          Oltre 40 anni di successi ed eccellenza nel settore
        </p>
      </div>
      
      <div class="row q-col-gutter-lg justify-center">
        <div class="col-12 col-sm-6 col-lg-4" v-for="(stat, index) in statistics" :key="index">
          <div class="itl-card text-center q-pa-xl stats-card">
            <div class="stat-icon q-mb-lg">
              <q-icon :name="stat.icon" size="3rem" :color="stat.color" />
            </div>
            <div class="stat-number text-primary text-weight-bold q-mb-sm">
              {{ stat.value }}
            </div>
            <div class="text-h6 text-weight-medium text-grey-8 q-mb-md">
              {{ stat.label }}
            </div>
            <p class="text-body2 text-grey-7 q-ma-none">
              {{ stat.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatisticsSection',
  data() {
    return {
      statistics: [
        {
          value: '40+',
          label: 'Anni di esperienza',
          description: 'Dal 1984 leader nel settore',
          icon: 'stars',
          color: 'accent'
        },
        {
          value: '500+',
          label: 'Clienti soddisfatti',
          description: 'Fiducia costruita giorno dopo giorno',
          icon: 'people',
          color: 'secondary'
        },
        {
          value: '100%',
          label: 'Prodotti ecologici',
          description: 'Rispetto per ambiente e salute',
          icon: 'eco',
          color: 'positive'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.stats-card {
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
    
    .stat-icon .q-icon {
      transform: scale(1.1);
    }
  }
}

.stat-icon {
  transition: all 0.3s ease;
  
  .q-icon {
    transition: transform 0.3s ease;
  }
}

.stat-number {
  font-size: 3rem;
  line-height: 1;
  
  @media (max-width: 767px) {
    font-size: 2.5rem;
  }
}

// Staggered animation on load
.stats-card {
  animation: slideInUp 0.6s ease-out backwards;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
}

@keyframes slideInUp {
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