<template>
  <div class="wrapper">
    <iframe width="100%" height="100%" style="border:0" loading="lazy" allowfullscreen
      referrerpolicy="no-referrer-when-downgrade" :src="link + query"></iframe>
  </div>
</template>

<script>
export default {

  name: 'Map',
  data() {
    return {
      link: process.env.MAPS_KEY,
    }
  },
  props: {
    query: {
      type: String,
      required: true
    }
  },
};

</script>

<style scoped>
.wrapper {
  position: relative;
  padding-bottom: 75%;
}

iframe {
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>