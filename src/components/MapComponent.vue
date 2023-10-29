<template>
  <div class="row justify-center">
    <iframe width="600" height="450" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade"
      :src="mapUrl" allowfullscreen>
    </iframe>
  </div>
</template>

<script>
export default {
  props: {
    // You can pass the address as a prop to dynamically generate the map URL
    address: {
      type: String,
      required: true
    }
  },
  computed: {
    // Computed property to generate the dynamic map URL based on the passed address prop
    mapUrl() {
      const apiKey = 'YOUR_GOOGLE_API_KEY'; // Replace with your Google Maps API Key
      const formattedAddress = encodeURIComponent(this.address);
      return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${formattedAddress}`;
    }
  }
};
</script>

<style scoped>
/* Add any specific styles for your map component */
</style>
