<template>
  <div class="page container-fluid mt-4 wrapper">
  <div class="row m-5">
  <h1 style="text-align: center">What's up in Amsterdam?</h1>
  </div>
      <card-list :list="eventList" />
  </div>
</template>

<script>
import Map from '@/components/Map.vue'
import CardList from '@/components/CardList.vue'
export default {

  components: {
    Map,
    CardList,
  },
  data() {
    return {

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