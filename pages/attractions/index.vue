<template>
  <div class="wrapper page-container">
    <img src="https://s8.gifyu.com/images/attractions-1.jpg" alt="no image" class="main-img">

    <div class="container">
      <div class="row m-5">
        <div class="col">
          <card name="Guided Tours" :img="img" path="/itineraries" />
        </div>
        <div class="col">
          <card name="Amsterdam Areas" :img="img" path="/neighbourhoods" />
        </div>
        <div class="col">
          <card name="Buy Tickets" :img="img" path="#tickets-info" />
        </div>
      </div>
    </div>

    <div class="container">
      <h2 class="second-title vl m-5"> Most visited attractions </h2>

      <div class="row m-3">
        <div class="col">
          <card :name="name" :img="img"></card>
        </div>
        <div class="col">
          <card :name="name" :img="img"></card>
        </div>
      </div>

      <div class="row m-3">
        <div class="col">
          <card :name="name" :img="img"></card>
        </div>
        <div class="col">
          <card :name="name" :img="img"></card>
        </div>
        <div class="col">
          <card :name="name" :img="img"></card>
        </div>
      </div>

    </div>

    <div class="container">
      <h2 class="second-title vl m-5"> Art and cutural </h2>

      <div class="row m-3">
        <div class="col">
          <card :name="name" :img="img"></card>
        </div>

        <div class="col">
          <div class="row m-3">
            <div class="col">
              <card :name="name" :img="img"></card>
            </div>
            <div class="col">
              <card :name="name" :img="img"></card>
            </div>
          </div>

          <div class="row m-3">
            <div class="col">
              <card :name="name" :img="img"></card>
            </div>
            <div class="col">
              <card :name="name" :img="img"></card>
            </div>
          </div>
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

export default {
  name: 'AttractionsPage',
  title: 'Attractions',
  mixins: [CommonMixin],
  components: {
    OverlayCard,
    Card,
    CardCarousel
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
  border-left: 6px solid red;
}

.main-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
</style>