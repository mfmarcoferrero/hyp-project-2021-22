<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1024px"
      img-height="480px"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div>
        <b-carousel-slide
          v-for="(detail, detailIndex) of detailList"
          :key="`detail-index-${detailIndex}`"
          :caption="detail.name"
        >
          <b-img
            slot="img"
            class="d-block img-fluid w-100"
            img-width="1024px"
            img-height="480px"
            :src="detail.img"
            alt="image slot"
            v-on:click="goTo(detail.id)"
          />
        </b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
// TODO: Fix the img size (even if images on db have different sizes) and change the cursor icon when on the slide

export default {
  name: 'Carousel',
  props: {
    detailList: Array,
    required: true,
  },
  data() {
    return {
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
      this.$router.push(`/details/${id}`)
    },
  },
}
</script>