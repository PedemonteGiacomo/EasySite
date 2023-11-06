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

export default {
  components: {
    ServiceComponent,
  },
};
</script>

<style lang="sass" scoped>
/* Add your page-specific styles here */
</style>
