<template>
  <div :style="'width:'+ width + ';' +  'height:'+ height + ';'">
    <iframe :style="'width:'+ width + ';' +  'height:'+ height + ';'" style="border:0" loading="lazy" allowfullscreen
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

iframe {
  border-radius: 10px;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>