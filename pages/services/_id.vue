<template>
  <div class="page-container">

    <!-- SECTION THAT CONTAINS SERVICE TYPE AND DESCRIPTION -->
    <section id="description">
      <div class="section-container mb-5">
        <h1 class="title text-center ">{{ swapUnderscoresWithSpaces(name) }}</h1>
        <div class="row row-cols-1 row-cols-lg-2 mt-5">
          <div class="col">
            <p class="p-4">{{ description }}</p>
          </div>
          <div class="col">
            <img :src="img" alt="No img" class="img-fluid id-img">
          </div>
        </div>
      </div>
    </section>

    <hr class="m-5">

    <!-- GOOGLE MAP COMPONENT AND ACCORDION COMPONENT FOR SINGLE SERVICES-->
    <section id="info">
      <div class="section-container">
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col">
            <google-map :query="swapUnderscoresWithSpaces(name) "  height="400px"/>
          </div>
          <div class="col">
            <accordion :serviceDetails="serviceDetails" />
          </div>
        </div>

      </div>
    </section>

    <!-- NAVBACK BUTTON -->
    <div class="section-container d-grid gap-2 d-md-flex justify-content-md-start mt-5 mb-5">
      <button type="button" class="btn btn-outline-dark btn-lg px-4" @click="backToList">
        Back to services
      </button>
    </div>

  </div>
</template>

<style scoped>
</style>

<script>
import CommonMixin from '@/mixins/common.js'
import GoogleMap from '@/components/Map.vue'
import Accordion from '@/components/Accordion.vue'
export default {
  name: 'DetailsPage',
  mixins:[CommonMixin],
  components: {
    GoogleMap,
    Accordion,
  },
  
  head() {
    return {
      title: 'Visit-DAM | ' + this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.name + ' :' + this.description,
        },
      ],
    }
  },
  
  data() {
    return {

    }
  },
  async asyncData({ route, $axios, redirect }) {
    /*
      API calls to database, with error management in case of non-existing ID
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
    backToList() {
      this.$router.push('/services')

    }
  }

}
</script>
