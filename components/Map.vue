<!-- 
    Component: Map
    Description: Iframe to render a google map. To visualize pins inside the map, 
                 a query to the google map service is done.
                 It is the only possibility to visualize multiple pins with this specific iframe definition
    Use: _id pages, contacts
    Props: 
      query -> string to perform a search on the google maps service
      width -> width dimension of the iframe (its default value is 100% of the width of its container)
      height -> height dimension of the iframe (its default value is 100% of the height of its container)
         
-->

<template>
  <div :style="'width:'+ width + ';' +  'height:'+ height + ';'">

    <!-- Loading attribute lazy means that the page is rendered even if the map is still loading -->

    <iframe :style="'width:'+ width + ';' +  'height:'+ height + ';'" style="border:0" loading="lazy" allowfullscreen
      referrerpolicy="no-referrer-when-downgrade" :src="link + query + ' amsterdam'"></iframe>

  </div>
</template>

<script>
export default {

  name: 'Map',
  data() {
    return {
      link: process.env.MAPS_KEY, //process variable to define API Google Maps key
    }
  },
  props: {
    query: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    }
  },
};

</script>

<style scoped>
/* Some extra style definition for the map */

iframe {
  border-radius: 10px;
  position: relative;
}
</style>