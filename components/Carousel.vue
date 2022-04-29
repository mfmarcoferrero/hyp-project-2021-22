<template>
  <div>
    <b-carousel
      id="carousel-1"
      fade
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <NuxtLink to="/city">
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/static/pictures/city.jpg"
            alt="image slot"
          >
          </NuxtLink>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <NuxtLink to="/food">
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/static/pictures/food.jpg"
            alt="image slot"
          >
          </NuxtLink>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <NuxtLink to="/temples">
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/static/pictures/temples.jpg"
            alt="image slot"
          >
          </NuxtLink>
        </template>
      </b-carousel-slide>

      </b-carousel>
    
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>