<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(detail, detailIndex) of detailList" :key="`detail-index-${detailIndex}`"
        v-bind:class="[carouselClass, detailIndex == 0 ? activeClass : '']" v-on:click="goTo(detail.id)">
        <img :src="detail.img" class="d-block w-100" alt="second">
        <div class="carousel-caption d-none d-md-block">
          <h2>{{ swapUnderscoresWithSpaces(detail.name) }}</h2>
          <p>{{ detail.description }}</p>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
// TODO: Fix the img size (even if images on db have different sizes) and change the cursor icon when on the slide
//       the image format that is the best one for the carousel is the static/pictures/dam.jpeg file format

export default {
  name: 'Carousel',
  props: {
    detailList: Array,
    required: true,
  },
  data() {
    return {
      carouselClass: 'carousel-item',
      activeClass: 'active',
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    goTo(id) {
      this.$router.push(`/attractions/${id}`)
    },
	  swapUnderscoresWithSpaces(string){
        return string.replace(/_/g, " ");
    }
  },
}
</script> 