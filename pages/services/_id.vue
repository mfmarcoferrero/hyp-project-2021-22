<template>
  <!-- div class="page container mt-4">
    <h1 class="title">{{ name }}</h1>
    <p>{{ description }}</p>
    <div class="mb-5">
      <img :src="img" class="rounded mx-auto d-block img-fluid"/>
    </div>
    <div class="mb-5">
      <h1 class="title">Map</h1>
      <p>Map</p>
    </div>
  </div>
  <div -->
  <div class="page container-fluid mt-4">
    <h1 class="title">{{ name }}</h1>
    <div class="row">
      <div class="col-6">
        <p>{{ description }}</p>
      </div>
      <div class="col">
        <img :src="img" class="rounded img-fluid" alt="...">
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'DetailsPage',
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/services/' + id)
    return {
      name: data.name,
      img: data.img,
      description: data.description,
    }
  },
}
</script>