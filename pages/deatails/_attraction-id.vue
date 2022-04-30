<template>
  <div class="page container mt-5">
    <p>{{ name }}</p>
    <p>{{ description }}</p>
    <img :src="img" alt="" />
  </div>
</template>


<script>
export default {
  name: 'DetailsPage',
  async asyncData({ route, $axios }) {
    // console.log(route.params.id)
    const { id } = route.params
    const { data } = await $axios.get('/api/cats/' + id)
    return {
      name: data.name,
      breed: data.breed,
      img: data.img,
      description: data.description,
    }
  },
}
</script>