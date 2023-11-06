<template>
  <q-intersection :key="intersectionKey">
    <transition type="animation" mode="out-in" appear enter-active-class="animated tada slower">
      <div class="row justify-center q-mt-xl">
        <q-btn style="width: 80%" color="secondary" :label="buttonLabel" :icon="buttonIcon" :href="buttonLink" />
      </div>
    </transition>
  </q-intersection>
</template>

<script>
export default {
  props: {
    intersectionKey: {
      type: String,
      required: true
    },
    buttonLabel: {
      type: String,
      required: true
    },
    buttonIcon: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
/* Add any specific styles for the CallToActionButton component if needed */
</style>
