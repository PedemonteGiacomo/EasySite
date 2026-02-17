<!-- Modern contact form component -->
<template>
  <div class="contact-form-container">
    <div class="itl-card">
      <div class="q-pa-lg form-content">
        <div class="form-header q-mb-lg text-center">
          <h3 class="text-h5 text-weight-bold text-primary q-mb-sm">
            Richiedi un preventivo gratuito
          </h3>
          <p class="text-body2 text-grey-7">
            Compila il modulo e ti contatteremo entro 24 ore
          </p>
        </div>

        <q-form 
          ref="contactForm" 
          class="q-gutter-md" 
          @submit.prevent="onSubmit" 
          @reset="onReset"
        >
          <div class="row q-col-gutter-md">
            <div class="col-12 col-sm-6">
              <q-input
                name="nome"
                outlined
                v-model="firstName"
                label="Nome *"
                class="itl-input"
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Il nome è obbligatorio']"
              >
                <template v-slot:prepend>
                  <q-icon name="person" color="grey-6" />
                </template>
              </q-input>
            </div>
            
            <div class="col-12 col-sm-6">
              <q-input
                name="cognome"
                outlined
                v-model="lastName"
                label="Cognome *"
                class="itl-input"
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Il cognome è obbligatorio']"
              >
                <template v-slot:prepend>
                  <q-icon name="person_outline" color="grey-6" />
                </template>
              </q-input>
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input
                name="email"
                outlined
                v-model="email"
                label="Email *"
                type="email"
                class="itl-input"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'L\'email è obbligatoria',
                  val => /.+@.+\..+/.test(val) || 'Inserisci un indirizzo email valido'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="email" color="grey-6" />
                </template>
              </q-input>
            </div>
          </div>

          <div class="row q-col-gutter-md q-mb-md">
            <div class="col-12">
              <q-input
                name="telefono"
                outlined
                type="tel"
                v-model="phoneNumber"
                label="Numero di telefono"
                class="itl-input"
                mask="### ### ####"
              >
                <template v-slot:prepend>
                  <q-icon name="phone" color="grey-6" />
                </template>
              </q-input>
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input
                name="messaggio"
                outlined
                v-model="text"
                label="Descrivi il tipo di pulizia richiesta *"
                type="textarea"
                rows="4"
                class="itl-input"
                hint="Descrivi brevemente le tue esigenze (max 500 caratteri)"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Il messaggio è obbligatorio',
                  val => val.length <= 500 || 'Il messaggio deve essere massimo 500 caratteri'
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="message" color="grey-6" />
                </template>
              </q-input>
            </div>
          </div>

          <div class="form-actions q-pt-md">
            <div class="row q-gutter-md">
              <div class="col">
                <q-btn 
                  label="Invia richiesta"
                  type="submit"
                  class="itl-btn-primary full-width"
                  icon="send"
                  :loading="isSubmitting"
                  :disable="isSubmitting"
                  no-caps
                />
              </div>
              <div class="col-auto">
                <q-btn 
                  label="Cancella"
                  type="reset"
                  class="itl-btn-text"
                  icon="refresh"
                  :disable="isSubmitting"
                  no-caps
                />
              </div>
            </div>
          </div>
        </q-form>

        <!-- Trust indicators -->
        <div class="trust-indicators q-mt-lg q-pt-lg border-top">
          <div class="row items-center justify-center q-gutter-lg text-center">
            <div class="trust-item">
              <q-icon name="shield" size="sm" color="positive" />
              <div class="text-caption text-grey-7">Dati protetti</div>
            </div>
            <div class="trust-item">
              <q-icon name="schedule" size="sm" color="info" />
              <div class="text-caption text-grey-7">Risposta in 24h</div>
            </div>
            <div class="trust-item">
              <q-icon name="star" size="sm" color="warning" />
              <div class="text-caption text-grey-7">Preventivo gratuito</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from "vue";
import axios from 'axios';
import { db } from "../firebase";

export default {
  name: 'CatchingClientComponent',
  setup() {
    const $q = useQuasar();
    const contactForm = ref(null);
    const isSubmitting = ref(false);

    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const phoneNumber = ref('');
    const text = ref('');

    const onSubmit = async () => {
      try {
        isSubmitting.value = true;
        
        const formData = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          phoneNumber: phoneNumber.value,
          text: text.value,
          timestamp: new Date().toISOString()
        };

        // Store in Firestore
        const newMexRef = db.collection("formData").doc();
        await newMexRef.set(formData);
        
        if (process.env.NODE_ENV === 'development') {
          console.log("Document written with ID: ", newMexRef.id);
        }

        // Send email via Firebase Function
        await axios.post(
          'https://us-central1-itl-impresadipulizie-genova.cloudfunctions.net/SendMail', 
          formData
        );

        // Success notification
        $q.notify({
          type: 'positive',
          message: 'Messaggio inviato con successo!',
          caption: 'Ti contatteremo entro 24 ore',
          icon: 'done_all',
          timeout: 5000,
          position: 'top'
        });

        // Reset form
        contactForm.value.reset();
        
      } catch (error) {
        console.error('Error sending message:', error);
        
        $q.notify({
          type: 'negative',
          message: 'Errore nell\'invio del messaggio',
          caption: 'Riprova o contattaci direttamente',
          icon: 'error',
          timeout: 5000,
          position: 'top'
        });
      } finally {
        isSubmitting.value = false;
      }
    };

    const onReset = () => {
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      phoneNumber.value = '';
      text.value = '';
    };

    return {
      contactForm,
      firstName,
      lastName,
      email,
      phoneNumber,
      text,
      isSubmitting,
      onSubmit,
      onReset,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
}

.form-content {
  padding-left: 2rem !important;
  padding-right: 2rem !important;
  
  @media (max-width: 767px) {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}

.form-header {
  h3 {
    margin-bottom: 8px;
  }
}

.border-top {
  border-top: 1px solid #E5E7EB;
}

.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  
  .q-icon {
    margin-bottom: 4px;
  }
}

// Enhanced input styling
.itl-input {
  margin-left: 8px !important;
  margin-right: 0px !important;
  width: calc(100% - 8px) !important;
  
  .q-field__control {
    min-height: 56px;
    
    &:hover {
      border-color: #0F766E;
    }
  }
  
  .q-field__prepend {
    padding-right: 12px;
  }
  
  &.q-field--error .q-field__control {
    border-color: #EF4444;
  }
}

@media (max-width: 767px) {
  .form-actions .row {
    flex-direction: column;
    
    .q-btn {
      width: 100%;
    }
  }
  
  .itl-input {
    margin-left: 0px !important;
    margin-right: 0px !important;
    width: 100% !important;
  }
}
</style>
