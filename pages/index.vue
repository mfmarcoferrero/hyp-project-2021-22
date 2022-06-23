<template>
  <div class="page-container">
    <div class="container-carousel">
      <carousel :detailList="carouselList" scrollTo="#guide-to-the-city" />
      <p class="fs-1 text-center fw-bold position-absolute top-50 start-50 translate-middle shadow-plg cover-title">
            Welcome to Amsterdam! </p>
    </div>

    

    <div class="container-fluid">
      <hr /><br><br>
      <div class="row flex-row mt-2 pt-2 pb-2">
        <section id="topic-menu">
          <div class="container">
            <br>
            <h3 class="text-center">What are you looking for?</h3>
            <div class="row m-5">
              <div class="col-md m-2">
                <topic-card
                  title="Attractions"
                  img="https://s8.gifyu.com/images/91a051430ab15c667bad0d64bba0ff45299d9f28.jpg"
                  path="attractions"
                />
              </div>
              <div class="col-md m-2">
                <topic-card
                  title="Itineraries"
                  img="https://s8.gifyu.com/images/14896f158a325e49575.jpg"
                  path="itineraries"
                />
              </div>
              <div class="col-md m-2">
                <topic-card
                  title="Events"
                  img="https://s8.gifyu.com/images/808x454_cmsv2_b3d598a0-bec1-5f13-bc92-88ae94163b73-6744142.jpg"
                  path="events"
                />
              </div>
              <div class="col-md m-2">
                <topic-card
                  title="Services"
                  img="https://s8.gifyu.com/images/808x454_cmsv2_b3d598a0-bec1-5f13-bc92-88ae94163b73-6744142.jpg"
                  path="services"
                />
              </div>
            </div>
          </div>
        </section>
        <hr />
        <h1 class="text-center m-3">Pictures of City's life</h1>
        <masonry :photoList="photoList" path="placeholder" />
      </div>
    </div>

    <hr />
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
.scrolling-wrapper {
  overflow-x: auto;
}

.header {
  text-align: center;
  padding: 32px;
}

.zoom {
  padding: 50px;
  background-color: rgb(109, 151, 109);
  transition: transform 0.2s;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.zoom:hover {
  background-color: rgb(80, 111, 80);
  transform: scale(1.2);
}

.row {
  display: -ms-flexbox;
  /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap;
  /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

.wrapper {
  overflow: visible;
  margin: 0 auto 100px auto;
}

.col-sm-auto {
  overflow: visible;
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
