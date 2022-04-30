<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Test',
            href: '#'
          },
          {
            text: 'Breadcrumbs',
            href: '#'
          },
          {
            text: 'Implementation',
            active: true
          }
        ]
      }
    }
  }
</script>