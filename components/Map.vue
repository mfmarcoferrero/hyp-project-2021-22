<template>
    <div class="row mt-2">
        <div class="center" style="height: 500px; width: 1500px;" ref="map"></div>
    </div>
</template>

<script>
export default {
    mounted() {

        // if (typeof google === 'undefined') {
        //     const script = document.createElement('script')
        //     script.onload = this.onScriptLoaded
        //     script.type = 'text/javascript'
        //     script.src = `https://maps.googleapis.com/maps/api/jskey=${apiKey}`
        //     document.head.appendChild(script)
        // } else {
        //     this.onScriptLoaded()
        // }

        const mapOptions = {
            zoom: 18,
            center: { lat: 52.3676, lng: 4.9041 },
            disableDefaultUI: true,
            zoomControl: true
        };

        const map = new window.google.maps.Map(this.$refs.map, mapOptions);
        const position = new window.google.maps.LatLng(52.3676, 4.9041)
        const marker = new window.google.maps.Marker({ position })
        marker.setMap(map)
    },

}
</script>

<style>
</style>