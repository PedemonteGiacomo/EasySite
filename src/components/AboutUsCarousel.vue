<!-- Simple carousel to display 4 images full-screen -->

<template>
  <q-carousel swipeable animated v-model="slide" :autoplay="autoplay" ref="carousel" infinite>
    <q-carousel-slide :name="1" img-src="/images/office/outside.jpg" style="
          object-fit: scale-down;
          width: 100%;
          height: 50%;
          position: relative;
          bottom: 0;
        " />
    <q-carousel-slide :name="2" img-src="/images/office/material2.jpg" style="
          object-fit: scale-down;
          width: 100%;
          height: 50%;
          position: relative;
          bottom: 0;
        " />
    <q-carousel-slide :name="3" img-src="/images/office/guests.jpg" style="
          object-fit: scale-down;
          width: 100%;
          height: 50%;
          position: relative;
          bottom: 0;
        " />
    <q-carousel-slide :name="4" img-src="/images/office/postation.jpg" style="
          object-fit: scale-down;
          width: 100%;
          height: 50%;
          position: relative;
          bottom: 0;
        " />
    <q-carousel-slide :name="5" img-src="/images/office/entrance.jpg" style="
          object-fit: scale-down;
          width: 100%;
          height: 50%;
          position: relative;
          bottom: 0;
        " />

    <template v-slot:control>
      <q-carousel-control position="top-right" :offset="[18, 18]" class="text-white rounded-borders"
        style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px">
        <q-toggle dense dark color="orange" v-model="autoplay" label="Auto Play" />
      </q-carousel-control>

      <q-carousel-control position="bottom-right" :offset="[18, 18]" class="q-gutter-xs">
        <q-btn push round dense color="orange" text-color="black" icon="arrow_left" @click="$refs.carousel.previous()" />
        <q-btn push round dense color="orange" text-color="black" icon="arrow_right" @click="$refs.carousel.next()" />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
