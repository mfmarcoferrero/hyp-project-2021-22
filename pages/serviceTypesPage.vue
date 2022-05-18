<template>
<div>
  <!-- v-for bootstrap cards taking elements from database -->
  <div class="card-deck">
  <card
          v-for="(item, itemIndex) of serviceDetails"
          class="col-sm-2 m-2"
          :key="`data-index-${itemIndex}`"
          :id="item.id"
          :name="item.name"
          :img="item.img"
          :description="item.description"
          :path="path"
        />

</div>
</div>
</template>

<script>

import Card from '@/components/Card.vue'

export default {

  components: {
    Card,
  },

  async asyncData({ $axios }) {
    // Database table to populate service image, service description and markers array to show on map  
    const { data } = await $axios.get('/api/services')
    return {
      serviceDetails: data,
      path: "service"
    }
  }

}
</script>

<style>

</style>
