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
import { useMeta } from 'quasar';

export default {
  components: {
    ServiceComponent,
  },
  setup() {
    useMeta({
      title: 'Pulizie Condomini Genova | ITL Servizi Aree Comuni dal 1984',
      meta: {
        description: {
          name: 'description',
          content: 'ITL offre servizi specializzati di pulizie condomini a Genova. Pulizia aree comuni, scale, ascensori e cortili con personale esperto. Preventivo gratuito.'
        },
        keywords: {
          name: 'keywords',
          content: 'pulizie condomini Genova, pulizia aree comuni Genova, pulizie scale condomini Genova, ITL pulizie condomini, servizi pulizia condominiale Genova'
        },
        // Open Graph
        'og:title': {
          property: 'og:title',
          content: 'Pulizie Condomini Genova | ITL Servizi Aree Comuni'
        },
        'og:description': {
          property: 'og:description',
          content: 'ITL offre servizi specializzati di pulizie condomini a Genova. Pulizia aree comuni, scale e ascensori con personale esperto dal 1984.'
        },
        'og:type': { property: 'og:type', content: 'website' },
        'og:site_name': { property: 'og:site_name', content: 'ITL Impresa di Pulizie' },
        // Twitter Cards
        'twitter:title': {
          name: 'twitter:title',
          content: 'Pulizie Condomini Genova | ITL Servizi Aree Comuni'
        },
        'twitter:description': {
          name: 'twitter:description',
          content: 'ITL offre servizi specializzati di pulizie condomini a Genova. Pulizia aree comuni e scale con personale esperto.'
        }
      }
    });
  }
};
};
</script>

<style lang="sass" scoped>
/* Add your page-specific styles here */
</style>
