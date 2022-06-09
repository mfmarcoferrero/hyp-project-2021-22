<template>
  <div class="page container-fluid mt-4 wrapper">
  <div class="row m-5">
  <h1 style="text-align: center">What's up in Amsterdam?</h1>
  </div>
<!--   <div class="row g-5">
    <div class="col-sm-2">
      <div id="list-example" class="list-group">
        <a class="list-group-item winter" href="#list-item-1">Winter events</a>
        <a class="list-group-item spring" href="#list-item-2">Spring events</a>
        <a class="list-group-item summer" href="#list-item-3">Summer events</a>
        <a class="list-group-item autumn" href="#list-item-4">Autumn events</a>
      </div>
    </div>
    <div class="col"> 
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <h4 id="list-item-1">Item 1</h4>
          <p>{{lipsum}}</p>
        <h4 id="list-item-2">Item 2</h4>
          <p>{{lipsum}}</p>
        <h4 id="list-item-3">Item 3</h4>
           <p>{{lipsum}}</p>
        <h4 id="list-item-4">Item 4</h4>
           <p>{{lipsum}}</p>
      </div>
    </div>
  </div>
  </div> -->
<!--       <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
        <h4>Winter events</h4>
        <p>{{lipsum}}</p>
      </div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
        <h4>Spring events</h4>
        <p>{{lipsum}}</p>
      </div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
        <h4>Summer events</h4>
        <p>{{lipsum}}</p>
      </div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
        <h4>Autumn events</h4>
        <p>{{lipsum}}</p>
      </div> -->
      
      <card-list :list="eventList" />

  </div>
</template>

<script>
import Map from '@/components/Map.vue'
import CardList from '@/components/CardList.vue'
export default {
  
  components: {
    Map,
    CardList,
  },
  data() {
    return {
    lipsum : `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non metus pretium, suscipit ipsum ut, tincidunt urna. Ut quam justo, pulvinar in bibendum at, tempus vel elit. In convallis vulputate magna, ac efficitur quam porttitor sit amet. Aliquam posuere urna enim, sit amet ornare quam interdum et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ac accumsan mi. Cras quis nibh at lacus sagittis gravida. Suspendisse accumsan gravida malesuada.

Duis euismod mi mauris, sed sagittis tellus ultrices vitae. Praesent consequat vehicula molestie. Morbi convallis pulvinar ex, eu porta diam venenatis vel. Quisque efficitur mauris quis mattis vulputate. Nullam vel ultrices sem. Sed non ex vel mauris congue dapibus gravida id lectus. Nulla varius tincidunt vestibulum. Ut blandit ullamcorper dolor, et porta tellus interdum sagittis. Quisque at mauris a nunc mattis gravida. Nullam aliquam aliquet mollis. Duis varius laoreet sollicitudin. Aliquam vulputate sed odio iaculis commodo. Aliquam placerat in velit id venenatis.

Proin sodales urna eu tempor hendrerit. Cras accumsan velit vitae lectus luctus, vel mollis lacus dictum. Donec hendrerit odio ipsum, et cursus quam rutrum nec. Nunc accumsan et mi et ornare. Nam dignissim porta nisi quis bibendum. Aenean a pharetra justo. Nulla ex dui, lobortis ac faucibus in, auctor ac est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet sodales mauris.

Vivamus eget tincidunt ipsum. Phasellus tempor viverra urna, sed consequat massa rhoncus in. Donec vehicula dapibus sem, non mattis est sollicitudin eget. Suspendisse sed sollicitudin risus. Nam dignissim, mauris sit amet ultricies eleifend, dui libero sagittis tortor, eu consequat erat neque sed justo. Nunc erat nibh, tempor sed volutpat a, accumsan eu diam. Etiam interdum, nisi id sollicitudin rutrum, nisl leo ornare erat, vitae faucibus felis neque non ante. In in nunc dui. In sodales felis nisi, ac consectetur massa placerat vitae. Morbi ac metus nec felis varius vehicula sed nec ante. Praesent egestas lacus justo, sed aliquet magna mattis at. Quisque gravida arcu ac auctor maximus. Morbi vestibulum nunc ultricies dolor molestie porttitor. Pellentesque enim enim, commodo sit amet convallis sed, sagittis eget augue. Ut sollicitudin justo eros, ac tempus ipsum tincidunt sit amet.

Praesent nec lacus a orci condimentum imperdiet. Quisque eu nibh ornare, commodo leo vel, fermentum neque. Mauris volutpat eleifend arcu, sed laoreet augue rhoncus ut. Etiam non euismod velit. Ut lobortis, urna id ornare hendrerit, neque urna hendrerit ipsum, non maximus arcu erat a erat. Curabitur ultricies, ex a interdum faucibus, lacus erat porttitor sem, at fermentum ex elit at est. Nunc gravida ullamcorper nulla. Aliquam auctor tristique magna, et viverra erat lacinia in. Morbi sit amet tellus semper, tincidunt purus et, tincidunt lectus. Proin lorem magna, euismod a ligula vitae, viverra tincidunt augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. `

    }
  },
    async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
    }
  }

}
</script>

<style scoped>

.list-group {
  position: sticky;
  top: 10px;
  left: 10px;
}

.winter{
  background-color: rgb(178, 216, 216);
}
.spring{
  background-color: rgb(182, 227, 169);
}
.summer{
  background-color: rgb(255, 252, 177);
}
.autumn{
  background-color: rgb(176, 155, 133);
}

</style>