<template>
<div style="border-radius: 10px; width: 600px; height: 450px; overflow: hidden;"> 
    <iframe
    width="600"
    height="450"
    style="border:0"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    :src="link"
    ></iframe>
</div>
</template>

<script>
export default { 

  name: 'Map', 
  data() {
    return {
        link: "https://www.google.com/maps/embed/v1/search?key=AIzaSyDh_I2tRIFiqGYfIZFTzxZyiqCW6B0K-mo&q=hospital+in+Amsterdam"
    }
},

mounted(){

},
};

</script>

<style scoped>

</style>