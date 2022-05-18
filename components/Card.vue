<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="img" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
      <nuxt-link :to="'/'+path+'/'+id" class="btn btn-primary">Go to {{ name }}</nuxt-link>
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
    path: {
      type: String,
      required: true
    }
  },
}
</script>

<style>
</style>