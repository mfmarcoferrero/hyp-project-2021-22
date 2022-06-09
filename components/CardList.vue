<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group sticky" id="list-tab" role="tablist">
        <a
          class="list-group-item list-group-item-action active"
          id="list-winter-list"
          data-bs-toggle="list"
          href="#list-winter"
          role="tab"
          aria-controls="list-winter"
          @click="season = `winter`"
          >Winter events</a
        >
        <a
          class="list-group-item list-group-item-action"
          id="list-spring-list"
          data-bs-toggle="list"
          href="#list-spring"
          role="tab"
          aria-controls="list-spring"
          @click="season = `spring`"
          >Spring events</a
        >
        <a
          class="list-group-item list-group-item-action"
          id="list-summer-list"
          data-bs-toggle="list"
          href="#list-summer"
          role="tab"
          aria-controls="list-summer"
          @click="season = `summer`"
          >Summer events</a
        >
        <a
          class="list-group-item list-group-item-action"
          id="list-fall-list"
          data-bs-toggle="list"
          href="#list-fall"
          role="tab"
          aria-controls="list-fall"
          @click="season = `fall`"
          >Fall events</a
        >
      </div>
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tabContent">
        <div
          v-for="(event, eventIndex) of list"
          :key="eventIndex"
          class="tab-pane fade"
          :id="`list-${event.season}`"
          role="tabpanel"
          :aria-labelledby="`list-${event.season}-list`"
        >
          <h2>
            <nuxt-link :to="`/events/test`">
              {{ event.name }}
            </nuxt-link>
          </h2>
          <p>
            {{ event.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    filteredItems(){
    return this.list.filter(season => this.selectedCategories.includes(season))
    }
  }
}
</script>

<style>


</style>