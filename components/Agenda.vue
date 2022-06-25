<template>
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="col col-lg-4 agenda-nav">
      <ul
        class="nav nav-pills mb-5 flex-column nav-justified"
        id="pills-tab"
        role="tablist"
      >
        <li
          v-for="(item, index) of categories"
          :key="index"
          class="nav-item d-grid gap-2"
          role="presentation"
        >
          <button
            class="btn btn-outline-dark m-1"
            :class="index === 0 ? 'active' : ''"
            :id="`${item}-tab`"
            data-bs-toggle="pill"
            :data-bs-target="`#${item}`"
            type="button"
            role="tab"
            :aria-controls="item"
            :aria-selected="index === 0"
            @click="item === 'Today' ? (selected = '') : (selected = item)"
          >
            {{ item }}
          </button>
        </li>
      </ul>
    </div>
    <div class="col col-lg-8 overflow-auto cards-list agenda-div">
      <div class="tab-content" id="pills-tabContent">
        <div
          v-for="(item, index) of categories"
          :key="index"
          class="tab-pane fade"
          :class="index === 0 ? 'show active' : null"
          :id="item"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="row row-cols-1 ps-5 pe-5">
            <div v-for="(item, index) of filtered" :key="index" class="col">
              <event-card
                class="mb-3"
                :title="swapDashesAndCapitalize(item.name)"
                :img="item.img"
                :location="item.location"
                :date="item.date"
                :path="'events/' + item.name"
              />
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
    EventCard,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: '',
      categories: ['Today', 'Tomorrow', 'This Week', 'This Month'],
    }
  },
  computed: {
    filtered() {
      if (this.selected === '') return this.list
      return this.list.filter((s) => s.season === this.selected)
    },
  },
}
</script>

<style>
.agenda-div {
  height: 500px;
}
</style>