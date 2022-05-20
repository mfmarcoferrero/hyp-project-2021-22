<template>
  <div class="page container mt-4">
    <h1 class="title">{{ name }}</h1>
    <p>{{ description }}</p>
    <div class="mb-5">
      <img :src="img" class="rounded mx-auto d-block img-fluid" />
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
      <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="backToList">
        Back to attractions
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'DetailsPage',
  //mixins: [CommonMixin],

  //Important for the SEO
  // head() {
  //   return {
  //     title: this.name
  //   }
  // },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/pois/' + id)
    return {
      name: data.name,
      img: data.img,
      description: data.description,
    }
  },

  // mounted(){
  //   const date = new Date()
  //   // Example on how to use mixinx
  //   console.log(this.formatMyDate(date.toLocaleDateString()))
  // },
  methods: {
     backToList() {
       this.$router.push('/attractions')
     },
  },
}
</script>