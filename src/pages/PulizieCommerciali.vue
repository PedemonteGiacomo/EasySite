<template>
  <ServiceComponent
    :page-title="'Pulizie Uffici'"
    :header-image="'/images/services/uffici.jpeg'"
    :sections="[
      { id: 'section1', content: 'I nostri servizi di pulizia per uffici sono progettati per mantenere il tuo ambiente di lavoro pulito, igienico e confortevole. Sappiamo quanto sia importante creare una prima impressione positiva e fornire uno spazio di lavoro ordinato ai tuoi dipendenti e clienti.' },
      { id: 'section2', content: 'I nostri esperti addetti alle pulizie sono altamente qualificati e addestrati per affrontare le sfide uniche della pulizia degli uffici. Ogni ufficio è diverso e le tue esigenze sono importanti per noi. Personalizziamo i nostri servizi per soddisfare le tue richieste specifiche.' },
      { id: 'section3', content: 'I nostri servizi di pulizia per uffici includono la pulizia e la disinfezione di superfici, la gestione dei rifiuti, la pulizia dei pavimenti, la pulizia delle vetrate e molto altro. Ogni dettaglio è curato per garantire che il tuo ufficio sia sempre al meglio.' }
    ]"
    :services-list-header="'I nostri servizi di pulizia per uffici includono:'"
    :services-list="[
      'Pulizia e disinfezione di superfici e oggetti',
      'Pulizia e lucidatura dei pavimenti',
      'Pulizia delle aree comuni e delle zone di lavoro',
      'Gestione dei rifiuti e dello smaltimento',
      'Pulizia di vetrate e finestre',
      'Igienizzazione di bagni e cucine'
    ]"
    :additional-info="'Sappiamo che la pulizia degli uffici deve essere svolta con discrezione e rapidità. Il nostro team si impegna a garantire che il tuo ufficio sia sempre presentabile e che tu possa concentrarti sul tuo lavoro senza preoccuparti della pulizia. Contattaci oggi stesso per scoprire come i nostri servizi di pulizia per uffici possono contribuire a creare uno spazio di lavoro piacevole e professionale.'"
    :contact-header="'Contattaci subito!'"
  />
</template>

<script>
import ServiceComponent from 'src/components/ServiceComponent.vue'; // Update the path

export default {
  components: {
    ServiceComponent,
  },
};
</script>

<style lang="sass" scoped>
/* Add your page-specific styles here */
</style>
