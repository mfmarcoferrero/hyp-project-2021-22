<template>
  <div class="wrapper page-container">
    
    <CoverImage :img="coverImg" title="Itineraries and Guided Tours"/>
    <h1 class="text-center m-5">Explore Amsterdam with Guided Tours</h1>
    <div v-for="(itinerary, index) of itinerariesDetails" :key="`itinerary-index-${index}`" class="container position-relative pb-5">
      <div class="row mt-5 mb-1 px-5">
        <div class="col ">
          <topic-card :title="itinerary.name" :img="itinerary.img" :path="'/itineraries/' + itinerary.name" class="mb-3" />
          <p class="p-2">{{ itinerary.description }}</p>
        </div>
        <div class="col">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div v-for="(poi, poiIndex) of itinerary.pois" :key="`poi-index-${poiIndex}`">
              <div class="col mb-1">
                <card :img="poi.img" :name="poi.name" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-5">
    </div>
  </div>

</template>

<script>

import Card from '@/components/Card.vue'
import Masonry from '@/components/Masonry.vue'
import HoverCard from '@/components/HoverCard.vue'
import TopicCard from '@/components/TopicCard.vue'
import CoverImage from '~/components/CoverImage.vue'

export default {
  name: 'ItinerariesPage',

  components: {
    Card,
    Masonry,
    HoverCard,
    TopicCard,
    CoverImage
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
.itinerary-img {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>
