<template>
    <div class="row mt-5">
        <div style="height: 500px; width: 500px;" ref="map"></div>
    </div>
</template>

<script>
const apiKey = "AIzaSyDFXV0KyCo-R1fLti-Z4aIvBBfXccADqHM"
export default { 
  head() {
    return {
        title: 'Map',
        script: [{
            src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDFXV0KyCo-R1fLti-Z4aIvBBfXccADqHM",
            hid: "map", 
            defer: true,
        }]
    }
},

mounted(){
    const mapOptions = {
        zoom: 18,
        center: { lat: 43.758773, lng: -79.391785 },
        disableDefaultUI: true,
        zoomControl: true
    };

    const map = new window.google.maps.Map(this.$refs.map, mapOptions);
    const position = new window.google.maps.LatLng(43.758773, -79.391785)
    const marker = new window.google.maps.Marker({ position })
    marker.setMap(map)
},
};

</script>

<style scoped>
/* 
 * Always set the map height explicitly to define the size of the div element
 * that contains the map. 
 */
#map {
  height: 100%;
}

/* 
 * Optional: Makes the sample page fill the window. 
 */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>