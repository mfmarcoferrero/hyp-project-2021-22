<template>
  <div class="wrapper page-container mt-5">
    <h1 class="text-center mt-4">Itineraries page</h1>
    <div v-for="(itinerary, index) of itinerariesDetails" :key="`itinerary-index-${index}`">
      <div class="row mt-5 mb-1 px-5">
        <div class="col ">
          <div class="card">
            <img class="itinerary-img card-img-top" :src=itinerary.img alt="Card image" style="width:100%"
              v-on:click="goTo(itinerary.name)">
            <div class="card-body">
              <h4 class="card-title">{{ itinerary.name }}</h4>
              <p class="card-text">{{ itinerary.description }}</p>
              <nuxt-link :to="`/itineraries/${itinerary.name}`" class="btn btn-primary">See Itinerary</nuxt-link>
            </div>
          </div>
        </div>
        <div class="col ">
          <div v-for="(poi, poiIndex) of itinerariesDetails" :key="`poi-index-${poiIndex}`">
            <div class="row g-4">
              <div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import Card from '@/components/Card.vue'
import Masonry from '@/components/Masonry.vue'
import HoverCard from '@/components/HoverCard.vue'

export default {
  name: 'ItinerariesPage',

  components: {
    Card,
    Masonry,
    HoverCard
  },

  async asyncData({ $axios }) {
    //Database table to populate service image, service description and markers array to show on map
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
.itinerary-img {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>
