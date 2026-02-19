<template>
  <ServiceComponent
    :page-title="'Pulizie Appartamenti'"
    :header-image="'/images/services/condominio.jpeg'"
    :sections="[
      { id: 'section1', content: 'I nostri servizi di pulizia per appartamenti sono progettati per mantenere il tuo spazio vitale pulito, confortevole e accogliente. Riconosciamo quanto sia importante avere un ambiente pulito e ordinato in cui vivere e rilassarsi.' },
      { id: 'section2', content: 'I nostri addetti alle pulizie sono altamente qualificati e attenti ai dettagli. Ogni appartamento ha le sue esigenze, e noi personalizziamo i nostri servizi per garantire che ogni angolo sia trattato con cura.' },
      { id: 'section3', content: 'I servizi di pulizia per appartamenti includono la pulizia e la disinfezione di tutte le stanze, la gestione dei rifiuti, la pulizia dei pavimenti, la pulizia delle superfici e molto altro. Curiamo ogni dettaglio per offrirti uno spazio pulito e piacevole.' }
    ]"
    :services-list-header="'I nostri servizi di pulizia per appartamenti includono:'"
    :services-list="[
      'Pulizia e disinfezione di tutte le stanze',
      'Pulizia e lucidatura dei pavimenti',
      'Pulizia delle superfici e degli oggetti',
      'Gestione dei rifiuti e dello smaltimento',
      'Pulizia delle finestre e dei vetri',
      'Igienizzazione di bagni e cucine'
    ]"
    :additional-info="'Sappiamo che il tuo appartamento è il tuo rifugio, e ci impegniamo a fornirti un ambiente pulito e ordinato in cui ti senti a tuo agio. Il nostro team si prende cura dei dettagli in modo che tu possa goderti la tua casa senza preoccupazioni. Contattaci oggi stesso per scoprire come i nostri servizi di pulizia per appartamenti possono contribuire a mantenere il tuo spazio vitale in ottime condizioni.'"
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
      title: 'Pulizie Domestiche Genova | ITL Servizi Appartamenti dal 1984',
      meta: {
        description: {
          name: 'description',
          content: 'ITL offre servizi professionali di pulizie domestiche a Genova. Pulizia appartamenti, case e abitazioni private con personale qualificato. Preventivo gratuito.'
        },
        keywords: {
          name: 'keywords', 
          content: 'pulizie domestiche Genova, pulizia appartamenti Genova, pulizie case Genova, ITL pulizie domestiche, servizi pulizia abitazioni Genova'
        },
        // Open Graph
        'og:title': {
          property: 'og:title',
          content: 'Pulizie Domestiche Genova | ITL Servizi Appartamenti'
        },
        'og:description': {
          property: 'og:description',
          content: 'ITL offre servizi professionali di pulizie domestiche a Genova. Pulizia appartamenti e case con personale qualificato dal 1984.'
        },
        'og:type': { property: 'og:type', content: 'website' },
        'og:site_name': { property: 'og:site_name', content: 'ITL Impresa di Pulizie' },
        // Twitter Cards  
        'twitter:title': {
          name: 'twitter:title',
          content: 'Pulizie Domestiche Genova | ITL Servizi Appartamenti'
        },
        'twitter:description': {
          name: 'twitter:description',
          content: 'ITL offre servizi professionali di pulizie domestiche a Genova. Pulizia appartamenti e case con personale qualificato.'
        }
      }
    });
  }
};
</script>

<style lang="sass" scoped>
/* Add your page-specific styles here */
</style>
