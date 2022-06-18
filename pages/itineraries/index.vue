<template>
  <div class="wrapper page-container mt-5">
    <h1 class="text-center mt-4">Itineraries page</h1>
    <div v-for="(itinerary, index) of itinerariesDetails"
         :key="`itinerary-index-${index}`">
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
        <div class="col">
          <div class = "row row-cols-1 row-cols-md-2 g-4">
            <div v-for="(poi, poiIndex) of itinerary.pois"
          :key="`poi-index-${poiIndex}`">
            <div class="col">
            <div class="card h-100 w-60">
              <img :src=poi.img class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{poi.name}}</h5>
                <p class="card-text">{{poi.shortDescription}}</p>
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
  data(){
    return {
      itinerariesDetails: []
    }
  },

  async asyncData({$axios}) {
    //Database table to populate service image, service description and markers array to show on map
    return $axios.get('/api/itineraries').then(async itineraries => {
      for (let itinerary of itineraries.data) {
        let pois = []
        const {data} = await $axios.get('/api/poisOfItinerary/' + itinerary.name)
        for (let item of data) {
          pois.push((await $axios.get('/api/pois/' + item.pointofinterestName)).data)
        }
        itinerary.pois = pois
      }
      console.log(itineraries.data)
      return {itinerariesDetails: itineraries.data}
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
        const {data} = await this.$axios.get('/api/poisOfItinerary/' + name)
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
.itinerary-img{
  width:100%;
  height:15vw;
  object-fit:cover;
}

</style>
