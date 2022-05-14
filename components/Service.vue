<template>
  <div>
    <div class="media">
    <img class="mr-3" :src="detail.img" alt="image">
    <div class="media-body">
    <h5 class="mt-0">{{detail.name}}</h5>
        {{detail.description}}
    </div>
    <h1>Locate the service</h1>
    <p>map</p>
    <!-- map -- :pins="detail.pins" -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Service',
  props: {
    detailList: Array,
    required: true,
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>