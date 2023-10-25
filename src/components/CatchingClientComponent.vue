<!-- Simple form to catch clients in the end of each service pages -->

<template>
  <div class="q-pa-md" style="width: 300px">
    <q-form
      ref="myForm"
      class="q-gutter-md"
      @submit.prevent="onSubmit"
      @reset="onReset"
    >
      <q-input
        name="nome"
        filled
        v-model="firstName"
        label="Nome *"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Inserisci il tuo nome',
        ]"
      />
      <q-input
        name="cognome"
        filled
        v-model="lastName"
        label="Cognome *"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Inserisci il tuo cognome',
        ]"
      />
      <q-input
        name="email"
        filled
        v-model="email"
        label="Email *"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Inserisci la tua mail',
          (val) =>
            /.+@.+\..+/.test(val) || 'Inserisci un indirizzo email valido',
        ]"
      />
      <q-input
        name="telefono"
        filled
        type="tel"
        v-model="phoneNumber"
        label="Phone Number"
        hint="Opzionale"
        mask="(##) ### #######"
      />

      <q-input
        name="messaggio"
        label="Messaggio"
        filled
        v-model="text"
        autogrow
        hint="Inserisci il tuo messaggio qui"
      />

      <!--<q-toggle
        name="accept"
        v-model="accept"
        label="I accept the license and terms"
      />-->

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { db } from "../firebase";

export default {
  name: "ContactForm",
  setup() {
    const $q = useQuasar();

    const firstName = ref(null);
    const lastName = ref(null);
    const email = ref(null);
    const phoneNumber = ref(null);
    const text = ref(null);
    const accept = ref(false);

    const onSubmit = async () => {
      try {
        const formData = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          phoneNumber: phoneNumber.value,
          text: text.value,
        };

        // Add a new document with a generated id.
        var newMexRef = db.collection("formData").doc();

        newMexRef.set(formData);

        console.log("Document written with ID: ", newMexRef.id);

        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Message sent successfully",
        });

        /* this can be modified or used later to manage properly what to do with fields after the notification of success
        firstName.value = null;
        lastName.value = null;
        email.value = null;
        phoneNumber.value = null;
        text.value = null;
        accept.value = false;
        */
      } catch (error) {
        console.error("Error saving form data:", error);
      }
    };

    const onReset = () => {
      firstName.value = null;
      lastName.value = null;
      email.value = null;
      phoneNumber.value = null;
      text.value = null;
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
    };
  },
};
</script>
