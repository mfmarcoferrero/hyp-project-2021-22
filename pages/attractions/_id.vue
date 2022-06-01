<template>
  <div class="page container mt-5">

    <div class="container mb-5">
      <div class="row">
        <div class="col">
          <h1 class="title">{{ swapUnderscoresWithSpaces(name) }}</h1>
          <p>{{ description }}</p>
        </div>
        <div class="col">
          <img :src="img" class="rounded mx-auto img-fluid poi-img" />
        </div>
      </div>
    </div>

    <hr>
    <section id="info">
      <div class="container">
        <div class="row">
          <div class="col">
            <google-map :query="name" />
          </div>
          <div class="col">
            <h3 class="text-center">General Information</h3>
          </div>
        </div>
      </div>
    </section>
    <hr>

    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
      <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="backToList">
        Back to attractions
      </button>
    </div>
  </div>
</template>

<style scoped>
/*.poi-img {
  width: 700px;
  object-fit: cover;
}*/
.map-container {
  height: 300px;
}
</style>

<script>
import GoogleMap from '@/components/Map.vue'
export default {

  name: 'DetailsPage',
  components: {
    GoogleMap,
  },
  //mixins: [CommonMixin],

  //Important for the SEO
  // head() {
  //   return {
  //     title: this.name
  //   }
  // },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get(`/api/pois/` + id)
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
    swapUnderscoresWithSpaces(string) {
      return string.replace(/_/g, " ");
    }
  },

  params: {
    id: {
      type: Number,
      required: true,
    }
  }
}
</script>