<template>
  <!-- div class="page container mt-4">
    <h1 class="title">{{ name }}</h1>
    <p>{{ description }}</p>
    <div class="mb-5">
      <img :src="img" class="rounded mx-auto d-block img-fluid"/>
    </div>
    <div class="mb-5">
      <h1 class="title">Map</h1>
      <p>Map</p>
    </div>
  </div>
  <div -->
  <div class="page container-fluid mt-4">
    <h1 class="title">{{ swapUnderscoresWithSpaces(name) }}</h1>
    <div class="row g-5">
      <div class="col-6">
        <p>{{ description }}</p>
      </div>
      <div class="col-6">
        <img :src="img" class="rounded img-fluid" alt="...">
      </div>
      <div class="col-6">
        <google-map :query="mapQuery"/>
      </div>
      <div class="col-6">
        <accordion :serviceDetails="serviceDetails"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import GoogleMap from '@/components/Map.vue'
import Accordion from '@/components/Accordion.vue'
export default {
  name: 'DetailsPage',
  components: {
    GoogleMap,
    Accordion,
  },
  async asyncData({ route, $axios }) {
    /*
      Se si fanno entrambe le chiamate api, non funziona.
      La parte commentata dovrebbe riempire la parte superiore della pagina.
    */
    const { id } = route.params
    const { data: serviceInfo } = await $axios.get('/api/services/' + id)
    const { data: serviceList } = await $axios.get('/api/service/' + id)
    return {
      name: serviceInfo.name,
      img: serviceInfo.img,
      description: serviceInfo.description,
      mapQuery: id+"in+Amsterdam",
      serviceDetails: serviceList,
    }
  },
  methods: {
	swapUnderscoresWithSpaces(string){
        return string.replace(/_/g, " ");
    }
  }
  
}
</script>