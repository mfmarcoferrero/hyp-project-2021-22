<template>
  <div>
    <b-card
      :title="name"
      :img-src="img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ description }}
      </b-card-text>
      <div @click="goToDetails()" class="btn btn-primary">See Details</div>
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
    path: {
      type: String,
      required: true
    }
  },
  methods: {
    goToDetails() {
      this.$router.push(`/${this.path}/${this.id}`)
    },
  },
}
</script>

<style>
</style>