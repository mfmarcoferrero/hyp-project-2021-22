<template>
  <div class="container">
    <div class="row">
      <ul class="nav nav-pills mb-5 justify-content-center" id="pills-tab" role="tablist">
        <li v-for="(item, index) of categories" :key="index" class="nav-item" role="presentation">
          <button class="btn btn-outline-dark m-1" :class="index === 0 ? 'active' : ''" :id="`${item}-tab`"
            data-bs-toggle="pill" :data-bs-target="`#${item}`" type="button" role="tab" :aria-controls="item"
            :aria-selected="index === 0" @click="item === 'all' ? (selected = '') : (selected = item)">
            {{ swapDashesAndCapitalize(item) }}
          </button>
        </li>
      </ul>
    </div>
    <div class="">
      <div class="tab-content overflow-auto list-div" id="pills-tabContent">
        <div v-for="(item, index) of categories" :key="index" class="tab-pane fade"
          :class="index === 0 ? 'show active' : null" :id="item" role="tabpanel" aria-labelledby="pills-home-tab">
          <div class="row row-cols-1 m-1">
            <div v-for="(item, index) of filtered" :key="index" class="col">
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
import Card from '@/components/Card.vue'
import CommonMixin from '@/mixins/common.js'

export default {
  name: 'CardList',
  mixins: [CommonMixin],
  components: {
    Card,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      //required: true,
    }
  },
  data() {
    return {
      selected: ''
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

<style lang="scss" scoped>
.list-div {
  height: 500px;
}

</style>