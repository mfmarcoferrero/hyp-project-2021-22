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
    <h1 class="title">{{ name }}</h1>
    <div class="row">
      <div class="col-6">
        <p>{{ description }}</p>
      </div>
      <div class="col">
        <img :src="img" class="rounded img-fluid" alt="...">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <google-map :query="query"/>
    </div>
    <div class="col">
      <accordion :serviceDetails="servicesData"/>
    </div>
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
  /*
  EXPERIMENTING WITH DIFFERENT ROUTING, USING STRINGS (in this case the name) INSTEAD OF INTEGERS
  */
  async asyncData({ route, $axios }) {
    const { name } = route.params
    const { serviceTypeData } = await $axios.get('/api/services/' + name)
    const { servicesData } = await $axios.get('/api/service/' + name)
    return {
      serviceTypeName: serviceTypeData.name,
      serviceTypeImg: serviceTypeData.img,
      serviceTypeDescription: serviceTypeData.description,
      servicesData: servicesData,
      query: name+"+in+Amsterdam",
    }
  },
}
</script>