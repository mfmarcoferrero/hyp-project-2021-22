<template>
  <div class="layout-container bg-light">
    <the-header />
    <breadcrumbs />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'DefaultLayout',
  scrollToTop: true,
  components: {
    TheHeader,
    TheFooter,
    Breadcrumbs
  },
}
</script>


<style>
/* Font family for the whole website */
/* html {
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  letter-spacing: 0.4px;
} */
</style>