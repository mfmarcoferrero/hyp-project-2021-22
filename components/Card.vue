<template>
  <div class="card" style="width: 100%;">
    <img class="card-img-top" :src="img" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ swapUnderscoresWithSpaces(name) }}</h5>
      <p class="card-text">{{ description }}</p>
      <nuxt-link :to="{ path: `/${path}/${name}` }" class="link-dark"> Read more
      </nuxt-link>
    </div>
  </div>
</template>
 
<script>
import CommonMixin from '~/mixins/common';
export default {
  mixins: [CommonMixin],
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
    },
    path: {
      type: String,
    }
  },
}
</script>
 
<style lang="scss" scoped>
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}

.card {
  transition: all 0.2s ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: 5px 6px 6px 2px #e9ecef;
  transform: scale(1.03);
}
</style>