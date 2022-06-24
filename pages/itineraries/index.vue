<template>
  <div class="wrapper page-container">
    <CoverImage :img="coverImg" title="Itineraries and Guided Tours" />

    <section id="topic-menu">
      <div class="container">
        <div class="row m-5">
          <div class="col-md m-2">
            <topic-card title="City Itineraries"
              img="https://s8.gifyu.com/images/808x454_cmsv2_b3d598a0-bec1-5f13-bc92-88ae94163b73-6744142.jpg"
              path="#itineraries" />
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

    <section id="itineraries">
      <hr class="m-5">
      <div class="container position-relative">
        <h2 class="second-title vl ms-5 mt-5 mb-4"> City Itineraries </h2>
        <p class="m-4 p-2">If you've only got a few days (or even a few hours) to see Amsterdam, you'll want to get the
          most out of your
          time here. Thankfully, Amsterdam is relatively small compared to other European capitals, and it's definitely
          possible to get a good taste of the city's best sights, attractions and experiences in a short space of time
          if you know where to go. Below you'll see some suggested itineraries for different lengths of trip - so
          whether you're here for a day or a week, here's some inspiration for the best things to see and do during your
          time in Amsterdam .</p>
        <p class="m-4 p-2">
          Amsterdam has something for everyone, but the sheer number of sights means that you might need some
          suggestions for where to start. Take a look at these itineraries to get inspiration for your next trip.
          Whether you’re here for a day or a week, we’ve got plenty of tips to keep you busy.
        </p>
        <div>
          <div class="row mt-5 mb-1 ms-4 me-4 row-cols-1 row-cols-lg-4">
            <div v-for="(itinerary, index) of itinerariesDetails" :key="`itinerary-index-${index}`" class="col">
              <topic-card :title="itinerary.name" :img="itinerary.img" :path="'/itineraries/' + itinerary.name"
                imgHeight="350px" class="mb-3" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr class="m-5">

    <section id="city-sightseeing">
      <div class="container position-relative">
        <h2 class="second-title vl ms-5 mt-5 mb-4">City Sightseeing Tours</h2>
        <div class="row mt-5 mb-1 ms-4 me-4 row-cols-1 row-cols-lg-2">
          <div class="col mb-4">
            <img src="https://s8.gifyu.com/images/sightseeing.webp" alt="No img"
              class="img-fluid border border-dark border-3 ">
          </div>
          <div class="col position-relative">
            <p class="ms-4 me-4">City Sightseeing Amsterdam offers the most convenient way to get around the city.
              Make
              use of the Hop On – Hop Off buses and boats to see all the best the city has to offer at your own pace.
              To
              make sure City Sightseeing Amsterdam fits your schedule you can choose between a 24- or a 48-hour
              ticket.
            </p>
            <p class="ms-4 me-4"> City Sightseeing Amsterdam will save you time and money during your stay in
              Amsterdam.
              Choose between a 24- or a 48 hour ticket and see all the best highlights in Amsterdam. You can hop on
              and
              off the buses and boats at every stop. The GPS audio guide on board is available in 18 languages and
              free
              Wi-Fi is included on all buses and boats. Download the free app and get a live view of what the routes
              of
              the buses and boats are, so you can reduce waiting times to a minimum. Get your tickets now and enjoy
              your
              holidays in Amsterdam to the fullest!
            </p>
          </div>
        </div>

        <div class="d-grid gap-2 mt-5 ms-4 me-4">
          <a href="https://www.citysightseeingamsterdam.nl/" target="_blank" class="btn btn-outline-dark"
            type="button"> Book a ticket </a>
        </div>

      </div>
    </section>

    <hr class="m-5">

    <section id="canal-cruises">
      <div class="container position-relative">
        <h2 class="second-title vl ms-5 mt-5 mb-4">Canal Cruises</h2>

        <div class="row mt-5 ms-4 me-4 row-cols-1 row-cols-lg-2">

          <img src="https://s8.gifyu.com/images/14896f158a325e49575.jpg" alt="No img"
            class="border border-dark border-3 p-0 img-cruiser">

          <div class="col mb-0">
            <p class="mt-5">
              <br><br>
              The Dutch capital is undeniably gorgeous – but during a canal cruise you can see the city in a whole
              different light. During your Amsterdam canal cruise you’ll see the beautiful facades of stately canal
              houses gliding past you … and look! There’s the Westerkerk and the Anne Frank House! And did you see those
              gorgeous houseboats? Amsterdam’s canals are a total must-see.<br><br> Amsterdam’s canal ring is so
              gorgeous, it’s
              UNESCO World Heritage! Book your ticket for an Amsterdam canal tour now and let the city enchant you!
              We’ve got canal cruises in Amsterdam for both young and old; truly everyone can enjoy a canal tour in this
              amazing city.
            </p>
          </div>
          <div class="col mt-5 mb-0">
            <google-map query="amsterdam canal cruise" />
          </div>
        </div>
        <div class="d-grid gap-2 ms-4 me-4">
          <a href="https://amsterdamcanalcruises.nl/canal-cruises/" target="_blank" class="btn btn-outline-dark"
            type="button"> Book a ticket </a>
        </div>
      </div>
    </section>


  </div>
</template>

<script>

import Card from '@/components/Card.vue'
import Masonry from '@/components/Masonry.vue'
import HoverCard from '@/components/HoverCard.vue'
import TopicCard from '@/components/TopicCard.vue'
import CoverImage from '~/components/CoverImage.vue'
import GoogleMap from '@/components/Map.vue'

export default {
  name: 'ItinerariesPage',

  components: {
    Card,
    Masonry,
    HoverCard,
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
          content:
            '',
        },
      ],
    }
  },

  data() {
    return {
      itinerariesDetails: [],
      coverImg: "https://s8.gifyu.com/images/adrien-olichon-QRtym77B6xk-unsplash.jpg"
    }
  },

  async asyncData({ $axios }) {
    //Database table to populate service image, service description and markers array to show on map
    return $axios.get('/api/itineraries').then(async itineraries => {
      for (let itinerary of itineraries.data) {
        let pois = []
        const { data } = await $axios.get('/api/poisOfItinerary/' + itinerary.name)
        for (let item of data) {
          pois.push((await $axios.get('/api/pois/' + item.pointofinterestName)).data)
        }
        itinerary.pois = pois
      }
      console.log(itineraries.data)
      return { itinerariesDetails: itineraries.data }
    })
      .catch(err => {
        console.log(err)
      })
  },

  methods: {
    goTo(name) {
      this.$router.push(`/itineraries/${name}`)
    },
    async getPois(name) {
      try {
        let pois = []
        const { data } = await this.$axios.get('/api/poisOfItinerary/' + name)
        for (let item of data) {
          pois.push((await this.$axios.get('/api/pois/' + item.pointofinterestName)).data)
        }
        console.log(pois)
        return pois
      } catch (err) {
        console.log(err)
      }
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
