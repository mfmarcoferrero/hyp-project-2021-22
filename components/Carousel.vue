<!-- 

    Component: Carousel
    Description: Classic bootstrap carousel with images in slides
    Use: homepage
    Props: 
      detailList -> list of images to place in each slide
      scrollTo -> clicking on this icon, page scroll to a specific session
         
-->

<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">

      <!-- For each image of detailList a new slide is created,
        Only the first one is declared as current slide (active slide) using Vue v-bind -->

      <div v-for="(detail, detailIndex) of detailList" :key="`detail-index-${detailIndex}`"
        v-bind:class="[carouselClass, detailIndex == 0 ? activeClass : '']">
        <img :src="detail.img" class="slide-img d-block" alt="image">
      </div>

      <!-- ScrollTo icon -->

      <a :href="scrollTo" class="scroll-down" address="true"></a>
    </div>

    <!-- Previous and next buttons -->

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
export default {
  name: 'Carousel',

  props: {
    detailList: {
      type: Array,
      required: true
    },
    scrollTo: {
      type: String,
    }
  },

  data() {
    return {
      //Bootstrap classes defined in variables
      carouselClass: 'carousel-item',
      activeClass: 'active',
    }
  }
}
</script> 

<style scoped>

/* Dimension of the image inside each slide */
.slide-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

:after,
:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Scroll down icon style definition and beahviour */

.scroll-down {
  opacity: 1;
  -webkit-transition: all .5s ease-in 3s;
  transition: all .5s ease-in 3s;
}

.scroll-down {
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -16px;
  display: block;
  width: 32px;
  height: 32px;
  border: 2px solid #FFF;
  background-size: 14px auto;
  border-radius: 50%;
  z-index: 2;
  -webkit-animation: bounce 2s infinite 2s;
  animation: bounce 2s infinite 2s;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
}

.scroll-down:before {
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 6px);
  transform: rotate(-45deg);
  display: block;
  width: 12px;
  height: 12px;
  content: "";
  border: 2px solid white;
  border-width: 0px 0 2px 2px;
}

/* Bounce animation for the scroll down icon */

@keyframes bounce {

  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}
</style>