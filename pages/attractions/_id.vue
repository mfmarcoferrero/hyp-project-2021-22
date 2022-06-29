<template>
  <div class="page-container mt-5">

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

    <hr>

    <section id="info">
      <div class="section-container mt-3">
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col mb-3">
            <google-map :query="name"  height="400px"/>
          </div>
          <div class="col">
            <div class="">
              <h2 class="text-center">General Information</h2>
            </div>
            <br>

            <div class="row row-cols-2 ms-3">
              <div class="icon-item col-1">
                <span :class="locationIcon"></span>
              </div>
              <div class="col event-card-text ms-1">
                <span class="fs-4">{{ location }}</span>
              </div>
            </div>

            <div class="row row-cols-2 m-3">
              <div class="icon-item col-1">
                <span :class="dateIcon"></span>
              </div>
              <div class="col event-card-text ms-1">
                <span class="fs-4">{{ when }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-container d-grid gap-2 d-md-flex justify-content-md-start mb-b mt-5">
      <button type="button" class="btn btn-outline-dark btn-lg px-4" @click="backToList">
        Back to all the attractions
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
import CommonMixin from '@/mixins/common.js'
import GoogleMap from '@/components/Map.vue'
import CardCarousel from '~/components/CardCarousel.vue'
export default {
  scrollToTop: true,
  name: 'DetailsPage',
  components: {
    GoogleMap,
    CardCarousel
  },
  mixins: [CommonMixin],

  //Important for the SEO
  //head() {
  //   return {
  //     title: this.name
  //   }
  // },
  async asyncData({ route, $axios, redirect }) {
    const { id } = route.params
    const { data } = await $axios.get(`/api/pois/` + id)
    if (data == null){
      return redirect('/error/?err=This attraction does not exist!')
    }
    return {
      name: data.name,
      img: data.img,
      description: data.description,
    }
  },

  methods: {
    backToList() {
      this.$router.push('/attractions/list')
    }
  },
}
</script>