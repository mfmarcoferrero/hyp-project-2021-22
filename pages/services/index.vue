<template>
  <div class="wrapper page-container">
    <cover-image :img="coverImg" :title="title" />
    <!-- v-for bootstrap cards taking elements from database -->
    <div class="container position-relative pb-5">
      <div class="row mt-3 justify-content-md-center">
        <section id="topic-menu">
          <div class="container">
            <br>
            <h2 class="text-center"><strong>Which kind of service?</strong></h2>
            <div class="row m-5">
              <div class="col-md m-2">
                <topic-card
                  title="Medical Services"
                  img="https://s8.gifyu.com/images/808x454_cmsv2_b3d598a0-bec1-5f13-bc92-88ae94163b73-6744142.jpg"
                  path="services/Medical_Services"
                />
              </div>
              <div class="col-md m-2">
                <topic-card
                  title="Cultural Sergives"
                  img="https://s8.gifyu.com/images/91a051430ab15c667bad0d64bba0ff45299d9f28.jpg"
                  path="services/Cultural_Services"
                />
              </div>
              <div class="col-md m-2">
                <topic-card
                  title="Leisure Services"
                  img="https://s8.gifyu.com/images/14896f158a325e49575.jpg"
                  path="services/Thematic_and_leisure_parks"
                />
              </div>
              <div class="col-md m-2">
                <topic-card
                  title="Work Services"
                  img="https://s8.gifyu.com/images/808x454_cmsv2_b3d598a0-bec1-5f13-bc92-88ae94163b73-6744142.jpg"
                  path="services/Job_Services"
                />
              </div>
              <div class="col-md m-2">
                <topic-card
                  title="Student Services"
                  img="https://s8.gifyu.com/images/808x454_cmsv2_b3d598a0-bec1-5f13-bc92-88ae94163b73-6744142.jpg"
                  path="services/Student_Services"
                />
              </div>
            </div><br><br><br>
            <div class="text-center">
            <img src="https://i.pinimg.com/originals/f2/50/95/f250958979ba717571bf069ea43f053c.gif"
                   class="img-responsive text-center"
                   style="height:150px; width:200px;" >
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Masonry from '@/components/Masonry.vue'
import HoverCard from '@/components/HoverCard.vue'
import CoverImage from '~/components/CoverImage.vue'

export default {
  components: {
    Card,
    Masonry,
    HoverCard,
    CoverImage,
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
      serviceDetails: data,
      path: 'services',
    }
  },
}
</script>

<style>
.wrapper {
  overflow: visible;
  margin: 0 auto 100px auto;
  background:white;
}

.cardwrapper {
  column-count: 4;
  column-gap: 10px;
}

.col-sm-auto {
  overflow: visible;
}
</style>
