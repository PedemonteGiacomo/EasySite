<template>
  <ServiceComponent
    :page-title="'Pulizie Specializzate'"
    :header-image="'/images/services/pulizie_specializzate.jpeg'"
    :sections="[
      { id: 'section1', content: 'I nostri servizi di pulizie specializzate sono progettati per affrontare sfide uniche e situazioni particolari. Sappiamo che ci sono momenti in cui è necessario un approccio specifico per ottenere risultati eccezionali.'},
      { id: 'section1', content: 'I nostri esperti addetti alle pulizie specializzate sono altamente qualificati e addestrati per utilizzare tecniche e prodotti specifici per affrontare situazioni complesse. Dalle macchie difficili alla rimozione di odori persistenti, siamo qui per aiutarti.'},
      { id: 'section1', content: 'I servizi di pulizie specializzate includono la rimozione di macchie ostinate, la pulizia di tappeti e moquette, la pulizia di ambienti contaminati, la rimozione di odori e molto altro. Personalizziamo i nostri servizi in base alle tue necessità.'}
    ]"
    :services-list-header="'I nostri servizi di pulizie specializzate includono:'"
    :services-list="[
      'Rimozione di macchie difficili',
      'Pulizia di tappeti e moquette',
      'Pulizia di ambienti contaminati',
      'Rimozione di odori persistenti',
      'Trattamenti specifici per materiali delicati'
    ]"
    :additional-info="'Sappiamo che ogni situazione richiede un approccio diverso. Il nostro team è impegnato a fornirti soluzioni efficaci e professionali per risolvere problemi specifici di pulizia. Contattaci oggi stesso per scoprire come i nostri servizi di pulizie specializzate possono contribuire a ottenere risultati eccezionali nei momenti in cui ne hai bisogno.'"
    :contact-header="'Contattaci subito!'"
  />
</template>

<script>
import ServiceComponent from 'src/components/ServiceComponent.vue';
import { useMeta } from 'quasar';

export default {
  components: {
    ServiceComponent,
  },
  setup() {
    useMeta({
      title: 'Pulizie Specializzate Genova | ITL Servizi Tecnici Avanzati dal 1984',
      meta: {
        description: {
          name: 'description',
          content: 'ITL offre servizi di pulizie specializzate a Genova. Rimozione macchie difficili, pulizia ambienti contaminati e trattamenti specifici con tecniche avanzate. Preventivo gratuito.'
        },
        keywords: {
          name: 'keywords',
          content: 'pulizie specializzate Genova, rimozione macchie Genova, pulizia tappeti Genova, ITL pulizie specializzate, servizi pulizia tecnica Genova'
        },
        // Open Graph
        'og:title': {
          property: 'og:title',
          content: 'Pulizie Specializzate Genova | ITL Servizi Tecnici Avanzati'
        },
        'og:description': {
          property: 'og:description',
          content: 'ITL offre servizi di pulizie specializzate a Genova. Rimozione macchie difficili e trattamenti specifici con tecniche avanzate dal 1984.'
        },
        'og:type': { property: 'og:type', content: 'website' },
        'og:site_name': { property: 'og:site_name', content: 'ITL Impresa di Pulizie' },
        // Twitter Cards
        'twitter:title': {
          name: 'twitter:title',
          content: 'Pulizie Specializzate Genova | ITL Servizi Tecnici Avanzati'
        },
        'twitter:description': {
          name: 'twitter:description',
          content: 'ITL offre servizi di pulizie specializzate a Genova. Rimozione macchie difficili e trattamenti specifici con tecniche avanzate.'
        }
      }
    });
  }
};
</script>

<style lang="sass" scoped>
/* Add your page-specific styles here */
</style>
