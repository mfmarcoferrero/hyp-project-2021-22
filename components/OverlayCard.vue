<template>
  <div>
    <b-card
      overlay
      img-src="https://fs.i3lab.group/hypermedia/cats/birman.jpg"
      img-alt="Card Image"
      text-variant="white"
      title="name"
      sub-title=""
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