<template>
  <div class="page-container mt-5">

    <!-- DESCRIPTION SECTION CONTAINS EVENT NAME, DESCRIPTION AND IMAGE PULLED FROM DB-->
    <section id="description">
      <div class="section-container mb-5">
        <h1 class="title text-center ">{{ swapDashesAndCapitalize(name) }}</h1>
        <div class="row row-cols-1 row-cols-lg-2 mt-5">
          <div class="col">
            <p class="p-4">{{ description }}</p>
          </div>
          <div class="col">
            <img :src="img" alt="No img" class="img-fluid id-img">
          </div>
        </div>
      </div>
    </section>

    <hr>

    <!-- INFO SECTIONS CONTAINS GMAP COMPONENT AND GENERAL INFORMATION LIKE TIME AND PLACE -->
    <section id="info">
      <div class="section-container mt-3">
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col">
            <google-map :query="location" height="400px" />
          </div>
          <div class="col">
            <div class="">
              <h2 class="text-center"> {{ generalInformation }} </h2>
            </div>
            <br>

            <div class="row row-cols-2 ms-3">
              <div class="icon-item col-1">
                <span :class="locationIcon"></span>
              </div>
              <div class="col event-card-text ms-1">
                <span class="fs-4">
                  <nuxt-link :to="`/attractions/` + location">
                    {{ location }}
                  </nuxt-link>
                </span>
              </div>
            </div>

            <div class="row row-cols-2 m-3">
              <div class="icon-item col-1">
                <span :class="dateIcon"></span>
              </div>
              <div class="col event-card-text ms-1">
                <span class="fs-4">{{ when }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NAVBACK BUTTON -->
    <div class="section-container d-grid gap-2 d-md-flex justify-content-md-start mb-b mt-5">
      <button type="button" class="btn btn-outline-dark btn-lg px-4" @click="backToList">
        {{ backToEvents }}
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
    CardCarousel
  },
  mixins: [CommonMixin],


  head() {
    return {
      title: 'Visit-DAM | ' + this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.name + ' : join this amazing event.',
        },
      ],
    }
  },

  data() {
    // strings are stored in data to facilitate edits and future translation implementations
    return {
      locationIcon: 'mdi mdi-map-marker',
      dateIcon: 'mdi mdi-timer',
      generalInformation: "General Information",
      backToEvents: "Back to events"
    }
  },
  // Api call with error management if queried ID does not exist
  async asyncData({ route, $axios, redirect }) {
    const { id } = route.params
    const { data } = await $axios.get(`/api/events/` + id)
    if (data == null) {
      return redirect('/error/?err=This event does not exist!')
    }
    return {
      name: data.name,
      location: data.location,
      img: data.img,
      description: data.description,
      when: data.when
    }
  },

  methods: {
    backToList() {
      this.$router.push('/events')
    },
    goToAttraction() {
      this.$router.push('/attractions' + location)
    }
  },
}
</script>

<style scoped>

/* Event content styling to fit the cards recipient */

.id-img {
  width: 100%;
  height: 100%;
}

.icon-item {
  font-size: 35px;
}

.event-card-text {
  padding-top: 6px;
}
</style>
