<template>
  <div class="page-container">

    <section id="title-description">
      <div class="section-container">
        <h1 class="text-center m-5">{{ name }}</h1>
        <p>{{ description }}</p>
      </div>
    </section>

    <section id="attractions-list">
      <div class="section-container">
        <h2 class="second-title vl mt-5">The places in this itinerary</h2>
      </div>
      <card-carousel :detailMatrix="generateMatrixFromArray(poisOfItinerary, 4)" class="mb-5" />
    </section>

    <hr class="m-5" />

    <section id="map">
      <div class="section-container mt-5">
        <div class="row mb-3">
          <h2 class="second-title vl">Itinerary map</h2>
        </div>
        <p>
          This is a map of all the attractions you will visit if you choose to
          enbark on this itinerary. The points are numbered and a path is
          already layed out for you to follow, but you can visit these places in
          any order you want!
        </p>

      </div>
    </section>

    <div class="d-grid gap-2 d-md-flex justify-content-center m-5">
      <button type="button" class="btn btn-outline-dark btn-lg px-4" @click="backToList">
        Back to itineraries
      </button>
    </div>

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
    CardCarousel,
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
