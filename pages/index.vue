<template>
  <div class="page-container">
    <div class="container-carousel">
      <carousel :detailList="carouselList" scrollTo="#guide-to-the-city" />
      <p class="fs-1 text-center fw-bold position-absolute top-50 start-50 translate-middle shadow-plg cover-title">
        Welcome to Amsterdam! </p>
    </div>

    <section id="topic-menu">
      <div class="container">
        <h2 class="text-center mt-5">What are you looking for?</h2>
        <div class="row m-5">
          <div v-for="(item, index) of categoriesList" :key="index" class="col-md m-2">
            <topic-card :title="item.name"
              :img="item.img" :path="item.name" />
          </div>
        </div>
      </div>
    </section>

    <hr class="m-5"/>

    <section id="photo-collage">
      <div class="container">
        <h2 class="text-center m-3">Pictures of City's life</h2>
        <masonry :photoList="photoList" path="placeholder" />
      </div>
    </section>

  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Card from '@/components/Card.vue'
import HoverCard from '@/components/HoverCard.vue'
import Masonry from '@/components/Masonry.vue'

export default {
  components: {
    Carousel,
    Card,
    HoverCard,
    Carousel,
    Masonry
  },
  layout: 'nocrumbs',
  name: 'IndexPage',
  //TODO: It is probably a better optimization to use the store directory with vuex to save these data
  //      because we don't want to retrive homepage images from db everytime it is loaded.
  async asyncData({ $axios }) {
    let carousel = []
    let categories = []
    const { data: homepage_details } = await $axios.get('/api/home-page-details')
    const { data: photo_list } = await $axios.get('/api/photolist')
    for (var item of homepage_details) {
      if (item.section === 'carousel') {
        carousel.push(item)
      } else if (item.section === 'categories') {
        categories.push(item)
      }
    }
    return {
      carouselList: carousel,
      categoriesList: categories,
      path: 'attractions',
      photoList: photo_list,
    }
  },
}
</script>

<style scoped>
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
