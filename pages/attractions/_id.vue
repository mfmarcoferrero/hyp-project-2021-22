<template>
  <div class="page container mt-5">

    <div class="container mb-5">
      <div class="row row-cols-1 row-cols-lg-2">
        <div class="col mb-3">
          <h1 class="title">{{ swapDashesAndCapitalize(name) }}</h1>
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
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col mb-3">
            <google-map :query="name"  height="400px"/>
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

    <!-- You may also like content -->

    <!--section id="other-attractions">
      <h1> You may also like </h1>
      <card-carousel></card-carousel>
    </section-->

  </div>
</template>

<style scoped>
</style>

<script>
import CommonMixin from '@/mixins/common.js'
import GoogleMap from '@/components/Map.vue'
import CardCarousel from '~/components/CardCarousel.vue'
export default {
  scrollToTop: true,
  name: 'DetailsPage',
  components: {
    GoogleMap,
    CardCarousel
},
  mixins: [CommonMixin],

  //Important for the SEO
  //head() {
  //   return {
  //     title: this.name
  //   }
  // },
  async asyncData({ route, $axios, redirect }) {
    const { id } = route.params
    const { data } = await $axios.get(`/api/pois/` + id)
    if (data == null){
      return redirect('/error/?err=This attraction does not exist!')
    }
    return {
      name: data.name,
      img: data.img,
      description: data.description,
    }
  },

  methods: {
    backToList() {
      this.$router.push('/attractions/list')
    }
  },
}
</script>