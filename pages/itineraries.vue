<template>
  <google-map />
</template>

<script>
import GoogleMap from '@/components/Map.vue'
export default {
  head() {
    return {
      title: 'ItinerariesPage',
      script: [{
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDFXV0KyCo-R1fLti-Z4aIvBBfXccADqHM",
        hid: "map",
        defer: true,
      }]
    }
  },
  components: {
    GoogleMap,
  },

}
</script>