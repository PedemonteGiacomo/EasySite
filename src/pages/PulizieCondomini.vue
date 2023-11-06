<template>
  <ServiceComponent
    :page-title="'Pulizie Condomini'"
    :header-image="'/images/services/condominio.jpeg'"
    :sections="[
      { id: 'section1', content: 'I nostri servizi di pulizia per condomini sono pensati per mantenere gli spazi comuni e le aree condivise pulite, ordinate e accoglienti. Riconosciamo l\'importanza di creare un ambiente piacevole e igienico per tutti gli abitanti del condominio.' },
      { id: 'section2', content: 'I nostri addetti alle pulizie sono altamente qualificati e pronti ad affrontare le sfide uniche della pulizia dei condomini. Ogni condominio ha esigenze diverse, e noi personalizziamo i nostri servizi per garantire la massima soddisfazione dei residenti.' },
      { id: 'section3', content: 'I servizi di pulizia per condomini includono la pulizia e la disinfezione delle aree comuni, la gestione dei rifiuti, la pulizia dei corridoi, l\'igiene degli ascensori e molto altro. Ogni dettaglio è curato per garantire un ambiente pulito e piacevole per tutti gli abitanti.' }
    ]"
    :services-list-header="'I nostri servizi di pulizia per condomini includono:'"
    :services-list="[
      'Pulizia e disinfezione delle aree comuni',
      'Pulizia dei pavimenti e dei corridoi',
      'Pulizia degli ascensori',
      'Gestione dei rifiuti e dello smaltimento',
      'Pulizia delle aree esterne',
      'Manutenzione e pulizia delle scale'
    ]"
    :additional-info="'Sappiamo che la pulizia degli uffici deve essere svolta con discrezione e rapidità. Il nostro team si impegna a garantire che il tuo ufficio sia sempre presentabile e che tu possa concentrarti sul tuo lavoro senza preoccuparti della pulizia. Contattaci oggi stesso per scoprire come i nostri servizi di pulizia per uffici possono contribuire a creare uno spazio di lavoro piacevole e professionale.'"
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
