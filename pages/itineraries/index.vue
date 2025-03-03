<template>
  <!-- COVERIMAGE COMPONENT -->
  <div class="page-container">
    <CoverImage :img="coverImg" title="Itineraries and Guided Tours" />

    <!-- NAVIGATION TOPIC CARDS -->
    <section id="topic-menu">
      <div class="section-container mt-5">
        <div class="row">
          <div class="col-md m-2">
            <topic-card title="City Itineraries"
              img="https://s8.gifyu.com/images/808x454_cmsv2_b3d598a0-bec1-5f13-bc92-88ae94163b73-6744142.jpg"
              path="#city-itineraries" />
          </div>
          <div class="col-md m-2">
            <topic-card title="City Sightseeing"
              img="https://s8.gifyu.com/images/91a051430ab15c667bad0d64bba0ff45299d9f28.jpg" path="#city-sightseeing" />
          </div>
          <div class="col-md m-2">
            <topic-card title="Canal Cruises" img="https://s8.gifyu.com/images/14896f158a325e49575.jpg"
              path="#canal-cruises" />
          </div>
        </div>
      </div>
    </section>

    <!-- GENERAL DESCRIPTION OF ITINERARIES -->
    <section id="city-itineraries">
      <hr class="m-5">
      <div class="section-container position-relative">
        <h2 class="second-title vl mt-5 mb-4"> {{ titleItineraries }} </h2>
        <p class="p-2"> {{ generalDescription }} </p>
        <p class="p-2"> {{ generalDescription2 }} </p>
        <div>
          <div class="row mt-5 mb-1 row-cols-1 row-cols-lg-4">
            <div v-for="(itinerary, index) of itinerariesDetails" :key="`itinerary-index-${index}`" class="col">
              <topic-card :title="itinerary.name" :img="itinerary.img" :path="'/itineraries/' + itinerary.name"
                 class="mb-3" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr class="m-5">

    <!-- CITY SIGHTSEEING SECTION -->
    <section id="city-sightseeing">
      <div class="section-container position-relative">
        <h2 class="second-title vl mt-5 mb-4"> {{ tours }} </h2>
        <div class="row mt-5 mb-1 row-cols-1 row-cols-lg-2">
          <div class="col mb-4">
            <img src="https://s8.gifyu.com/images/sightseeing.webp" alt="No img"
              class="img-fluid border border-dark border-3 ">
          </div>
          <div class="col position-relative">
            <p class="ms-4 me-4"> {{ toursDescription }} </p>
            <p class="ms-4 me-4"> {{ toursDescription2 }} </p>
          </div>
        </div>

        <div class="d-grid gap-2 p-5">
          <a href="https://www.citysightseeingamsterdam.nl/" target="_blank" class="btn btn-outline-dark"
            type="button"> {{ bookTicket }} </a>
        </div>

      </div>
    </section>

    <hr class="m-5">

    <!-- CANAL CRUISES SECTION -->
    <section id="canal-cruises">
      <div class="section-container position-relative">
        <h2 class="second-title vl mt-5 mb-4"> {{ canal }} </h2>

        <div class="row mt-5 row-cols-1 row-cols-lg-2">

          <img src="https://s8.gifyu.com/images/14896f158a325e49575.jpg" alt="No img"
            class="border border-dark border-3 p-0 img-cruiser">

          <div class="col mb-0">
            <p class="mt-3"> {{ canalDescription }} </p>
          </div>
          <div class="col mt-5 mb-0">
            <google-map query="amsterdam canal cruise" />
          </div>
        </div>
        <div class="d-grid gap-2 p-5">
          <a href="https://amsterdamcanalcruises.nl/canal-cruises/" target="_blank" class="btn btn-outline-dark"
            type="button"> {{ bookTicket }} </a>
        </div>
      </div>
    </section>


  </div>
</template>

<script>

import Card from '@/components/Card.vue'
import TopicCard from '@/components/TopicCard.vue'
import CoverImage from '~/components/CoverImage.vue'
import GoogleMap from '@/components/Map.vue'

export default {
  name: 'ItinerariesPage',
  scrollToTop: true,
  components: {
    Card,
    TopicCard,
    CoverImage,
    GoogleMap
  },

  head() {
    return {
      title: 'Visit-DAM | Itineraries',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Itineraries and guided tour are the best way to explore the city of Amsterdam, saving time and without missing any important attraction or experience. You can choose from a different days itineraries that will perfectly fit your stay in the city.',
        },
      ],
    }
  },

  data() {
    // strings are stored in data to facilitate edits and future translation implementations
    return {
      itinerariesDetails: [],
      coverImg: "https://s8.gifyu.com/images/adrien-olichon-QRtym77B6xk-unsplash.jpg",
      titleItineraries: "City Itineraries",
      generalDescription: "If you've only got a few days (or even a few hours) to see Amsterdam, you'll want to get the\n" +
        "          most out of your\n" +
        "          time here. Thankfully, Amsterdam is relatively small compared to other European capitals, and it's definitely\n" +
        "          possible to get a good taste of the city's best sights, attractions and experiences in a short space of time\n" +
        "          if you know where to go. Below you'll see some suggested itineraries for different lengths of trip - so\n" +
        "          whether you're here for a day or a week, here's some inspiration for the best things to see and do during your\n" +
        "          time in Amsterdam .",
      generalDescription2: "Amsterdam has something for everyone, but the sheer number of sights means that you might need some\n" +
        "          suggestions for where to start. Take a look at these itineraries to get inspiration for your next trip.\n" +
        "          Whether you’re here for a day or a week, we’ve got plenty of tips to keep you busy.",
      tours: "City Sightseeing Tours",
      toursDescription: "City Sightseeing Amsterdam offers the most convenient way to get around the city.\n" +
        "              Make\n" +
        "              use of the Hop On – Hop Off buses and boats to see all the best the city has to offer at your own pace.\n" +
        "              To\n" +
        "              make sure City Sightseeing Amsterdam fits your schedule you can choose between a 24- or a 48-hour\n" +
        "              ticket.",
      toursDescription2: "City Sightseeing Amsterdam will save you time and money during your stay in\n" +
        "              Amsterdam.\n" +
        "              Choose between a 24- or a 48 hour ticket and see all the best highlights in Amsterdam. You can hop on\n" +
        "              and\n" +
        "              off the buses and boats at every stop. The GPS audio guide on board is available in 18 languages and\n" +
        "              free\n" +
        "              Wi-Fi is included on all buses and boats. Download the free app and get a live view of what the routes\n" +
        "              of\n" +
        "              the buses and boats are, so you can reduce waiting times to a minimum. Get your tickets now and enjoy\n" +
        "              your\n" +
        "              holidays in Amsterdam to the fullest!",
      bookTicket: "Book a ticket",
      canal: "Canal Cruises",
      canalDescription: "\n\nThe Dutch capital is undeniably gorgeous – but during a canal cruise you can see the city in a whole\n" +
        "              different light. During your Amsterdam canal cruise you’ll see the beautiful facades of stately canal\n" +
        "              houses gliding past you … and look! There’s the Westerkerk and the Anne Frank House! And did you see those\n" +
        "              gorgeous houseboats? Amsterdam’s canals are a total must-see.\n\n Amsterdam’s canal ring is so\n" +
        "              gorgeous, it’s\n" +
        "              UNESCO World Heritage! Book your ticket for an Amsterdam canal tour now and let the city enchant you!\n" +
        "              We’ve got canal cruises in Amsterdam for both young and old; truly everyone can enjoy a canal tour in this\n" +
        "              amazing city."
    }
  },

  async asyncData({ $axios }) {
    // Data fetching from DB
    const { data } = await $axios.get('/api/itineraries')
    return {
      itinerariesDetails: data,
    }
  },

  methods: {
    goTo(name) {
      this.$router.push(`/itineraries/${name}`)
    }
  }
}

</script>

<style scoped>
.img-cruiser {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>
