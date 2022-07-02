<!-- 

    Component: Agenda
    Description: Tab selector that use an array of categories (strings) to filter a list of JSON contents
    Use: events page
    Props: 
          list -> a list of json that is used to have informations about specific topics (all events)
          categories -> array of categories used to filter the list, creating tabs
          selected -> current category selected to show a the category tab
    Component imported: EventCard
    
 -->

<template>
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="col col-lg-4 agenda-nav">
      <!-- NavBar definition created using categories array -->
      <ul class="nav nav-pills mb-5 flex-column nav-justified" id="pills-tab" role="tablist">
        <li v-for="(item, index) of categories" :key="index" class="nav-item d-grid gap-2" role="presentation">
          <button class="nav-link" :class="index === 0 ? 'active' : ''" :id="`${item}-tab`" data-bs-toggle="pill"
            :data-bs-target="`#${item}`" type="button" role="tab" :aria-controls="item" :aria-selected="index === 0"
            @click="item === 'Today' ? (selected = '') : (selected = item)">
            {{ item }}
          </button>
        </li>
      </ul>
    </div>
    <!-- For each item in category array a new tab is generated into a div with scrolling behaviour (overflow with scroll) -->
    <div class="col col-lg-8 overflow-auto cards-list agenda-div">
      <div class="tab-content" id="pills-tabContent">
        <div v-for="(item, index) of categories" :key="index" class="tab-pane fade"
          :class="index === 0 ? 'show active' : null" :id="item" role="tabpanel" aria-labelledby="pills-home-tab">
          <div class="row row-cols-1 ps-5 pe-5">
            <div v-for="(item, index) of filtered" :key="index" class="col">
              <event-card class="mb-3" :title="swapDashesAndCapitalize(item.name)" :img="item.img"
                :location="item.location" :date="item.date" :path="'events/' + item.name" />
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
  name: 'Agenda',
  mixins: [CommonMixin],

  components: {
    EventCard, //Used to render the list of items into a tab
  },

  props: {
    list: { //List of items to show (each of them has a category definition)
      type: Array,
      required: true,
    },
    categories: { //List of categories
      type: Array,
      required: true
    },
    selected: { //Current category selected
      type: String,
      required: true
    }
  },

  computed: {
    // This function is used to filter the entire list of items,
    // selecting only items with the selected category attribute
    filtered() {
      return this.list.filter((item) => item.type === this.selected.toLowerCase())
    },
  }
}
</script>

<style scoped>
/* Definition of tab-div height */
.agenda-div {
  height: 400px;
}

/* Define amsterdam color for buttons */

.nav-pills .nav-link:not(.active) {
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
}

.nav-pills .nav-link {
  background-color: rgb(253, 0, 13, 255);
  color: white;
}
</style>