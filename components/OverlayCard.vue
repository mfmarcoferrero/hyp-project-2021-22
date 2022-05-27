<template>
  <nuxt-link :to="`/${path}/${name}`">
    <div class="card shadow-lg p-0 mb-5 text-white">
      <img :src="img" class="card-img" alt="No image found">
      <div class="card-img-overlay">
        <h3 class="card-title text-center">{{ swapUnderscoresWithSpaces(name) }}</h3>
        <p class="card-text text-center">{{ description }}</p>
      </div>
    </div>
  </nuxt-link>
</template>


<script>
import CommonMixin from '~/mixins/common';

export default {
  name: 'OverlayCard',
  mixins: [CommonMixin],
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.card-img {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

.card {
  transition: 0.4s ease-out;

  &:hover {
    transform: scale(1.05);

    &:before {
      opacity: .5;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(black, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }

  .card-img-overlay {
    z-index: 3;
    transition: 0.4s ease-out;

    &:hover {
      transform: translate(0px, 100px) scale(1.5);
      //translate: (-20px, 0px);
      //transform: scale(1.3);
    }
  }
}
</style>