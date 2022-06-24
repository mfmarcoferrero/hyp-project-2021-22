<template>
  <div v-if="loading">
    <img src="https://i.pinimg.com/originals/f2/50/95/f250958979ba717571bf069ea43f053c.gif" class="spinner" style="height:150px; width:200px; margin: 50%;"/>
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