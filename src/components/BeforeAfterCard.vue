<template>
  <q-card class="my-card shadow-2 q-ml-md q-mr-md q-mb-md">
    <div class="row items-center">
      <div class="col">
        <h6 class="text-caption text-center text-italic text-weight-bold">
          {{ beforeText }}
        </h6>
        <q-img class="col" :style="{ height: cardHeight + 'px' }" :src="beforeImage" />
      </div>

      <q-separator vertical />

      <div class="col">
        <h6 class="text-caption text-center text-italic text-weight-bold">
          {{ afterText }}
        </h6>
        <q-img class="col" :style="{ height: cardHeight + 'px' }" :src="afterImage" />
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  props: {
    beforeText: String,
    beforeImage: String,
    afterText: String,
    afterImage: String,
    cardHeight: Number,
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
