<template>
  <div class="">
    <div class="container mb-5 mt-5">
      <div class="row">
        <div class="col">
          <h1 class="title second-title vl mb-3">{{ name }}</h1>
          <p>{{ description }}</p>
        </div>
        <!--div class="col">
          <img :src="img" class="rounded mx-auto img-fluid poi-img" />
        </div-->
      </div>
    </div>

    <!--hr /-->
    <section id="info">
      <div class="container mt-5">
        <div class="row mb-3">
          <h2 class="">The places in this itinerary</h2>
        </div>
        <!--p>
          We suggest to visit these places in the given order, but feel free to
          pick any order you wish and also complement it with other interesting
          places to explore during your stay!
        </p-->
      </div>
    </section>

    <section id="card-carousel">
      <card-carousel
        :detailMatrix="generateMatrixFromArray(poisOfItinerary, 4)"
        class="mb-5"
      />
    </section>
    <hr />

    <section id="map">
      <div class="container mt-5">
        <div class="row mb-3">
          <h2 class="title second-title vl">Itinerary map</h2>
        </div>
        <div class="row mb-5">
        <p>
          This is a map of all the attractions you will visit if you choose to
          enbark on this itinerary. The points are numbered and a path is
          already layed out for you to follow, but you can visit these places in
          any order you want!
        </p>
        </div>
        <div class="row mb-5 justify-content-center">
          <img
            src="https://cdn.shopify.com/s/files/1/1261/5247/products/Amsterdam_city_map_vector_edit_centre_1024x1024.JPG?v=1571294389"
            alt="map not loaded"
            class="img-fluid rounded-start"
          />
        </div>
      </div>
    </section>

    <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
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
    const { data: poisOfItinerary } = await $axios.get(
      `/api/poisByItinerary/` + id
    )
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
