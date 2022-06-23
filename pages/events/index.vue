<template>
  <div class="page-container wrapper">
    <cover-image :img="coverImg" :title="title" />

    <div class="row m-5">
      <h1 style="text-align: center">What's up in Amsterdam?</h1>
    </div>
    <card-list :list="eventList" />
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
      title: "Festivals & Events"
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