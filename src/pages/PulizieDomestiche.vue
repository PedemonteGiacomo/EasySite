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

export default {
  components: {
    ServiceComponent,
  },
};
</script>

<style lang="sass" scoped>
/* Add your page-specific styles here */
</style>
