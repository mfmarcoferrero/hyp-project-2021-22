<template>
  <div class="container-fluid wrapper">
    <div>
      <carousel :detailList="carouselList" scrollTo="#guide-to-the-city" />
    </div>

    <!--Horizontal slider for cards -->
    <section id="guide-to-the-city">
      <h1 class="text-center mt-3">Guide to the City</h1>

      <div class="container-fluid">
        <div class="scrolling-wrapper row flex-row flex-nowrap gx-5 mt-2 pt-2 pb-2">

          <div v-for="(item, itemIndex) of categoriesList" :key="`data-index-${itemIndex}`" class="col">
            <hover-card :name="item.name" :img="item.img" :description="item.description" :path="item.path" />
          </div>

        </div>
      </div>
    </section>

    <hr>

  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Card from '@/components/Card.vue'
import HoverCard from '@/components/HoverCard.vue'

export default {
  components: {
    Carousel,
    Card,
    HoverCard
  },
  layout: 'nocrumbs',
  name: 'IndexPage',
  //TODO: It is probably a better optimization to use the store directory with vuex to save these data
  //      because we don't want to retrive homepage images from db everytime it is loaded.
  async asyncData({ $axios }) {
    let carousel = []
    let categories = []
    const { data } = await $axios.get('/api/home-page-details')
    for (var item of data) {
      if (item.section === 'carousel') {
        carousel.push(item)
      } else if (item.section === 'categories') {
        categories.push(item)
      }
    }
    return {
      carouselList: carousel,
      categoriesList: categories,
      path: "attractions"
    }
  }
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
  transition: transform .2s;
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
</style>
