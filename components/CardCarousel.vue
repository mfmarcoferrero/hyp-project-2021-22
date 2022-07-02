<!-- 

    Component: CardCarousel
    Description: Classic bootstrap carousel with n cards in each slide
    Use: attractions, itineraries/_id
    Props: 
      detailMatrix -> 2-dimension array that is used to create m number of slides and n cards in each slide
      path -> clicking on the card redirect to this path/card_name 
         
-->

<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">

      <!-- For each list in the 2-dim array a new slide is created 
      (only the first one have the bootstrap activeClass reference - first slide) -->

      <div v-for="slideIndex in detailMatrix.length" :key="slideIndex"
        v-bind:class="[carouselClass, slideIndex == 1 ? activeClass : '']">
        <div class="container">

          <!-- Inside each slide the correspondig list of elements 
          is rendered with component cards in a row  -->

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 p-5">
            <div v-for="(detail, detailIndex) of detailMatrix[slideIndex - 1]" :key="detailIndex" class="col-sm">
              <card :img="detail.img" :name="detail.name" :path="'/attractions/' + detail.name"></card>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Previous and next buttons with custom icons -->

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>
</template>

<script>

//Card carousel is different from Image carousel because to create a sequence of cards(columns) into a slide
// needs a matrix in which details are divided into lists
// I'll use a function defined in mixins to convert a list into a matrix with lists of n(num cards) elements
import CommonMixin from '~/mixins/common'
import Card from '@/components/Card.vue'
export default {
  mixins: [CommonMixin],
  name: 'CardCarousel',
  components: {
    Card
  },

  data() {
    return {
      // definition of bootstrap classes as variables
      carouselClass: 'carousel-item',
      activeClass: 'active',
    }
  },

  props: {
    detailMatrix: {
      type: Array,
    },
    path: {
      type: String,
    },
  },
}
</script>

<style scoped>
/*Import of different icons for controls (black and with bigger dimension)*/
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}
</style>