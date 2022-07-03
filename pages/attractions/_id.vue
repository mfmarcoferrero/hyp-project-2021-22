<template>
  <div class="page-container mt-5">

    <!-- DESCRIPTION SECTION CONTAINS NAME AND DESCRIPTION PULLED FROM DB-->
    <section id="description">
      <div class="section-container mb-5">
        <h1 class="title text-center">{{ swapUnderscoresWithSpaces(name) }}</h1>
        <div class="row row-cols-1 row-cols-lg-2 mt-5">
          <div class="col">
            <p class="p-4">{{ description }}</p>
          </div>
          <div class="col">
            <img :src="img" alt="No img" class="img-fluid id-img" />
          </div>
        </div>
      </div>
    </section>

    <hr />

    <!-- INFO SECTION CONTAINS GENERAL INFO (LIKE TICKETS LINK IF ANY) AND CORRELATED INFO -->
    <section id="info">
      <div class="section-container mt-3">
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col mb-3">
            <google-map :query="name" height="400px" />
          </div>
          <div class="col">
            <div class="">
              <h2 class="text-center"> {{ relatedInformations }} </h2>
            </div>
            <br />
            <div v-if="time != null" class="row row-cols-2 ms-3">
              <div class="icon-item col-1">
                <span class="mdi mdi-timer"></span>
              </div>
              <div class="col event-card-text ms-1">
                <span class="fs-4">
                  {{ time }}
                </span>
              </div>
            </div>
            <div v-if="link != null" class="row row-cols-2 m-3">
              <div class="icon-item col-1">
                <span class="mdi mdi-ticket-confirmation"></span>
              </div>

              <div class="col event-card-text ms-1">
                <a
                  :href="link"
                  target="_blank"
                  class="btn btn-outline-dark"
                  type="button"
                >
                  Book a ticket
                </a>
              </div>
            </div>

            <br />
            <div class="row row-cols ms-3">
              <h3 class=""> {{ events }} {{ takingPlace }}</h3>
              <ul>
                <p v-if="numberOfEvents == 0">
                  <strong>{{  noEvents }}</strong>
                </p>
                <li v-for="(item, index) of eventList" :key="index">
                  <nuxt-link :to="`/events/` + item.name">
                    <strong> {{ swapDashesAndCapitalize(item.name) }} </strong>
                  </nuxt-link>
                </li>
              </ul>
              <h3 class="">{{ itineraries }} {{ includeThisPlace }}</h3>
              <ul>
                <li v-for="(item, index) of itineraryList" :key="index">
                  <nuxt-link :to="`/itineraries/` + item.name">
                    <strong> {{ item.name }} </strong>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="
        section-container
        d-grid
        gap-2
        d-md-flex
        justify-content-md-start
        mb-b
        mt-5
      ">
      <button type="button" class="btn btn-outline-dark btn-lg px-4" @click="backToList">
        {{ backToAttractions }}
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
        relatedInformations: "Related informations",
        events: "Events",
        takingPlace: "taking place here",
        noEvents: "There are currently no events scheduled here!",
        itineraries: "Itineraries",
        includeThisPlace: "that include this place",
        backToAttractions: "Back to all the attractions"
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
          content: this.name + ': ' + this.shortDescription,
        },
      ],
    }
  },

  async asyncData({ route, $axios, redirect }) {
    // Pulling info from DB
    let numberOfEvents
    const { id } = route.params
    const { data: poiInfo } = await $axios.get(`/api/pois/` + id)
    const { data: eventList} = await $axios.get(`/api/eventsByPlace/` + id)
    const { data: itineraryList} = await $axios.get(`/api/itinerariesByPlace/` + id)
    numberOfEvents = Object.keys( eventList ).length
    console.log(numberOfEvents)
    // Error management
    if (poiInfo == null || eventList == null) {
      return redirect('/error/?err=This attraction does not exist!')
    }
    return {
      name: poiInfo.name,
      img: poiInfo.img,
      shortDescription: poiInfo.shortDescription,
      description: poiInfo.description,
      link: poiInfo.link,
      time: poiInfo.timetable,
      itineraryList : itineraryList,
      eventList: eventList,
      numberOfEvents: numberOfEvents,
    }
  },

  methods: {
    backToList() {
      this.$router.push('/attractions/list')
    },
  },
}
</script>
