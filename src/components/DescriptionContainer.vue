<template>
  <div :class="containerClass">
    <p :class="textClass">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    containerClass: {
      type: String,
      default: "description-container"
    },
    textClass: {
      type: String,
      default: "text-h5 text-center"
    }
  }
};
</script>

<style lang="sass" scoped>
/* You can add specific styles for the container or text if needed */
.description-container
  position: relative
  top: 70%
  left: 50%
  transform: translate(-50%, -2%)
  width: 80%

.description-container2
  position: relative
  top: 70%
  left: 50%
  transform: translate(-50%, -2%)
  width: 100%
</style>
