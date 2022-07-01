<template>
  <div class="card" @click="goTo(path)">
    <img class="card-img-top" :src="img" alt="Card image cap">
    <div class="card-body">
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
      //required: true
    },
    // goToPath: {
    //   type: Boolean,
    //   required: true
    // } 
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  }
}
</script>
 
<style lang="scss" scoped>
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}

.card {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: 6px 6px 6px 6px #e9ecef;
  transform: scale(1.005);
}

.description-text {
  width: 100%;
  max-height: 100px;

  // Truncate the text when overflow its container with max-height 100px 

  // overflow: hidden;
  max-height: 100px;
  -webkit-box-orient: vertical;
  // display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;

  // background: linear-gradient(to bottom right, #000000 70%, #ffffff 100%);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
}
</style>