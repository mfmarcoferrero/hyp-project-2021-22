<template>
  <div class="page container mt-5">
    <h1>Attractions page</h1>
    <div class="row mt-3">
      <overlay-card
        v-for="(poi, poiIndex) of poiList"
        class="col-sm-2 m-2"
        :key="`poi-index-${poiIndex}`"
        :id="poi.id"
        :name="poi.name"
        :img="poi.img"
        :description="poi.description"
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