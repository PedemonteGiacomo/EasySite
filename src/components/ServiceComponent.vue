<template>
  <q-page>
    <div class="row full-width">
      <q-parallax :src="headerImage">
        <transition type="animation" appear mode="out-in" enter-active-class="animated tada slower">
          <h2 class="text-black text-bold text-italic">{{ pageTitle }}</h2>
        </transition>
      </q-parallax>
    </div>

    <div class="q-pa-md">
      <div class="row" v-for="section in sections" :key="section.id">
        <p class="text-h5">{{ section.content }}</p>
      </div>

      <q-intersection :key="'services-list-header'">
        <transition type="animation" mode="out-in" appear enter-active-class="animated slideInRight slower">
          <div class="row">
            <h3>{{ servicesListHeader }}</h3>
          </div>
        </transition>
      </q-intersection>

      <ul class="text-h5">
        <li v-for="service in servicesList" :key="service">{{ service }}</li>
      </ul>

      <p class="text-h5">{{ additionalInfo }}</p>
    </div>

    <div class="row justify-center">
      <h2 class="text-bold text-italic">{{ contactHeader }}</h2>
    </div>

    <div class="row justify-center" v-scroll-fire="bounceImage">
      <div class="shadow-10">
        <CatchingClientComponent />
      </div>
    </div>

    <CallToActionButton
      intersectionKey="button-finish"
      buttonLabel="Richiedi subito un preventivo! Contattaci Ora!"
      buttonIcon="phone"
      buttonLink="#/contattaci"
    />

  </q-page>
</template>

<script>
import CatchingClientComponent from "src/components/CatchingClientComponent.vue"; // Update the path
import CallToActionButton from "src/components/CallToActionButton.vue";

export default {
  props: {
    pageTitle: String,
    headerImage: String,
    sections: Array, // Array of objects containing section content
    servicesListHeader: String,
    servicesList: Array,
    additionalInfo: String,
    contactHeader: String,
    // Add more props as needed
  },
  components: {
    CatchingClientComponent,
    CallToActionButton
  },
  setup() {
    // Setup logic if needed
    return {
      //loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

      bounceImage(el) {
        // in this example, when the `<div>` comes into view,
        // we bounce it for 2 seconds
        console.log(el)
        el.classList.add('animate-bounce')

        setTimeout(() => {
          // we make sure the node is still in DOM
          // (user hasn't navigated away from the Vue component
          // rendering our `<div>`)
          // so we don't generate an error
          if (document.body.contains(el)) {
            // then remove the helper class to
            // stop bouncing
            el.classList.remove('animate-bounce')
          }
        }, 2000)
      },

      fadeIn(el) {
        el.classList.add('animate-fadeIn');

        setTimeout(() => {
          if (document.body.contains(el)) {
            el.classList.remove('animate-fadeIn');
          }
        }, 2000);
      },

      slideInRight(el) {
        el.classList.add('animate-slideInRight');

        setTimeout(() => {
          if (document.body.contains(el)) {
            el.classList.remove('animate-slideInRight');
          }
        }, 2000);
      }
    }
  },
};
</script>

<style lang="sass" scoped>
// add you style here
</style>
