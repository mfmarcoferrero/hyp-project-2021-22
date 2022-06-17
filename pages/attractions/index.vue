<template>
  <div class="wrapper page-container">
    <cover-image img="https://s8.gifyu.com/images/attractions-1.jpg" title="Things to do"></cover-image>

    <div class="container">
      <div class="row m-5">
        <div class="col-md m-2">
          <topic-card title="Guided Tours" img="https://s8.gifyu.com/images/adrien-olichon-QRtym77B6xk-unsplash.jpg"
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

    <div class="container">
      <h2 class="second-title vl ms-5 mt-5 mb-4"> Most visited attractions </h2>
      <p class="m-4 p-2">There’s more to Amsterdam than just the storybook charm of its Golden Age architecture and quaint
        canals. This
        pocket-size city likes to think big. Its acclaimed museums hold the world’s largest collection of Van Goghs
        along with impressive Rembrandts, Vermeers, and modern masters. While its eco-friendly attitude and proud
        history of embracing diversity has long attracted international attention. With so much going for it, we’ve made
        it easier for you by sharing our top picks. From the Rijksmuseum’s homegrown collection to Anne Frank’s
        heart-rending house, discover the best the city has to offer. And don’t forget to soak up some gezellig, the
        Dutch concept of coziness, at any number of bruin cafés. </p>
      
      <div class="row row-cols-1 row-cols-md-2 ms-4 me-4">
        <div class="col col-md-6 mb-4">
          <card :name="poiList[0].name" :img="poiList[0].img" :description="poiList[0].shortDescription" :path="'/attractions/'+poiList[0].name"></card>
        </div>
        <div class="col col-md-6 mb-4">
          <card :name="poiList[1].name" :img="poiList[1].img" :description="poiList[1].shortDescription" :path="'/attractions/'+poiList[1].name"></card>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 ms-4 me-4">
        <div class="col col-md-4 mb-4">
          <card :name="poiList[2].name" :img="poiList[2].img" :description="poiList[2].shortDescription" :path="'/attractions/'+poiList[2].name"></card>
        </div>
        <div class="col col-md-4 mb-4">
          <card :name="poiList[3].name" :img="poiList[3].img" :description="poiList[3].shortDescription" :path="'/attractions/'+poiList[3].name"></card>
        </div>
        <div class="col col-md-4 mb-4">
          <card :name="poiList[4].name" :img="poiList[4].img" :description="poiList[4].shortDescription" :path="'/attractions/'+poiList[4].name"></card>
        </div>
      </div>

    </div>

    <hr class="m-5">

    <div class="container">
      <h2 class="second-title vl ms-5 mt-5 mb-4"> Art and cutural </h2>
      <p class="m-4 p-2">Amsterdam is one of the most popular cities in Europe and a hotbed for Dutch and international art
        and culture. In addition to being one of Europe’s greenest cities and famed for its canal networks which earn
        the city the nickname ‘Venice of the North’, there is an abundance of art and culture in Amsterdam. From
        galleries displaying world famous art, to an exciting music, film and theatre scene, the Dutch capital has a
        little bit of everything. Continue reading for our list below outlining eight things to see in Amsterdam that
        showcase the best of Dutch and international art and culture. For business travellers visiting The Netherlands
        and keen on exploring Amsterdam, these attractions are certainly worth visiting.</p>

      <div class="row row-cols-1 row-cols-md-3 ms-4 me-4">
        <div class="col-md-6 mb-4">
          <card :name="poiList[0].name" :img="poiList[0].img" :description="poiList[0].shortDescription" :path="'/attractions/'+poiList[0].name"></card>
        </div>
        <div class="col-md-3 mb-4">
          <card :name="poiList[1].name" :img="poiList[1].img" :description="poiList[1].shortDescription" :path="'/attractions/'+poiList[1].name"></card>
        </div>
        <div class="col-md-3 mb-4">
          <card :name="poiList[2].name" :img="poiList[2].img" :description="poiList[2].shortDescription" :path="'/attractions/'+poiList[2].name"></card>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 ms-4 me-4">
        <div class="col-md-6 mb-4">
          <card :name="poiList[3].name" :img="poiList[3].img" :description="poiList[3].shortDescription" :path="'/attractions/'+poiList[3].name"></card>
        </div>
        <div class="col-md-6 mb-4">
          <card :name="poiList[4].name" :img="poiList[4].img" :description="poiList[4].shortDescription" :path="'/attractions/'+poiList[4].name"></card>
        </div>
      </div>
    </div>

    <hr class="m-5">

    <div class="container">
      <h2 class="second-title vl ms-5"> Tickets for attractions and activities </h2>
    </div>

    <section id="tickets-info">
      <card-carousel :detailMatrix="generateMatrixFromArray(poiList, 4)"> </card-carousel>
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
    const { data } = await $axios.get('/api/pois')
    return {
      poiList: data,
    }
  },
}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
  margin: 0 auto 100px auto;
}

.second-title {
  padding-left: 10px;
}

.vl {
  border-left: 6px solid rgb(253, 0, 13, 255);;
}

.main-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
</style>