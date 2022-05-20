<template>
  <div class="accordion" id="accordionExample">
  <div  v-for="(detail, detailIndex) of serviceDetails" :key="`detail-index-${detailIndex}`"
        class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" :class="{ collapsed: detailIndex > 0}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" :aria-expanded="i === 0" aria-controls="collapseOne">
        {{ detail.name }}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" :class="{show: i === 0}" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="row">
        <div class="col">
            <strong>{{ detail.name }}</strong>{{ detail.description }}<br/>
            Address: <code>{{ detail.address }}</code></br>
            Opening hours: <code>{{ detail.hours }}</code>
        </div>
        <div class="col">
            <img :src="detail.img" class="rounded img-fluid" alt="service photo"/>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    serviceDetails: {
        type: Array,
        required: true
    }
  },
  data(){
      return {
          accordionButton: 'accordion-button',
          collapsed: 'collapsed'
      }
  },
 
}
</script>

<style>
</style>