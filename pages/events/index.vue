<template>
  <div class="page-container">
    <cover-image :img="coverImg" :title="title" />

    <section id="events-by-season">
      <div class="section-container mt-5">
        <h1 class="text-center"><strong>What's up in Amsterdam?</strong></h1>
        <p class="second-title vl ms-3 mt-5 mb-5">Almost every week a cultural event or festival is held in Amsterdam.
          Many of these Amsterdam events and
          festivals have a long tradition and are carefully conserved by the Dutch. But these typical Dutch festivities
          are also very nice for tourists, because a lot of them are held with an English-speaking public in mind.</p>
        <h3 class="text-center mb-3">Choose a time period!</h3>
      </div>
      <card-list :list="eventList" :categories="categories" />
    </section>

    <hr class="m-5">

    <section id="agenda">
      <div class="section-container mt-0">
        <h2 class="second-title vl ms-4 mb-4">Cultural Agenda</h2>
        <agenda :list="eventList" class="mt-5" :categories="agendaCategories" :selected="agendaSelected"/>
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
  scrollToTop: true,
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
          content: '',
        },
      ],
    }
  },
  data() {
    return {
      coverImg: "https://s8.gifyu.com/images/events-cover.jpg",
      title: "Festivals & Events",
      categories: [{
        name: "all",
        description: "Amsterdam is full of fun and interesting acrivities taking place throughout the whole year. Browse this page to discover all the events that are taking place in the city!"
      },
      {
        name: "winter",
        description: "The cold season brings everyone to stay in home and enjoy a hot cup of tea looking at the fireplace. Amsterdam, thought, never sleeps! Browse throught the winter activities that are taking place in the city."
      },
      {
        name: "spring",
        description: "Flowers are blooming, it's spring! Like flowers, Amsterdam life blooms like a bossom of rose during this season. Explore all the activities that you can do in the city while enjoying the first warm days of the year."
      },
      {
        name: "summer",
        description: "Summer is one of the best seasons to visit Amsterdam! The extreme cold is just a far memory, everyone is enjoying the mild climate in the city. All kinds of events take place during summer. Find more about them in this section!"
      },
      {
        name: "fall",
        description: "Summer ends, the trees are starting to lose their leaves, but Amsterdam does not go to sleep! A lot of fun and interesting events are taking place in the city during fall. Explore this possibilities and enjoy the fall season throught us!"
      }],
      agendaSelected: 'Music',
      agendaCategories: ['Music', 'Art', 'Food', 'Sport'],
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