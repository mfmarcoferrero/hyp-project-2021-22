<template>
  <div class="page-container">

    <section id="image-carousel">
      <div class="container-carousel position-relative">
        <carousel :detailList="carouselImages" scrollTo="#quick-look" />
        <p class="
          fs-1
          text-center
          fw-bold
          position-absolute
          top-50
          start-50
          translate-middle
          shadow-plg
          cover-title
        ">
        {{carouselTitle}}
        </p>
      </div>
    </section>

    <section id="topic-menu">
      <div class="section-container">
        <h2 class="text-center m-5">{{topicMenuTitle}}</h2>
        <div class="row">
          <div v-for="(item, index) of categoriesList" :key="index" class="col-md m-2">
            <topic-card :title="item.name" :img="item.img" :path="item.name" />
          </div>
        </div>
      </div>
    </section>

    <hr class="m-5" />

    <section id="quick-look">
      <div class="section-container position-relative pb-5">
        <h2 class="second-title vl ms-5 mt-5 mb-4">Quick look</h2>
        <p class="m-4 p-2">
          {{ quickLookDescription }}
        </p>

        <div class="row row-cols-1 row-cols-lg-2 ms-4 me-4">
          <div class="col col-lg-6 mb-4">
            <card :name="topAttractions[0].name" :img="topAttractions[0].img"
              :description="topAttractions[0].shortDescription" :path="'/attractions/' + topAttractions[0].name"></card>
          </div>
          <div class="col col-lg-6 mb-4">
            <card :name="topEvents[0].name" :img="topEvents[0].img" :description="topEvents[0].description"
              :path="'/events/' + topEvents[0].name"></card>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-lg-3 ms-4 me-4">
          <div class="col col-lg-4 mb-4">
            <card :name="topAttractions[1].name" :img="topAttractions[1].img"
              :description="topAttractions[1].shortDescription" :path="'/attractions/' + topAttractions[1].name"></card>
          </div>
          <div class="col col-lg-4 mb-4">
            <card :name="topEvents[1].name" :img="topEvents[1].img" :description="topEvents[1].description"
              :path="'/events/' + topEvents[1].name"></card>
          </div>
          <div class="col col-lg-4 mb-4">
            <card :name="topAttractions[2].name" :img="topAttractions[2].img"
              :description="topAttractions[2].shortDescription" :path="'/attractions/' + topAttractions[2].name"></card>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Card from '@/components/Card.vue'

export default {

  head() {
    return {
      title: "Visit-DAM",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
    };
  },

  components: {
    Card,
    Carousel,
  },
  layout: 'nocrumbs',
  name: 'IndexPage',
  title: 'VisitDam',

  data() {
    return {
      carouselTitle: 'Welcome to Amsterdam !',
      topicMenuTitle: 'What are you looking for?',
      quickLookDescription: "With its picturesque canal network, rich history and thrumming cultural scene, the capital of the Netherlands is one of the world’s most vibrant cities. There are endless things to do in Amsterdam in any weather and many of the most rewarding experiences lie beyond the well-trodden tourist paths of the city centre. To lead you through the wealth of wonders, we’ve whittled down the selection to this essential places you can't leave without visiting, and some important events that are taking place in this period.",
      carouselImages: ['https://s8.gifyu.com/images/homepage-dam.jpg',
                       'https://s8.gifyu.com/images/GettyImages-659083249-5912430d3df78c92830e4eaa.jpg',
                       'https://s8.gifyu.com/images/gaurav-jain-2K2SR19RLg8-unsplash.jpg',
                       'https://s8.gifyu.com/images/tobias-kordt-2GaBftOdewQ-unsplash.jpg'
                      ],
      categoriesList: [
                      {
                          name: "Attractions",
                          img: "https://s8.gifyu.com/images/frans-ruiter-jfPGunIH_9M-unsplash.jpg",
                      },
                      {
                          name: "Itineraries",
                          img: "https://s8.gifyu.com/images/moritz-kindler-I5zb8Tw-Avc-unsplash.jpg",
                      },
                      {
                          name: "Events",
                          img: "https://s8.gifyu.com/images/pedro-cunha-GjUXroFNC0c-unsplash.jpg",
                      },
                      {
                          name: "Services",
                          img: "https://s8.gifyu.com/images/behzad-ghaffarian-ayrkUIy9r30-unsplash.jpg",
                      },
        ]
    };
  },

  async asyncData({ $axios }) {
    let topAttractions = []
    let topEvents = []
    const { data: attractions_details } = await $axios.get('/api/attractions-page-details')
    const { data: event_details } = await $axios.get('/api/events')

    for (var item of attractions_details) {
      if (item.category == 'top') topAttractions.push(item)
    }
    for (var item of event_details) {
      if (item.season == 'summer') topEvents.push(item)
    }
    return {
      path: 'attractions',
      topAttractions: topAttractions,
      topEvents: topEvents,
    }
  },
}
</script>
