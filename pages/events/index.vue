<template>
  <div class="page-container wrapper">
    <cover-image :img="coverImg" :title="title" />

    <div class="row m-5">
      <h1 style="text-align: center"><strong>What's up in Amsterdam?</strong></h1>
      <h3 style="text-align: center">Choose a time period!</h3>
    </div>
    <card-list :list="eventList" :categories="categories" />
  </div>
</template>

<script>
import Map from '@/components/Map.vue'
import CardList from '@/components/CardList.vue'
import CoverImage from '~/components/CoverImage.vue'
export default {

  components: {
    Map,
    CardList,
    CoverImage
  },
  data() {
    return {
      coverImg: "https://s8.gifyu.com/images/events-cover.jpg",
      title: "Festivals & Events",
      categories: ["all", "winter", "spring", "summer", "fall"]
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
    }
  }

}
</script>

<style scoped>
</style>