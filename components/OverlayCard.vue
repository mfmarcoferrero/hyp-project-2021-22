<template>
  <div class="card shadow-lg p-0 mb-5 text-white">
    <img :src="img" class="card-img" alt="No image found">
    <div class="card-img-overlay">
      <h3 class="card-title text-center">{{ name }}</h3>
      <p class="card-text text-center">{{ description }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'OverlayCardComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/details/${this.id}`)
    },
  },
}
</script>

<style>
</style>