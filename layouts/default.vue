<template>
  <div>
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
  components: {
    TheHeader,
    TheFooter,
    Breadcrumbs
  },
}
</script>