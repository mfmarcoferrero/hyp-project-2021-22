<template>
  <div class="page-container">
    <!-- SECTION CONTAINING DESCRIPTION AND PHOTO OF ITINERARY -->
    <section id="title-description">
      <div class="section-container">
        <h1 class="text-center m-5">{{ name }}</h1>
        <p class="mb-1 p-0">{{ description }}</p>
        <ul class="nav nav-pills mb-0 " id="pills-tab" role="tablist">
          <li v-for="(item, index) of poisOfItinerary" :key="index" class="nav-item d-grid m-0 p-0" role="presentation">
            <p class="fw-bold m-0">{{item.name}}:</p>
            <p class="m-0">{{ item.short_description }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- THIS SECTION CONTAINS A CARD CAROUSEL WITH ALL POIS COTAINED IN THE ITINERARY -->
    <section id="attractions-list">
      <div class="section-container">
        <h2 class="second-title vl mt-5"> {{ placeOfItinerary }} </h2>
      </div>
      <card-carousel
        :detailMatrix="generateMatrixFromArray(poisOfItinerary, 4)"
        class="mb-5"
      />
    </section>

    <hr class="m-5" />


    <!-- THIS SECTION CONTAINES AN ITINERARY MAP, MADE WITH MYGOOGLEMAPS AND IMPLEMENTED WITH IFRAMES -->
    <section id="map">
      <div class="section-container mt-5">
        <div class="row mb-3">
          <h2 class="second-title vl"> {{ itineraryMap }} </h2>
        </div>
        <p> {{ mapDescription }} </p>
        <iframe
          :src="src"
          width="100%"
          height="480"
        ></iframe>
      </div>
    </section>

    <!-- NAVBACK BUTTON -->
    <div class="d-grid gap-2 d-md-flex justify-content-center m-5">
      <button
        type="button"
        class="btn btn-outline-dark btn-lg px-4"
        @click="backToList">
        {{ backToItineraries }}
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
    // strings are stored in data to facilitate edits and future translation implementations
    return {
      itinerariesDetails: [],
      placeOfItinerary: "The places in this itinerary",
      itineraryMap: "Itinerary map",
      mapDescription: "This is a map of all the attractions you will visit if you choose to\n" +
        "          enbark on this itinerary. The points are numbered and a path is\n" +
        "          already layed out for you to follow, but you can visit these places in\n" +
        "          any order you want!",
      backToItineraries: "Back to itineraries"
    }
  },

  mixins: [CommonMixin],


  head() {
    return {
      title: 'Visit-DAM | ' + this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.name + ': discover the beauty of Amsterdam with this amazing tour and experience',
        },
      ],
    }
  },
  // Data fetching from DB
  async asyncData({ route, $axios, redirect }) {
    const { id } = route.params
    const { data: itineraryInfo } = await $axios.get(`/api/itineraries/` + id)
    console.log(id)
    const { data: poisOfItinerary } = await $axios.get(
      `/api/poisOfItinerary/` + id
    )
    // Error management
    if (itineraryInfo == null){
      return redirect('/error/?err=This itinerary does not exist!')
    }
    return {
      name: itineraryInfo.name,
      img: itineraryInfo.img,
      description: itineraryInfo.description,
      src: itineraryInfo.maplink,
      poisOfItinerary: poisOfItinerary,
    }
  },

  methods: {
    backToList() {
      this.$router.push('/itineraries')
    },
  },
}
</script>
