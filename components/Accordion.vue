<!-- 

    Component: Accordion
    Description: Std component from bootstrap 5 to show different tabs with content
    Use: In attractions/_id and services/_id
    Props: 
          detailList -> a list of json that is used to have informations about a topic

 -->

<template>
  <div class="accordion" id="accordionExample">
    <!-- For each detail in detailList generate a buttin and a tab in accordion -->
    <div v-for="(detail, detailIndex) of serviceDetails" :key="detailIndex" class="accordion-item">
      <h2 class="accordion-header" :id="`heading${detailIndex}`">
        <!-- Only the first detail in the list is open, all the others are collapsed -->
        <button class="accordion-button" :class="{ collapsed: detailIndex > 0 }" type="button" data-bs-toggle="collapse"
          :data-bs-target="`#collapse${detailIndex}`" :aria-expanded="detailIndex === 0" :aria-controls="`collapse${detailIndex}`">
          {{ detail.name }}
        </button>
      </h2>
      <div :id="`collapse${detailIndex}`" class="accordion-collapse collapse" :class="{ show: detailIndex === 0 }"
        :aria-labelledby="`heading${detailIndex}`" data-bs-parent="#accordionExample">
        <!-- Content inside a tab -->
        <div class="accordion-body">
          <div class="row">
            <div class="col">
              <strong>{{ detail.name }} </strong>{{ detail.description }}<br />
              Address: <code>{{ detail.address }}</code><br />
              Opening hours: <code>{{ detail.hours }}</code>
            </div>
            <div class="col">
              <img :src="detail.img" class="rounded img-fluid" alt="service photo" />
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
  // Definition of bootstrap classes as data
  data() {
    return {
      accordionButton: 'accordion-button',
      collapsed: 'collapsed'
    }
  },

}
</script>