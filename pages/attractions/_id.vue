<template>
  <div class="page-container mt-5">
    <section id="description">
      <div class="section-container mb-5">
        <h1 class="title text-center">{{ swapUnderscoresWithSpaces(name) }}</h1>
        <div class="row row-cols-1 row-cols-lg-2 mt-5">
          <div class="col">
            <p class="p-4">{{ description }}</p>
          </div>
          <div class="col">
            <img :src="img" alt="No img" class="img-fluid id-img" />
          </div>
        </div>
      </div>
    </section>

    <hr />

    <section id="info">
      <div class="section-container mt-3">
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col mb-3">
            <google-map :query="name" height="400px" />
          </div>
          <div class="col">
            <div class="">
              <h2 class="text-center"> {{ relatedInformations }} </h2>
            </div>
            <br />

            <div class="row row-cols ms-3">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <p><strong> {{ events }} </strong> {{ takingPlace }}</p>
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <ul>
                        <p v-if="numberOfEvents == 0"><strong> {{ noEvents }} </strong></p>
                        <li v-for="(item, index) of eventList" :key="index">
                          <nuxt-link :to="`/events/`+item.name">
                            <strong> {{ swapDashesAndCapitalize(item.name) }} </strong>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <p>
                        <strong> {{ itineraries }} </strong> {{ includeThisPlace }}
                      </p>
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <ul>
                        <li v-for="(item, index) of itineraryList" :key="index">
                          <nuxt-link :to="`/itineraries/`+item.name">
                            <strong> {{ item.name }} </strong>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="
        section-container
        d-grid
        gap-2
        d-md-flex
        justify-content-md-start
        mb-b
        mt-5
      ">
      <button type="button" class="btn btn-outline-dark btn-lg px-4" @click="backToList">
        {{ backToAttractions }}
      </button>
    </div>

    <!-- You may also like content -->

    <!--section id="other-attractions">
      <h1> You may also like </h1>
      <card-carousel></card-carousel>
    </section-->
  </div>
</template>

<style scoped>
</style>

<script>
import CommonMixin from '@/mixins/common.js'
import GoogleMap from '@/components/Map.vue'
import CardCarousel from '~/components/CardCarousel.vue'
export default {
  scrollToTop: true,
  name: 'DetailsPage',
  components: {
    GoogleMap,
    CardCarousel,
  },
  data() {
    return {
        relatedInformations: "Related informations",
        events: "Events",
        takingPlace: "taking place here",
        noEvents: "There are currently no events scheduled here!",
        itineraries: "Itineraries",
        includeThisPlace: "that include this place",
        backToAttractions: "Back to all the attractions"
    }
  },

  mixins: [CommonMixin],

  head() {
    return {
      title: 'Visit-DAM | ' + this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.name + ': ' + this.shortDescription,
        },
      ],
    }
  },

  async asyncData({ route, $axios, redirect }) {
    let numberOfEvents
    const { id } = route.params
    const { data: poiInfo } = await $axios.get(`/api/pois/` + id)
    const { data: eventList} = await $axios.get(`/api/eventsByPlace/` + id)
    const { data: itineraryList} = await $axios.get(`/api/itinerariesByPlace/` + id)
    console.log("lenght: " + Object.keys( eventList ).length )
    numberOfEvents = Object.keys( eventList ).length
    console.log(numberOfEvents)
    if (poiInfo == null || eventList == null) {
      return redirect('/error/?err=This attraction does not exist!')
    }
    return {
      name: poiInfo.name,
      img: poiInfo.img,
      shortDescription: poiInfo.shortDescription,
      description: poiInfo.description,
      itineraryList : itineraryList,
      eventList: eventList,
      numberOfEvents: numberOfEvents,
    }
  },

  methods: {
    backToList() {
      this.$router.push('/attractions/list')
    },
  },
}
</script>
