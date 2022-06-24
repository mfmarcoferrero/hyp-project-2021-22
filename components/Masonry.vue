<template>
  <div>
    <div class="masonry">
      <div v-for="(item, itemIndex) of photoList" :key="`item-index-${itemIndex}`" class="item">
          <overlay-card :name="item.name" :description="item.description" :img="item.url" :path="item.path" />
      </div>
    </div>
  </div>
</template>

<script>
import OverlayCard from '@/components/OverlayCard.vue'

export default {
  name: 'Masonry',
  components: {
    OverlayCard,
  },
  props: {
    photoList: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      testList : [
        {
          name: "abde",
          description: "abcde",
          img: "https://images.pexels.com/photos/11991865/pexels-photo-11991865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "abde",
          description: "abcde",
          img: "https://images.pexels.com/photos/12447940/pexels-photo-12447940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "abde",
          description: "abcde",
          img: "https://images.pexels.com/photos/12019099/pexels-photo-12019099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "abde",
          description: "abcde",
          img: "https://images.pexels.com/photos/12217674/pexels-photo-12217674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "abde",
          description: "abcde",
          img: "https://images.pexels.com/photos/12361807/pexels-photo-12361807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "abde",
          description: "abcde",
          img: "https://images.pexels.com/photos/12317958/pexels-photo-12317958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "abde",
          description: "abcde",
          img: "https://images.pexels.com/photos/12250627/pexels-photo-12250627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "abde",
          description: "abcde",
          img: "https://images.pexels.com/photos/12199828/pexels-photo-12199828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "abde",
          description: "abcde",
          img: "https://images.pexels.com/photos/12094234/pexels-photo-12094234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ]
    }
  },
  methods: {

  },
}
</script>

<!-->
  TO DO: trovare un modo per cambiare lo stile del testo del figcaption (blu link sottolineato)
<-->

<style lang="scss" scoped>
/* Box-sizing reset: //w3bits.com/?p=3225 */
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

/* The Masonry Brick */
.item {
  background: #fff;
  padding: 0.6em;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .masonry {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 540px) {
  .masonry {
    column-count: 2;
  }
}

</style>