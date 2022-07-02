<!-- 

    Component: CardList
    Description: Tab selector that use an array of categories (strings) to filter a list of JSON contents
    Use: events page
    Props: 
          list -> a list of json that is used to have informations about specific topics (all events)
          categories -> array of categories used to filter the list, creating tabs
    Component imported: EventCard
    
    It is similar to agenda but vertical layout
  -->

<template>
  <div class="container">
    <div class="row ">
      <ul class="nav nav-pills mb-5 justify-content-center" id="pills-tab" role="tablist">
        <li v-for="(item, index) of categories" :key="index" class="nav-item" role="presentation">

          <!-- Only the first element of the list in the navbar is active (button selected ) -->
          
          <button class="nav-link" :class="index === 0 ? 'active' : null" :id="`${item.name}-tab`" data-bs-toggle="pill"
            :data-bs-target="`#${item.name}`" type="button" role="tab" :aria-controls="item.name"
            :aria-selected="index === 0" @click="item.name === 'all' ? (selected = '') : (selected = item.name)">
            {{ swapDashesAndCapitalize(item.name) }}
          </button>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="tab-content" id="pills-tabContent">

        <!-- Create a tab-pane for each element in the categories array -->

        <div v-for="(item, index) of categories" :key="index" class="tab-pane fade"
          :class="index === 0 ? 'show active' : null" :id="item.name" role="tabpanel" aria-labelledby="pills-home-tab">
          <h2 class="second-title vl ms-5 mb-4">{{ swapDashesAndCapitalize(selected) }} Events</h2>
          <p class="m-4 p-2">
            {{ item.description }}
          </p>
          <div class="row row-cols-1 row-cols-lg-2 ms-4 me-4">

            <!-- Insert in each tab an event card for each element with the category selected using function filtered -->

            <div v-for="(item, index) of filtered" :key="index" class="mb-3">
              <event-card class="mb-3" :title="swapDashesAndCapitalize(item.name)" :img="item.img"
                :description="item.description" :location="item.location" :date="item.date"
                :path="'events/' + item.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import CommonMixin from '@/mixins/common.js'

export default {
  name: 'CardList',
  mixins: [CommonMixin],
  components: {
    EventCard,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: '',
    }
  },
  computed: {

    // This function is a filter for a list of item (filtering on the season) 
    
    filtered() {
      if (this.selected === '') return this.list
      return this.list.filter((item) => item.season === this.selected)
    },
  },
}
</script>

<style scoped>

/* not active nav pill style */
.nav-pills .nav-link:not(.active) {
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
}

/* active (faded) nav pill style */
.nav-pills .nav-link {
  background-color: rgb(253, 0, 13, 255);
  color: white;
}
</style>