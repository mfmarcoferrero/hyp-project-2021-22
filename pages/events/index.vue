<template>
  <div class="page-container wrapper">
    <cover-image :img="coverImg" :title="title" />

    <section id="agenda">
      <div class="container ps-5 mt-5">
        <h2 class="second-title vl">Cultural Agenda</h2>
        <agenda :list="eventList" class="mt-5"/>
        <hr class="mt-5">
      </div>
    </section>
    <section id="events-by-season">
      <div class="container p-5">
        <h2 class="second-title vl">What's up in Amsterdam?</h2>
        <card-list :list="eventList" class="mt-5" />
      </div>
    </section>

  </div>
</template>

<script>
import Map from '@/components/Map.vue'
import CardList from '@/components/CardList.vue'
import CoverImage from '~/components/CoverImage.vue'
import Agenda from '~/components/Agenda.vue'
export default {

  components: {
    Map,
    CardList,
    CoverImage,
    Agenda
  },
  head() {
    return {
      title: 'Visit-DAM | Events',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '',
        },
      ],
    }
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