<template>
  <ServiceComponent
    :page-title="'Pulizie Cantiere'"
    :header-image="'/images/services/cantiere.jpeg'"
    :sections="[
      { id: 'section1', content: 'Le pulizie in cantiere sono un aspetto fondamentale per mantenere un ambiente di lavoro pulito, sicuro ed efficiente. La nostra impresa di pulizie offre una gamma completa di servizi di pulizia in cantiere che si adattano alle esigenze specifiche dei tuoi progetti.' },
      { id: 'section2', content: 'I nostri servizi di pulizia in cantiere includono la rimozione di detriti, la pulizia delle superfici, la gestione dei rifiuti e molto altro. Il nostro team esperto è addestrato per affrontare le sfide uniche dei cantieri e garantire che lo spazio sia sempre in condizioni ottimali.' },
      { id: 'section3', content: 'Sia che tu stia lavorando su un cantiere edile, un progetto di ristrutturazione o qualsiasi altra attività che richieda una pulizia professionale, siamo qui per aiutarti. Offriamo soluzioni personalizzate per soddisfare le tue esigenze e garantire che il tuo cantiere sia sempre al meglio.' }
    ]"
    :services-list-header="'I nostri servizi di pulizia in cantiere includono:'"
    :services-list="[
      'Pulizia delle superfici e delle attrezzature',
      'Rimozione di detriti e materiali di scarto',
      'Pulizia dei pavimenti e delle aree di lavoro',
      'Gestione dei rifiuti e dello smaltimento',
      'Pulizia di vetrate e finestre',
      'Igienizzazione e disinfezione'
    ]"
    :contact-header="'Contattaci subito!'"
    :additional-info="'Non importa quanto grande o piccolo sia il tuo cantiere, ci occupiamo di ogni dettaglio per garantire che tu possa concentrarti sul tuo lavoro senza preoccuparti della pulizia. Contattaci oggi stesso per scoprire come possiamo contribuire al successo dei tuoi progetti con i nostri servizi di pulizia in cantiere professionali.'"
  />
</template>

<script>
import ServiceComponent from 'src/components/ServiceComponent.vue'; // Update the path
import { useMeta } from 'quasar';

export default {
  components: {
    ServiceComponent,
  },
  setup() {
    useMeta({
      title: 'Pulizie Cantiere Genova | ITL Servizi Edilizia e Costruzioni dal 1984',
      meta: {
        description: {
          name: 'description',
          content: 'ITL offre servizi specializzati di pulizie cantiere a Genova. Pulizia post-opera, cantieri edili e aree di costruzione con personale esperto. Preventivo gratuito.'
        },
        keywords: {
          name: 'keywords',
          content: 'pulizie cantiere Genova, pulizie post opera Genova, pulizie edili Genova, ITL pulizie cantiere, servizi pulizia costruzioni Genova'
        },
        // Open Graph
        'og:title': {
          property: 'og:title',
          content: 'Pulizie Cantiere Genova | ITL Servizi Edilizia e Costruzioni'
        },
        'og:description': {
          property: 'og:description',
          content: 'ITL offre servizi specializzati di pulizie cantiere a Genova. Pulizia post-opera e cantieri edili con personale esperto dal 1984.'
        },
        'og:type': { property: 'og:type', content: 'website' },
        'og:site_name': { property: 'og:site_name', content: 'ITL Impresa di Pulizie' },
        // Twitter Cards
        'twitter:title': {
          name: 'twitter:title',
          content: 'Pulizie Cantiere Genova | ITL Servizi Edilizia e Costruzioni'
        },
        'twitter:description': {
          name: 'twitter:description',
          content: 'ITL offre servizi specializzati di pulizie cantiere a Genova. Pulizia post-opera e cantieri edili con personale esperto.'
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
