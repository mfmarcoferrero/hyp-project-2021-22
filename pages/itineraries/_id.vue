<template>
  <div class="page container mt-5">
    <div class="container mb-5">
      <div class="row">
        <div class="col">
          <h1 class="title">{{ name }}</h1>
          <p>{{ description }}</p>
        </div>
        <div class="col">
          <img :src="img" class="rounded mx-auto img-fluid poi-img" />
        </div>
      </div>
    </div>

    <hr />
    <section id="info">
      <div class="container">
        <div class="row">
          <div class="col">
            <google-map :query="name" />
          </div>
          <div class="col">
            <h3 class="text-center">General Information</h3>
            <accordion :serviceDetails="poisOfItinerary" />
          </div>
        </div>
      </div>
    </section>
    <hr />

    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4"
        @click="backToList"
      >
        Back to itineraries
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
import Accordion from '@/components/Accordion.vue'
export default {
  scrollToTop: true,
  name: 'DetailsPage',
  components: {
    GoogleMap,
    CardCarousel,
    Accordion,
  },

  data() {
    return {
      itinerariesDetails: [],
    }
  },

  mixins: [CommonMixin],

  //Important for the SEO
  //head() {
  //   return {
  //     title: this.name
  //   }
  // },
  async asyncData({ route, $axios }) {
    
    const { id } = route.params
    const { data: itineraryInfo } = await $axios.get(`/api/itineraries/` + id)
    console.log(id)
    const { data: poisOfItinerary } = await $axios.get(`/api/poisByItinerary/` + id)
    return {
      name: itineraryInfo.name,
      img: itineraryInfo.img,
      description: itineraryInfo.description,
      poisOfItinerary: poisOfItinerary,
    } 
    
  },

  methods: {
    backToList() {
      this.$router.push('/itinerary/list')
    },
  },
}
</script>
