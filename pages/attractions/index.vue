<template>
  <div class="">
    <cover-image img="https://s8.gifyu.com/images/attractions-1.jpg" title="Things to do"></cover-image>

    <div class="container">
      <div class="row m-5">
        <div class="col-md m-2">
          <topic-card title="Attractions Tours" img="https://s8.gifyu.com/images/adrien-olichon-QRtym77B6xk-unsplash.jpg"
            path="/itineraries" />
        </div>
        <div class="col-md m-2">
          <topic-card title="Amsterdam Areas"
            img="https://s8.gifyu.com/images/GettyImages-659083249-5912430d3df78c92830e4eaa.jpg"
            path="/neighbourhoods" />
        </div>
        <div class="col-md m-2">
          <topic-card title="Buy Tickets" img="https://s8.gifyu.com/images/Rijkmuseum-1.jpg" path="#tickets-info" />
        </div>
      </div>
    </div>

    <hr class="m-5">

    <div class="container position-relative pb-5">
      <h2 class="second-title vl ms-5 mt-5 mb-4"> Most visited attractions </h2>
      <p class="m-4 p-2">There’s more to Amsterdam than just the storybook charm of its Golden Age architecture and
        quaint
        canals. This
        pocket-size city likes to think big. Its acclaimed museums hold the world’s largest collection of Van Goghs
        along with impressive Rembrandts, Vermeers, and modern masters. While its eco-friendly attitude and proud
        history of embracing diversity has long attracted international attention. With so much going for it, we’ve made
        it easier for you by sharing our top picks. From the Rijksmuseum’s homegrown collection to Anne Frank’s
        heart-rending house, discover the best the city has to offer. And don’t forget to soak up some gezellig, the
        Dutch concept of coziness, at any number of bruin cafés. </p>

      <div class="row row-cols-1 row-cols-lg-2 ms-4 me-4">
        <div class="col col-lg-6 mb-4">
          <card :name="topList[0].name" :img="topList[0].img" :description="topList[0].shortDescription"
            :path="'/attractions/' + topList[0].name"></card>
        </div>
        <div class="col col-lg-6 mb-4">
          <card :name="topList[1].name" :img="topList[1].img" :description="topList[1].shortDescription"
            :path="'/attractions/' + topList[1].name"></card>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-lg-3 ms-4 me-4">
        <div class="col col-lg-4 mb-4">
          <card :name="topList[2].name" :img="topList[2].img" :description="topList[2].shortDescription"
            :path="'/attractions/' + topList[2].name"></card>
        </div>
        <div class="col col-lg-4 mb-4">
          <card :name="topList[3].name" :img="topList[3].img" :description="topList[3].shortDescription"
            :path="'/attractions/' + topList[3].name"></card>
        </div>
        <div class="col col-lg-4 mb-4">
          <card :name="topList[4].name" :img="topList[4].img" :description="topList[4].shortDescription"
            :path="'/attractions/' + topList[4].name"></card>
        </div>
      </div>
      <nuxt-link to="attractions/list">
        <button type="button"
          class="btn btn-outline-secondary btn-lg px-4 position-absolute start-50 translate-middle mt-4">
          Go to all the attractions
        </button>
      </nuxt-link>
    </div>

    <hr class="m-5">

    <div class="container">
      <h2 class="second-title vl ms-5 mt-5 mb-4"> Art and cutural </h2>
      <p class="m-4 p-2">Amsterdam is one of the most popular cities in Europe and a hotbed for Dutch and international
        art
        and culture. In addition to being one of Europe’s greenest cities and famed for its canal networks which earn
        the city the nickname ‘Venice of the North’, there is an abundance of art and culture in Amsterdam. From
        galleries displaying world famous art, to an exciting music, film and theatre scene, the Dutch capital has a
        little bit of everything. Continue reading for our list below outlining eight things to see in Amsterdam that
        showcase the best of Dutch and international art and culture. For business travellers visiting The Netherlands
        and keen on exploring Amsterdam, these attractions are certainly worth visiting.</p>

      <div class="row row-cols-1 row-cols-lg-3 ms-4 me-4">
        <div class="col-lg-6 mb-4">
          <card :name="artList[0].name" :img="artList[0].img" :description="artList[0].shortDescription"
            :path="'/attractions/' + artList[0].name"></card>
        </div>
        <div class="col-lg-3 mb-4">
          <card :name="artList[1].name" :img="artList[1].img" :description="artList[1].shortDescription"
            :path="'/attractions/' + artList[1].name"></card>
        </div>
        <div class="col-lg-3 mb-4">
          <card :name="artList[2].name" :img="artList[2].img" :description="artList[2].shortDescription"
            :path="'/attractions/' + artList[2].name"></card>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 ms-4 me-4">
        <div class="col-lg-6 mb-4">
          <card :name="artList[3].name" :img="artList[3].img" :description="artList[3].shortDescription"
            :path="'/attractions/' + artList[3].name"></card>
        </div>
        <div class="col-lg-6 mb-4">
          <card :name="artList[4].name" :img="artList[4].img" :description="artList[4].shortDescription"
            :path="'/attractions/' + artList[4].name"></card>
        </div>
      </div>
    </div>

    <hr class="m-5">

    <div class="container">
      <h2 class="second-title vl ms-5"> Tickets for attractions and activities </h2>
    </div>

    <section id="tickets-info">
      <card-carousel :detailMatrix="generateMatrixFromArray(ticketList, 4)" class="mb-5"> </card-carousel>
    </section>

  </div>
</template>

<script>
import CommonMixin from '~/mixins/common';
import OverlayCard from '~/components/OverlayCard.vue';
import Card from '~/components/Card.vue';
import CardCarousel from '~/components/CardCarousel.vue';
import CoverImage from '~/components/CoverImage.vue';

export default {
  scrollToTop: true,
  name: 'AttractionsPage',
  title: 'Attractions',
  mixins: [CommonMixin],
  components: {
    OverlayCard,
    Card,
    CardCarousel,
    CoverImage
  },
  data() {
    return {
      name: "Museum",
      img: "https://s8.gifyu.com/images/frans-ruiter-jfPGunIH_9M-unsplash.jpg"
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    let topList = []
    let artList = []
    let ticketList = []
    const { data } = await $axios.get('/api/attractions-page-details')
    for (var item of data) {
      if (item.category === 'top') {
        topList.push(item)
      } else if (item.category === 'museum') {
        artList.push(item)
      }
      if (item.link != null) {
        ticketList.push(item)
      }
    }
    return {
      topList: topList,
      artList: artList,
      ticketList: ticketList
    }
  },
}
</script>

<style scoped>

</style>