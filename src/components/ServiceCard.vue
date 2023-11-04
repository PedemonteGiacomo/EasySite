<template>
  <q-card class="q-mr-xl q-ml-xl q-mb-md shadow-10" style="width: 310px">
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
  }
};
</script>

<style scoped>
/* Add component-specific styles here if needed */
</style>
