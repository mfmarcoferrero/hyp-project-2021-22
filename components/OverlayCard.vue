<template>
  <div @click="goToDetails()" class="btn">
    <b-card
      overlay
      :img-src="img"
      img-alt="Card Image"
      text-variant="white"
      :title="name"
      fluid-grow
    >
      <b-card-text>
        {{description}}
      </b-card-text>
    </b-card>
  </div>
</template>


<script>
export default {
  name: 'OverlayCardComponent',
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
  },
  methods: {
    goToDetails() {
      this.$router.push(`/details/${this.id}`)
    },
  },
}
</script>

<style>
</style>