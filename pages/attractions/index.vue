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
.wrapper{
  overflow: hidden;
  margin:0 auto 100px auto;
}
</style>