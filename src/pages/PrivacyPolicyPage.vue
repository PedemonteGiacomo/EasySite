<template>
  <q-page>
    <div class="container q-py-xl">
      <div class="privacy-policy-content">
        <h1 class="text-h3 text-weight-bold text-primary q-mb-lg text-center">
          Privacy Policy
        </h1>
        
        <div class="text-body1 privacy-text">
          <p class="text-grey-7 text-center q-mb-xl">
            <strong>Ultimo aggiornamento:</strong> {{ lastUpdate }}
          </p>

          <!-- SEZIONE 1: INTRODUZIONE -->
          <section class="q-mb-xl">
            <h2 class="text-h5 text-weight-bold text-primary q-mb-md">1. Chi siamo</h2>
            <p>
              ITL s.r.l., con sede in Via Archimede 58r, 16142 Genova (GE), P.IVA/CF: [INSERIRE], 
              è il <strong>Titolare del trattamento</strong> dei dati personali raccolti tramite il presente sito web 
              <span class="text-primary">{{ currentDomain }}</span>.
            </p>
            <p>
              <strong>Contatti Privacy:</strong><br>
              Email: itl.sas@virgilio.it<br>
              Telefono: +39 335 126 7227<br>
              Indirizzo: Via Archimede 58r, 16142 Genova (GE)
            </p>
          </section>

          <!-- SEZIONE 2: DATI RACCOLTI -->
          <section class="q-mb-xl">
            <h2 class="text-h5 text-weight-bold text-primary q-mb-md">2. Dati personali che raccogliamo</h2>
            
            <h3 class="text-h6 text-weight-medium q-mt-lg q-mb-sm">2.1 Dati forniti volontariamente</h3>
            <p>Attraverso i moduli di contatto raccogliamo:</p>
            <ul class="q-pl-md">
              <li><strong>Dati identificativi:</strong> Nome, Cognome</li>
              <li><strong>Dati di contatto:</strong> Email, Numero di telefono</li>
              <li><strong>Comunicazioni:</strong> Messaggi e richieste di preventivo</li>
            </ul>

            <h3 class="text-h6 text-weight-medium q-mt-lg q-mb-sm">2.2 Dati raccolti automaticamente</h3>
            <ul class="q-pl-md">
              <li><strong>Dati di navigazione:</strong> Indirizzo IP, browser, dispositivo utilizzato</li>
              <li><strong>Cookie tecnici e di analisi:</strong> Per il funzionamento del sito e statistiche anonime</li>
              <li><strong>Dati di geolocalizzazione:</strong> Paese e città approssimativa (tramite IP)</li>
            </ul>
          </section>

          <!-- SEZIONE 3: FINALITÀ E BASE GIURIDICA -->
          <section class="q-mb-xl">
            <h2 class="text-h5 text-weight-bold text-primary q-mb-md">3. Finalità del trattamento e base giuridica</h2>
            
            <div class="q-mb-md">
              <h3 class="text-h6 text-weight-medium">3.1 Gestione richieste di contatto</h3>
              <p><strong>Finalità:</strong> Rispondere alle richieste di preventivo e informazioni</p>
              <p><strong>Base giuridica:</strong> Consenso dell'interessato (Art. 6.1.a GDPR)</p>
              <p><strong>Conservazione:</strong> 24 mesi dalla raccolta o fino a revoca del consenso</p>
            </div>

            <div class="q-mb-md">
              <h3 class="text-h6 text-weight-medium">3.2 Funzionamento tecnico del sito</h3>
              <p><strong>Finalità:</strong> Garantire il corretto funzionamento del sito web</p>
              <p><strong>Base giuridica:</strong> Interesse legittimo (Art. 6.1.f GDPR)</p>
              <p><strong>Conservazione:</strong> 13 mesi per i log del server</p>
            </div>

            <div class="q-mb-md">
              <h3 class="text-h6 text-weight-medium">3.3 Analisi statistiche</h3>
              <p><strong>Finalità:</strong> Miglioramento del sito e comprensione delle preferenze degli utenti</p>
              <p><strong>Base giuridica:</strong> Consenso per cookie analitici (Art. 6.1.a GDPR)</p>
              <p><strong>Conservazione:</strong> 26 mesi (Google Analytics)</p>
            </div>
          </section>

          <!-- SEZIONE 4: COOKIE -->
          <section class="q-mb-xl">
            <h2 class="text-h5 text-weight-bold text-primary q-mb-md">4. Cookie e tecnologie simili</h2>
            <p>
              Il nostro sito utilizza cookie in conformità alla <strong>Direttiva ePrivacy (2002/58/CE)</strong> 
              e al <strong>GDPR</strong>. Utilizziamo:
            </p>

            <h3 class="text-h6 text-weight-medium q-mt-lg q-mb-sm">4.1 Cookie Tecnici (sempre attivi)</h3>
            <ul class="q-pl-md">
              <li>Cookie di sessione per il funzionamento del sito</li>
              <li>Cookie per la gestione delle preferenze sui cookie</li>
              <li>Cookie per la sicurezza e prevenzione di attacchi</li>
            </ul>

            <h3 class="text-h6 text-weight-medium q-mt-lg q-mb-sm">4.2 Cookie Analitici (consenso richiesto)</h3>
            <ul class="q-pl-md">
              <li><strong>Google Analytics:</strong> Analisi statistiche anonime del traffico</li>
              <li><strong>Google Tag Manager:</strong> Gestione centralizzata dei tag</li>
            </ul>

            <p class="q-mt-md">
              <strong>Gestione Cookie:</strong> Puoi gestire le tue preferenze sui cookie attraverso 
              il banner di consenso presente sul sito o nelle impostazioni del tuo browser.
            </p>
          </section>

          <!-- SEZIONE 5: CONDIVISIONE DATI -->
          <section class="q-mb-xl">
            <h2 class="text-h5 text-weight-bold text-primary q-mb-md">5. Condivisione dei dati</h2>
            <p>I tuoi dati personali possono essere condivisi con:</p>
            <ul class="q-pl-md">
              <li><strong>Google LLC:</strong> Per servizi di analisi (Google Analytics) - 
                <a href="https://policies.google.com/privacy" target="_blank" class="text-primary">Privacy Policy</a></li>
              <li><strong>Firebase (Google):</strong> Per hosting e database - 
                <a href="https://firebase.google.com/support/privacy" target="_blank" class="text-primary">Privacy Policy</a></li>
              <li><strong>Fornitori di servizi tecnici:</strong> Solo per manutenzione e supporto, sotto accordi di riservatezza</li>
            </ul>
            
            <p class="q-mt-md">
              <strong>Trasferimenti internazionali:</strong> Alcuni dati potrebbero essere trasferiti negli USA 
              (Google/Firebase) in base alle Decisioni di Adeguatezza UE o Standard Contractual Clauses.
            </p>
          </section>

          <!-- SEZIONE 6: DIRITTI DELL'INTERESSATO -->
          <section class="q-mb-xl">
            <h2 class="text-h5 text-weight-bold text-primary q-mb-md">6. I tuoi diritti (Art. 12-22 GDPR)</h2>
            <p>Hai il diritto di:</p>
            <ul class="q-pl-md">
              <li><strong>Accesso:</strong> Ottenere informazioni sui dati che trattiamo su di te</li>
              <li><strong>Rettifica:</strong> Correggere dati inesatti o incompleti</li>
              <li><strong>Cancellazione:</strong> Richiedere la cancellazione dei tuoi dati ("diritto all'oblio")</li>
              <li><strong>Limitazione:</strong> Limitare il trattamento in determinate circostanze</li>
              <li><strong>Portabilità:</strong> Ricevere i tuoi dati in formato strutturato</li>
              <li><strong>Opposizione:</strong> Opporti al trattamento per motivi legittimi</li>
              <li><strong>Revoca consenso:</strong> Revocare il consenso in qualsiasi momento</li>
            </ul>
            
            <p class="q-mt-md">
              <strong>Come esercitare i diritti:</strong> Invia una richiesta a 
              <a href="mailto:itl.sas@virgilio.it" class="text-primary">itl.sas@virgilio.it</a> 
              allegando copia di un documento di identità.
            </p>

            <p>
              <strong>Reclamo:</strong> Hai il diritto di presentare reclamo al 
              <a href="https://www.garanteprivacy.it" target="_blank" class="text-primary">Garante per la Protezione dei Dati Personali</a>.
            </p>
          </section>

          <!-- SEZIONE 7: SICUREZZA -->
          <section class="q-mb-xl">
            <h2 class="text-h5 text-weight-bold text-primary q-mb-md">7. Sicurezza dei dati</h2>
            <p>
              Implementiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati personali 
              contro accesso non autorizzato, alterazione, divulgazione o distruzione, inclusi:
            </p>
            <ul class="q-pl-md">
              <li>Crittografia HTTPS per tutte le comunicazioni</li>
              <li>Controlli di accesso e autenticazione</li>
              <li>Backup periodici e sicuri</li>
              <li>Formazione del personale sulla privacy</li>
            </ul>
          </section>

          <!-- SEZIONE 8: MINORI -->
          <section class="q-mb-xl">
            <h2 class="text-h5 text-weight-bold text-primary q-mb-md">8. Minori di età</h2>
            <p>
              I nostri servizi non sono rivolti a minori di 16 anni. Non raccogliamo consapevolmente 
              dati personali da minori di 16 anni. Se ritieni che abbiamo raccolto dati di un minore, 
              contattaci immediatamente.
            </p>
          </section>

          <!-- SEZIONE 9: MODIFICHE -->
          <section class="q-mb-xl">
            <h2 class="text-h5 text-weight-bold text-primary q-mb-md">9. Modifiche alla Privacy Policy</h2>
            <p>
              Potremmo aggiornare questa Privacy Policy periodicamente. La data di ultimo aggiornamento 
              è indicata in cima alla pagina. Ti consigliamo di consultare regolarmente questa pagina 
              per eventuali modifiche.
            </p>
          </section>

          <!-- SEZIONE 10: CONTATTI -->
          <section class="q-mb-xl">
            <h2 class="text-h5 text-weight-bold text-primary q-mb-md">10. Contatti</h2>
            <p>
              Per qualsiasi domanda relativa a questa Privacy Policy o al trattamento dei tuoi dati personali, 
              puoi contattarci:
            </p>
            <div class="itl-card q-pa-md q-mt-md">
              <p class="q-ma-none">
                <strong>ITL s.r.l. - Impresa di Pulizie</strong><br>
                Via Archimede 58r, 16142 Genova (GE)<br>
                Email: <a href="mailto:itl.sas@virgilio.it" class="text-primary">itl.sas@virgilio.it</a><br>
                Tel: <a href="tel:+393351267227" class="text-primary">+39 335 126 7227</a>
              </p>
            </div>
          </section>

          <!-- NOTE LEGALI -->
          <section class="q-mb-xl q-pt-lg border-top">
            <h2 class="text-h6 text-weight-bold text-grey-8 q-mb-md">Note Legali</h2>
            <p class="text-body2 text-grey-7">
              Questa Privacy Policy è conforme al <strong>Regolamento UE 2016/679 (GDPR)</strong>, 
              al <strong>D.Lgs. 196/2003</strong> (Codice Privacy italiano), alla 
              <strong>Direttiva ePrivacy 2002/58/CE</strong> e alle 
              <strong>Linee Guida del Garante per la Protezione dei Dati Personali</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useMeta } from 'quasar';

const metaData = {
  title: 'Privacy Policy - ITL s.r.l.',
  titleTemplate: title => `${title} - Impresa di Pulizie Genova`,
  meta: {
    description: { 
      name: 'description', 
      content: 'Privacy Policy di ITL s.r.l. - Informazioni sul trattamento dati personali conforme a GDPR e normative privacy italiane.' 
    },
    keywords: { 
      name: 'keywords', 
      content: 'privacy policy, GDPR, protezione dati, ITL pulizie Genova' 
    },
    robots: { name: 'robots', content: 'noindex, nofollow' }
  }
};

export default {
  name: 'PrivacyPolicyPage',
  setup() {
    useMeta(metaData);
    
    return {
      lastUpdate: '18 Febbraio 2026',
      currentDomain: window.location.hostname
    };
  }
};
</script>

<style lang="scss" scoped>
.privacy-policy-content {
  max-width: 800px;
  margin: 0 auto;
}

.privacy-text {
  line-height: 1.8;
  
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  h3 {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  ul {
    margin-bottom: 1rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.7;
    }
  }
  
  a {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

.border-top {
  border-top: 1px solid #E5E7EB;
}

@media (max-width: 767px) {
  .privacy-policy-content {
    padding: 0 1rem;
  }
  
  .privacy-text {
    h2 {
      font-size: 1.2rem;
    }
    
    h3 {
      font-size: 1.1rem;
    }
  }
}
</style>