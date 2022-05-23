<template>
  <div>
    <div>
      <carousel :detailList="carouselList" />
    </div>
    <div>
      <h1 class="text-center mt-3">Guide to the City</h1>
      <div class="row mt-3">
        <card
          v-for="(item, itemIndex) of carouselList"
          class="col-sm-2 m-2"
          :key="`data-index-${itemIndex}`"
          :id="item.id"
          :name="item.name"
          :img="item.img"
          :description="item.description"
          :path = "path"
        />
        <masonry :photoList="carouselList"
               :path="path"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Card from '@/components/Card.vue'
export default {
  components: {
    Carousel,
    Card,
  },
  name: 'IndexPage',
  //TODO: It is probably a better optimization to use the store directory with vuex to save these data
  //      because we don't want to retrive homepage images from db everytime it is loaded.
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/pois')
    //console.log(data);
    return {
      carouselList: data,
      path: "attractions"
    }
  },
}
</script>

<style scoped>
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
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}
</style>
