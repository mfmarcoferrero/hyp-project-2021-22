<template>
  <div class="page-container">
    <div class="container-carousel position-relative">
      <carousel :detailList="carouselList" scrollTo="#quick-look" />
      <p
        class="
          fs-1
          text-center
          fw-bold
          position-absolute
          top-50
          start-50
          translate-middle
          shadow-plg
          cover-title
        "
      >
        Welcome to Amsterdam!
      </p>
    </div>

    <section id="topic-menu">
      <div class="container">
        <h2 class="text-center mt-5">What are you looking for?</h2>
        <div class="row m-5">
          <div
            v-for="(item, index) of categoriesList"
            :key="index"
            class="col-md m-2"
          >
            <topic-card :title="item.name" :img="item.img" :path="item.name" />
          </div>
        </div>
      </div>
    </section>

    <hr class="m-5" />

    <section id="quick-look">
      <div class="container position-relative pb-5">
        <h2 class="second-title vl ms-5 mt-5 mb-4">Quick look</h2>
        <p class="m-4 p-2">
          With its picturesque canal network, rich history and thrumming
          cultural scene, the capital of the Netherlands is one of the world’s
          most vibrant cities. There are endless things to do in Amsterdam in
          any weather and many of the most rewarding experiences lie beyond the
          well-trodden tourist paths of the city centre. To lead you through the
          wealth of wonders, we’ve whittled down the selection to this essential
          places you can't leave without visiting, and some important events that
          are taking place in this period.
        </p>

        <div class="row row-cols-1 row-cols-lg-2 ms-4 me-4">
          <div class="col col-lg-6 mb-4">
            <card
              :name="topAttractions[0].name"
              :img="topAttractions[0].img"
              :description="topAttractions[0].shortDescription"
              :path="'/attractions/' + topAttractions[0].name"
            ></card>
          </div>
          <div class="col col-lg-6 mb-4">
            <card
              :name="topEvents[0].name"
              :img="topEvents[0].img"
              :description="topEvents[0].description"
              :path="'/events/' + topEvents[0].name"
            ></card>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-lg-3 ms-4 me-4">
          <div class="col col-lg-4 mb-4">
            <card
              :name="topAttractions[1].name"
              :img="topAttractions[1].img"
              :description="topAttractions[1].shortDescription"
              :path="'/attractions/' + topAttractions[1].name"
            ></card>
          </div>
          <div class="col col-lg-4 mb-4">
            <card
              :name="topEvents[1].name"
              :img="topEvents[1].img"
              :description="topEvents[1].description"
              :path="'/events/' + topEvents[1].name"
            ></card>
          </div>
          <div class="col col-lg-4 mb-4">
            <card
              :name="topAttractions[2].name"
              :img="topAttractions[2].img"
              :description="topAttractions[2].shortDescription"
              :path="'/attractions/' + topAttractions[2].name"
            ></card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Card from '@/components/Card.vue'

export default {
  components: {
    Card,
    Carousel,
  },
  layout: 'nocrumbs',
  name: 'IndexPage',
  //TODO: It is probably a better optimization to use the store directory with vuex to save these data
  //      because we don't want to retrive homepage images from db everytime it is loaded.
  async asyncData({ $axios }) {
    let carousel = []
    let categories = []
    let topAttractions = []
    let topEvents = []
    const { data: homepage_details } = await $axios.get(
      '/api/home-page-details'
    )
    const { data: attractions_details } = await $axios.get('/api/attractions-page-details')
    const { data: event_details } = await $axios.get('/api/events')
    for (var item of homepage_details) {
      if (item.section === 'carousel') {
        carousel.push(item)
      } else if (item.section === 'categories') {
        categories.push(item)
      }
    }
    for (var item of attractions_details) {
      if (item.category == 'top') topAttractions.push(item)
    }
    for (var item of event_details) {
      if (item.season == 'summer') topEvents.push(item)
    }
    return {
      carouselList: carousel,
      categoriesList: categories,
      path: 'attractions',
      topAttractions: topAttractions,
      topEvents: topEvents,
    }
  },
}
</script>

<style scoped>

/* This CSS workaround gives a margin to the scrolling element  */
/* to avoid content and header overlapping                      */

section::before{
  display: block; 
  content: " "; 
  margin-top: -50px; 
  height: 50px; 
  visibility: hidden; 
  pointer-events: none;
}

/* Home page responsiveness */

@media only screen and (min-width: 1024px) {
  .card-container {
    column-count: 4;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 540px) {
  .card-container {
    column-count: 2;
  }
}
</style>
