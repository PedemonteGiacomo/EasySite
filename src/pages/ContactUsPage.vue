<template>
  <q-page>
    <!-- <q-intersection :key="'h2-principles'" v-scroll-fire="bounceImage"> -->
    <transition type="animation" mode="out-in" appear enter-active-class="animated fadeInLeftBig slower">
      <div class="row q-mt-xl justify-center">
        <h2 class="text-body text-center text-italic" data-index="h2-principles">
          Dove trovarci
        </h2>
      </div>

    </transition>
    <!-- </q-intersection> -->

    <!-- Simple component to manage embedded maps provided by google, modify the url
     to get the correct position (search first on maps and paste the relevant part of the URL) -->
    <transition type="animation" mode="out-in" appear enter-active-class="animated fadeInRightBig slower">
      <div class="row justify-center">
        <iframe width="600" height="450" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=PLACE_TO_REQUEST"
          allowfullscreen>
        </iframe>
      </div>
    </transition>

    <div class="description-container q-mt-xl">
      <h5 class="text-italic text-center">Mandaci subito un messaggio, lascia un recapito telefonico e verrai ricontattato
        il prima possibile. Affidati a ITL impresa di pulizie per un preventivo senza impegno. Contattaci subito, cosa
        aspetti?</h5>
    </div>

    <q-intersection :key="'h2-principles'">
      <transition-group type="animation" appear mode="out-in" enter-active-class="animated bounce slower">
        <div key="div_contact" class="row justify-center q-mt-sm">
          <h2 class="text-bold text-italic">Contattaci subito!</h2>
        </div>
        <div key="catchingClient" class="row justify-center">
          <div class="shadow-10">
            <CatchingClientComponent />
          </div>
        </div>
      </transition-group>
    </q-intersection>

    <q-intersection :key="'button-finish'">
      <transition type="animation" mode="out-in" appear enter-active-class="animated tada slower">
        <div class="row justify-center q-mt-xl">
          <q-btn style="width: 80%" color="secondary" label="Richiedi subito un preventivo! Contattaci Ora!"
            icon="phone" />
        </div>
      </transition>
    </q-intersection>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import CatchingClientComponent from "src/components/CatchingClientComponent.vue";

export default defineComponent({
  name: "ContactUsPage",
  components: {
    CatchingClientComponent,
  },
});
</script>

<style lang="sass" scoped>
.description-container
  position: relative
  top: 70%
  left: 50%
  transform: translate(-50%, -2%)
  width: 80%
</style>
