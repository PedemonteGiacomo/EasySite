<template>
  <ServiceComponent
    :page-title="'Sanificazioni'"
    :header-image="'/images/services/sanificazione2.jpeg'"
    :sections="[
      {id: 'section1', content: 'I nostri servizi di sanificazione sono progettati per creare un ambiente sicuro e igienico. La sanificazione è fondamentale per proteggere la salute e il benessere delle persone che frequentano i tuoi spazi.'},
      {id: 'section1', content: 'I nostri addetti alla sanificazione sono altamente qualificati e seguono protocolli rigorosi per garantire che tutte le superfici vengano trattate in modo adeguato. Utilizziamo prodotti e attrezzature all\'avanguardia per eliminare germi, batteri e virus.'},
      {id: 'section1', content: 'I servizi di sanificazione includono la pulizia e la disinfezione profonda di tutte le aree, la gestione dei rifiuti contaminati, la sanificazione di ambienti critici e molto altro. La tua sicurezza è la nostra priorità.'}
    ]"
    :services-list-header="'I nostri servizi di sanificazione includono:'"
    :services-list="[
      'Pulizia e disinfezione profonda di tutte le aree',
      'Sanificazione di ambienti critici',
      'Utilizzo di prodotti e attrezzature specializzate',
      'Gestione sicura dei rifiuti contaminati',
      'Servizi personalizzati in base alle tue esigenze'
    ]"
    :additional-info="'La sanificazione è fondamentale, soprattutto in situazioni di emergenza o quando è necessario garantire la massima igiene. Il nostro team è impegnato a offrirti un ambiente sicuro e pulito in ogni circostanza. Contattaci oggi stesso per scoprire come i nostri servizi di sanificazione possono contribuire a proteggere la salute delle persone e a garantire ambienti igienici.'"
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
      title: 'Sanificazione Genova | ITL Servizi Disinfezione Professionale dal 1984',
      meta: {
        description: {
          name: 'description',
          content: 'ITL offre servizi professionali di sanificazione e disinfezione a Genova. Interventi specializzati per uffici, case e aziende con prodotti certificati. Preventivo gratuito.'
        },
        keywords: {
          name: 'keywords',
          content: 'sanificazione Genova, disinfezione Genova, sanificazione uffici Genova, ITL sanificazione, servizi disinfezione professionale Genova'
        },
        // Open Graph
        'og:title': {
          property: 'og:title',
          content: 'Sanificazione Genova | ITL Servizi Disinfezione Professionale'
        },
        'og:description': {
          property: 'og:description',
          content: 'ITL offre servizi professionali di sanificazione e disinfezione a Genova. Interventi specializzati con prodotti certificati dal 1984.'
        },
        'og:type': { property: 'og:type', content: 'website' },
        'og:site_name': { property: 'og:site_name', content: 'ITL Impresa di Pulizie' },
        // Twitter Cards
        'twitter:title': {
          name: 'twitter:title',
          content: 'Sanificazione Genova | ITL Servizi Disinfezione Professionale'
        },
        'twitter:description': {
          name: 'twitter:description',
          content: 'ITL offre servizi professionali di sanificazione e disinfezione a Genova. Interventi specializzati con prodotti certificati.'
        }
      }
    });
  }
};
</script>

<style lang="sass" scoped>
/* Add your page-specific styles here */
</style>
