<template>
  <b-breadcrumb class="mb-0" :items="items"></b-breadcrumb>
</template>

<script>
  export default {
    name: 'Breadcrumbs',
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