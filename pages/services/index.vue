<template>
  <div class="page-container">
    <cover-image :img="coverImg" :title="title" />

    <!-- SECTION THAT RENDERS A TOPIC CARD FOR EACH TYPE OF SERVICE REGISTERED IN DB -->
    <section id="services-section">
      <div class="section-container mt-5">
        <h2 class="text-center"><strong>Which kind of service?</strong></h2>
        <div class="row mt-5 mb-1 row-cols-1 row-cols-md-2 row-cols-lg-5">
          <div
            v-for="(service, index) of servicesList"
            :key="`itinerary-index-${index}`"
            class="col"
          >
            <topic-card
              :title="swapUnderscoresWithSpaces(service.name)"
              :img="service.img"
              :path="'/services/' + service.name"
              class="mb-3"
            />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import Card from '@/components/Card.vue'
import TopicCard from '@/components/TopicCard.vue'
import CoverImage from '~/components/CoverImage.vue'

export default {
  mixins: [CommonMixin],
  components: {
    Card,
    TopicCard,
    CoverImage,
  },

  head() {
    return {
      title: 'Visit-DAM | Services',
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
      coverImg:
        'https://s8.gifyu.com/images/netherlands-transportation-1920x1080.jpg',
      title: 'Services & Facilities',
    }
  },

  async asyncData({ $axios }) {
    // Database table to populate service image, service description and markers array to show on map
    const { data } = await $axios.get('/api/services')
    return {
      servicesList: data,
    }
  },
}
</script>

<style scoped>

</style>
