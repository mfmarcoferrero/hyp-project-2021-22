<template>
  <div class="page container mt-5 wrapper">
    <h1 class="text-center">Attractions page</h1>
    <div class="row justify-content-center">
      <overlay-card
        v-for="(poi, poiIndex) of poiList"
        class="col-lg-11 m-3"
        :key="`poi-index-${poiIndex}`"
        :id="poi.id"
        :name="poi.name"
        :img="poi.img"
        :description="poi.description"
        path="attractions"
      />
    </div>
  </div>
  <!-- <div class="page-container mt-5">
    <h1 class="text-center">Attractions page</h1>

    <div class="container mb-5">
      <h2 class="second-title"> Most visited attractions </h2>
      <div class="row">
        <div class="col">
          <h3 :name="name"> </h3>
          <img :src="img" class="rounded mx-auto img-fluid poi-img" />
        </div>
        <div class="col">
          <img :src="img" class="rounded mx-auto img-fluid poi-img" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img :src="img" class="rounded mx-auto img-fluid poi-img" />
        </div>
        <div class="col">
          <img :src="img" class="rounded mx-auto img-fluid poi-img" />
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import OverlayCard from '~/components/OverlayCard.vue'
export default {
  name: 'ListPage',
  components: {
    OverlayCard
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
  margin: 10px;
}
</style>