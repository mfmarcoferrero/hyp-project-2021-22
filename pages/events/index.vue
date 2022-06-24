<template>
  <div class="page-container wrapper">
    <cover-image :img="coverImg" :title="title" />

    <section id="events-by-season">
      <div class="container ps-5 mt-5 mb-5">
        <h1 style="text-align: center"><strong>What's up in Amsterdam?</strong></h1>
        <p class="m-5">Almost every week a cultural event or festival is held in Amsterdam. Many of these Amsterdam events and
          festivals have a long tradition and are carefully conserved by the Dutch. But these typical Dutch festivities
          are also very nice for tourists, because a lot of them are held with an English-speaking public in mind.</p>
        <h3 style="text-align: center">Choose a time period!</h3>
        <card-list :list="eventList" :categories="categories" class="mt-5" />
      </div>
    </section>

    <hr class="m-5">

    <section id="agenda">
      <div class="container ps-5">
        <h2 class="second-title vl mt-5">Cultural Agenda</h2>
        <agenda :list="eventList" class="mt-5" />
      </div>
    </section>

    <br><br><br><br><br><br>

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