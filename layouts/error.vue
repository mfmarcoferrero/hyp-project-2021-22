<template>
  <main class="page-container">
    <section class="section-container error-messages p-5">
      <img src="https://s8.gifyu.com/images/sad-emoji-by-google.png" height="300">
      <h1><br />There is nothing here...</h1>
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4 m-5"
        @click="navigateTo('/')"
      >
        Back to homepage
      </button>
    </section>
  </main>
</template>

<script>
export default {
  components: { },
  layout: "nocrumbs",
  head() {
    return {
      title: 'Visit DAM | Error',
    }
  },
  methods: {
      navigateTo(path){
          this.$router.push(path)
      }
  },
}
</script>

<style scoped></style>