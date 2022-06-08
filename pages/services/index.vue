<template>
<div class="wrapper">
  <!-- v-for bootstrap cards taking elements from database -->
  <div class="page container-fluid">
    <div class="row mt-3 justify-content-md-center">
      <hover-card
          v-for="(item, itemIndex) of serviceDetails"
          class="col-sm-auto m-2"
          :key="`data-index-${itemIndex}`"
          :id="item.id"
          :name="item.name"
          :img="item.img"
          :description="item.description"
          :path="path"
        />
      </div>
  
  </div>
</div>
</template>

<script>

import Card from '@/components/Card.vue'
import Masonry from '@/components/Masonry.vue'
import HoverCard from '@/components/HoverCard.vue'

export default {

  components: {
    Card,
    Masonry,
    HoverCard,
  },

  async asyncData({ $axios }) {
    // Database table to populate service image, service description and markers array to show on map  
    const { data } = await $axios.get('/api/services')
    return {
      serviceDetails: data,
      path: "services"
    }
  }

}
</script>

<style>
.wrapper{
  overflow:visible;
  margin:0 auto 100px auto;
}
.cardwrapper{
  column-count: 4;
  column-gap: 10px;
}
.col-sm-auto{
  overflow: visible;
}

</style>
