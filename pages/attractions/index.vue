<template>
  <div class="page-container mt-5">
    <!--h1 class="text-center">Attractions page</!--h1>
    <div class="row justify-content-center">
      <overlay-card
        v-for="(poi, poiIndex) of poiList"
        class="col-lg-11 m-3"
        :key="`poi-index-${poiIndex}`"
        :name="poi.name"
        :img="poi.img"
        :description="poi.description"
        path="attractions"
      />
    </div>
    <hr>
    <h1 class="text-center">Attractions page</h1>     
    <div-- class="container mb-5">
      <h2 class="second-title vl"> Most visited attractions </h2>
      <div class="row mb-4">
        <div class="col">
          <card :name="name" :img="img" class="position-center"></card>
        </div>
        <div class="col">
          <card :name="name" :img="img"></card>
        </div>
      </div>
      <div class="row">
         <div class="col">
          <card :name="name" :img="img"></card>
        </div>
         <div class="col">
          <card :name="name" :img="img"></card>
        </div>
         <div class="col">
          <card :name="name" :img="img"></card>
        </div>
      </div>
    </div-->
    <section id="card-carousel">
      <card-carousel></card-carousel>
    </section>
  </div>
</template>

<script>
import OverlayCard from '~/components/OverlayCard.vue';
import Card from '~/components/Card.vue';
import CardCarousel from '~/components/CardCarousel.vue';
export default {
  name: 'AttractionsPage',
  title: 'Attractions',
  components: {
    OverlayCard,
    Card,
    CardCarousel,
  },
  data() {
    return {
      name: "Museum",
      img: "https://s8.gifyu.com/images/frans-ruiter-jfPGunIH_9M-unsplash.jpg"
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/pois')
    return {
      poiList: data,
    }
  },
}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
  margin: 0 auto 100px auto;
}

.second-title {
  padding-left: 10px;
}

.vl {
  border-left: 6px solid red;
}
</style>