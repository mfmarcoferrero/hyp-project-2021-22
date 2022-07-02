<!-- 

    Component: Card
    Description: Classic bootstrap card with some hover effected added
    Use: homepage, attractions, itineraries
    Props: 
      name -> name of a specific topic
      img -> img of a specific topic
      description -> description (short or long) of a specific topic
      path -> clicking on the card redirect to this path  
         
-->

<template>
  <!-- Clicking on the whole component, a redirect to a defined path is performed -->
  <div class="card" @click="goTo(path)">
    <img class="card-img-top" :src="img" alt="Card image cap">
    <div class="card-body">
      <!-- Use common mixins to render name without '-' or '_' -->
      <h5 class="card-title second-title vl">{{ swapDashesAndCapitalize(name) }}</h5>
      <p class="card-text description-text">{{ description }}</p>
    </div>
  </div>
</template>
 
<script>
import CommonMixin from '~/mixins/common';
export default {
  mixins: [CommonMixin],
  scrollToTop: true,
  name: 'CardComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      //required: true,
    },
    path: {
      type: String,
      required: true
    },
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  }
}
</script>
 
<style lang="scss" scoped>

// Fixed dimension for heigth of the img
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}

// Cursor change in pointer when hover and component change 
// its dimensions on the basis of the parent div
.card {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
  cursor: pointer;
}

// Some shadows are present when hover
.card:hover {
  box-shadow: 6px 6px 6px 6px #e9ecef;
  transform: scale(1.005);
}

// Truncate the text when overflow its container with max-height 100px 
.description-text {
  width: 100%;
  max-height: 100px;
  max-height: 100px;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
}
</style>