<template>
  <q-card class="q-mr-xl q-ml-xl q-mb-md shadow-10" style="width: 310px" v-scroll-fire="bounceImage">
    <q-card-section class="q-pt-lg q-pb-xl text-center">
      <q-avatar size="225px" color="teal" text-color="white" class="shadow-20">
        <q-icon :name="iconName" size="100px" />
      </q-avatar>
      <div class="q-mt-md icon-description">
        <h6 class="text-subtitle2">{{ title }}</h6>
        <p class="text-h7">{{ description }}</p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    iconName: String,
    title: String,
    description: String
  },
  setup(){
    return{
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
    }
  }
};
</script>

<style lang="sass" scoped>
.animate-bounce
  animation: q-bounce 2s infinite

@keyframes q-bounce
  0%, 20%, 50%, 80%, 100%
    transform: translateY(0)
  40%
    transform: translateY(-30px)
  60%
    transform: translateY(-15px)
</style>
