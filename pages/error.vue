<template>
  <main class="page-container">
    <section class="section-container error-messages p-5">
      <h1><span class="mdi mdi-alert-circle"></span><br />An error occurred</h1>
      <p>{{ $route.query.err }}</p>
      <base-button
        label="Go to the homepage"
        icon="mdi mdi-home-variant"
        @click.native="navigateTo('/')"
      />
    </section>
  </main>
</template>

<script>
export default {
  components: { },
  layout: "nocrumbs",
  head() {
    return {
      title: 'Plug-IT | Error',
    }
  },
  methods: {
      navigateTo(path){
          this.$router.push(path)
      }
  }
}
</script>

<style scoped></style>