<template>
  <div class="page container mt-5">

    <div class="container mb-5">
      <div class="row">
        <div class="col">
          <h1 class="title">{{ swapDashesAndCapitalize(name) }}</h1>
          <p>{{ description }}</p>
        </div>
        <div class="col">
          <img :src="img" class="rounded mx-auto img-fluid poi-img" />
        </div>
      </div>
    </div>

    <hr>
    <section id="info">
      <div class="container">
        <div class="row">
          <div class="col">
            <google-map :query="location" />
          </div>
          <div class="col">
            <h2 class="text-center">General Information</h2>
            <br>
            <h3 class="text-center">Where?</h3>
            <p class="text-center">Event takes place in <nuxt-link @click="goToAttraction"><strong>{{location}}</strong></nuxt-link></p>
            <br>
            <h3 class="text-center">When?</h3>
            <p class="text-center"><strong>{{when}}</strong></p>
          </div>
        </div>
      </div>
    </section>
    <hr>

    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
      <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="backToList">
        Back to events
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
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get(`/api/events/` + id)
    return {
      name: data.name,
      location: data.location,
      img: data.img,
      description: data.description,
      when: data.when,
    }
  },

  methods: {
    backToList() {
      this.$router.push('/events')
    },
    goToAttraction(){
      this.$router.push('/attractions'+location)
    }
  },
}
</script>