<!-- Simple form to catch clients in the end of each service pages -->

<template>
  <div class="q-pa-md" style="width: 300px">
    <q-form ref="myForm" class="q-gutter-md" @submit.prevent="onSubmit" @reset="onReset" method="POST">
      <q-input name="nome" filled v-model="firstName" label="Nome *" lazy-rules :rules="[
        (val) => (val && val.length > 0) || 'Inserisci il tuo nome',
      ]" />
      <q-input name="cognome" filled v-model="lastName" label="Cognome *" lazy-rules :rules="[
        (val) => (val && val.length > 0) || 'Inserisci il tuo cognome',
      ]" />
      <q-input name="email" filled v-model="email" label="Email *" lazy-rules :rules="[
        (val) => (val && val.length > 0) || 'Inserisci la tua mail',
        (val) =>
          /.+@.+\..+/.test(val) || 'Inserisci un indirizzo email valido',
      ]" />
      <q-input name="telefono" filled type="tel" v-model="phoneNumber" label="Numero di Telefono" hint="Opzionale"
        mask="### ### ####" />
      <!---mask can be adjust as wanted : example -> mask = "(##) ### ########" this to specify a prefix -->

      <q-input name="messaggio" label="Messaggio *" filled v-model="text" autogrow :rules="[
        (val) => (val && val.length > 0 && val.length < 500) || 'Il messaggio deve avere una lunghezza compresa tra 1 e 500 caratteri',
      ]" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'; // Import useQuasar from Quasar
import { ref } from "vue";
import axios from 'axios';
import { db } from "../firebase";

export default {
  name: 'CatchingClientComponent',
  setup() {
    const $q = useQuasar(); // Access $q object using useQuasar()

    const myFormRef = ref(null); // form reference

    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const phoneNumber = ref('');
    const text = ref('');
    const accept = ref(false);

    const onSubmit = async () => {
      try {
        // Your form data
        const formData = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          phoneNumber: phoneNumber.value,
          text: text.value,
        };

        // Add a new document with a generated id to store the message on firestore
        var newMexRef = db.collection("formData").doc();

        newMexRef.set(formData);

        console.log("Document written with ID: ", newMexRef.id);

        // Make a POST request to your Firebase Function endpoint
        await axios.post('https://us-central1-itl-impresadipulizie-genova.cloudfunctions.net/SendMail', formData);

        // Show success notification
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Messaggio inviato con successo',
        });

        // Reset form using resetValidation method
        onReset()

      } catch (error) {
        console.error('Error sending form data:', error);
        // Handle errors, show an error message, etc.
      }
    };

    const onReset = () => {
      // Reset form fields
      firstName.value = ' ';
      lastName.value = ' ';
      email.value = 'messaggioinviato@correttamente.it';
      phoneNumber.value = '';
      text.value = ' ';
      accept.value = false;
    };

    return {
      firstName,
      lastName,
      email,
      phoneNumber,
      text,
      accept,
      onSubmit,
      onReset,
      myFormRef, // Expose the form reference
    };
  },
};
</script>
