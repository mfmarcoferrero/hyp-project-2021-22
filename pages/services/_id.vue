<template>
  <div class="page container mt-5">

    <div class="container mb-5">
      <h1 class="title text-center ">{{ swapUnderscoresWithSpaces(name) }}</h1>
      <div class="row row-cols-1 row-cols-lg-2 mt-5">
        <div class="col">
          <p class="p-4">{{ description }}</p>
        </div>
        <div class="col">
          <img :src="img" alt="No img" class="img-fluid border border-dark border-3 id-img">
        </div>
      </div>
    </div>

    <hr>
    <section id="info">
      <div class="container mt-3">
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col">
            <google-map :query="name + 'Amsterdam'"  height="400px"/>
          </div>
          <div class="col-6">
            <accordion :serviceDetails="serviceDetails" />
          </div>
        </div>
      </div>
    </section>
    <hr>

    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
      <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="backToList">
        Back to services
      </button>
    </div>

    <!-- You may also like content -->

    <!--section id="other-attractions">
      <h1> You may also like </h1>
      <card-carousel></card-carousel>
    </section-->

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
  data() {
    return {
      locationIcon: 'mdi mdi-map-marker',
      dateIcon: 'mdi mdi-timer',
    }
  },
  async asyncData({ route, $axios, redirect }) {
    /*
      Se si fanno entrambe le chiamate api, non funziona.
      La parte commentata dovrebbe riempire la parte superiore della pagina.
    */
    const { id } = route.params
    const { data: serviceInfo } = await $axios.get('/api/services/' + id)
    const { data: serviceList } = await $axios.get('/api/service/' + id)
    if (serviceInfo == null){
      return redirect('/error/?err=This service does not exist!')
    }
    return {
      name: serviceInfo.name,
      img: serviceInfo.img,
      description: serviceInfo.description,
      mapQuery: id + "in+Amsterdam",
      serviceDetails: serviceList,
    }
  },
  methods: {
    swapUnderscoresWithSpaces(string) {
      return string.replace(/_/g, " ");
    },
    backToList() {
      this.$router.push('/services')

    }
  }

}
</script>