<template>
  <div class="page-container">
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
                  img="https://www.medicalgroupitalia.it/wp-content/uploads/2021/11/clicca-e-scopri-il-nostro-team-traumatology-center-medical-group-italia.jpg"
                  path="services/Medical_Services"
                  imgHeight="300px"
                />
              </div>
              <div class="col-md m-2">
                <topic-card
                  title="Cultural Services"
                  img="https://www.eui.eu/Content-Types-Assets/Services/Library/Librarian-showing-books.xa04803ee.JPG?w=586&h=330&fit=crop"
                  path="services/Cultural_Services"
                  imgHeight="300px"
                />
              </div>
              <div class="col-md m-2">
                <topic-card
                  title="Leisure Services"
                  img="https://dutchreview.com/wp-content/uploads/walibi-holland-theme-park-netherlands-rollercoaster.jpeg"
                  path="services/Thematic_and_leisure_parks"
                  imgHeight="300px"
                />
              </div>
              <div class="col-md m-2">
                <topic-card
                  title="Work Services"
                  img="https://media.istockphoto.com/photos/young-asian-engineer-woman-picture-id1147555040?k=20&m=1147555040&s=612x612&w=0&h=zTWGl6N-nLBPK1iNGqo3BuZY2UZMcpMWMHD2DRQKv0k="
                  path="services/Work_Services"
                  imgHeight="300px"
                />
              </div>
              <div class="col-md m-2">
                <topic-card
                  title="Student Services"
                  img="https://i0.wp.com/oecdedutoday.com/wp-content/uploads/2020/10/PISA-Volume-VI-blog.jpg?fit=1200%2C675&ssl=1"
                  path="services/Student_Services"
                  imgHeight="300px"
                />
              </div>
            </div><br>
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

  head() {
    return {
      title: 'Visit-DAM | Services',
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

<style scoped>
.page-container{
  background: white;
}
.wrapper {
  overflow: visible;
  margin: 0 auto 100px auto;
}

.cardwrapper {
  column-count: 4;
  column-gap: 10px;
}

.col-sm-auto {
  overflow: visible;
}
</style>
