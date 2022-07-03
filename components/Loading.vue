<template>
  <div v-if="loading">
    <img src="https://s8.gifyu.com/images/ezgif.com-gif-maker438ae3a2d884770f.gif" class="spinner" style="height:250px; width:auto; margin: 50%;"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>
