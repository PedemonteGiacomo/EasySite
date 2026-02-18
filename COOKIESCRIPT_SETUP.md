# Configurazione CookieScript CMP con Google Tag Manager

## ✅ Privacy Policy - COMPLETATA
La Privacy Policy ITL è già configurata e accessibile su: `<dominio>/privacy_policy`
- ✅ Conforme GDPR e ePrivacy Directive
- ✅ Specifica per ITL impresa di pulizie
- ✅ Include sezione cookie dettagliata
- ✅ Link aggiunto nel footer del sito

## 📋 Setup CookieScript (GRATUITO)

### 1. Registrazione CookieScript
1. Vai su [CookieScript.com](https://cookie-script.com/)
2. Crea account gratuito (100 pagine scansionate gratuite)
3. Aggiungi il tuo dominio: `itl-impresadipulizie-genova.web.app`
4. **Privacy Policy URL**: `https://tuo-dominio.com/privacy_policy`
5. Ottieni il tuo **CookieScript ID**

### 2. Configurazione Google Tag Manager

#### Passo 1: Tag CookieScript Banner
1. Accedi a [Google Tag Manager](https://tagmanager.google.com/)
2. Container: `GTM-M564JXHL`
3. **Tag** → **Nuovo** → **Custom HTML**
4. **Nome**: CookieScript Banner
5. **HTML**:
```html
<script type="text/javascript" charset="UTF-8" src="//cdn.cookie-script.com/s/TUO_COOKIESCRIPT_ID.js"></script>
```
6. **Attivazione**: All Pages
7. **Salva**

#### Passo 2: Google Analytics con Consent Mode
1. **Tag** → **Nuovo** → **GA4 Configuration**
2. **Measurement ID**: `G-ZE492RNM0C`
3. **Parametri Google Consent Mode**:
   - `ads_storage`: denied
   - `analytics_storage`: denied
   - `ad_user_data`: denied
   - `ad_personalization`: denied
4. **Attivazione**: 
   - **Tipo**: Custom Event
   - **Nome evento**: `CookieScriptAccept`
5. **Salva**

#### Passo 3: Trigger Consenso Cookie
1. **Trigger** → **Nuovo** → **Custom Event**
2. **Nome**: Analytics Consent
3. **Event name**: `CookieScriptAccept`
4. **Condizione**: Event equals `analytics`
5. **Salva**

### 3. Personalizzazione CookieScript

#### Colori ITL Brand
Nel pannello CookieScript:
- **Primary Color**: `#0F766E` (Verde ITL)
- **Button Color**: `#0F766E`
- **Text Color**: `#374151`
- **Background**: `#FFFFFF`

#### Testi Personalizzati
- **Titolo**: "I cookie ci aiutano a migliorare il servizio"
- **Descrizione**: "Utilizziamo cookie per analizzare il traffico e migliorare i nostri servizi di pulizia."
- **Privacy Policy Link**: `/privacy_policy`

### 4. Categorie Cookie da Configurare

#### Cookie Necessari (sempre attivi)
- **Sessione del sito**
- **Sicurezza** 
- **Funzionalità base**

#### Cookie Analitici (consenso richiesto)
- **Google Analytics** (`G-ZE492RNM0C`)
- **Google Tag Manager** (`GTM-M564JXHL`)

#### Cookie Marketing (se necessari in futuro)
- **Remarketing Google**
- **Social Media** 

### 5. Testing Completo

#### Test Checklist:
- ✅ Banner appare al primo accesso
- ✅ Privacy Policy link funziona
- ✅ Rifiuto cookie = No tracking
- ✅ Accettazione = Google Analytics attivo
- ✅ Preferenze modificabili
- ✅ Cookie salvati correttamente

#### Test Modalità:
1. **Incognito**: Per simulare primo accesso
2. **DevTools**: Verifica cookie in Application tab
3. **GTM Preview**: Controlla firing dei tag

### 6. Deploy Finale

```bash
# Build e deploy del sito aggiornato
npm run build
firebase deploy --only hosting
```

### 7. Post-Deploy

1. **CookieScript**: Aggiungi dominio live quando disponibile
2. **Google Analytics**: Verifica dati in arrivo
3. **GTM**: Pubblica container in modalità live
4. **Test finale**: Su dominio di produzione

## 🔧 Vantaggi di questa configurazione

- ✅ **100% Gratuito** (CookieScript piano free)
- ✅ **GDPR Compliant** (Privacy Policy + Banner)
- ✅ **Consent Mode v2** (Google Analytics ottimizzato)
- ✅ **Brandizzato ITL** (colori e testi personalizzati)
- ✅ **Professionale** (gestione centralizzata via GTM)