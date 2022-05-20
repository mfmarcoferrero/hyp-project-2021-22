<template>
<div>
  <!-- div class="page container-fluid mt-4">
  <div class="row g-4">
    <div class="col">
     <div class="p-3 border rounded bg-light">Content 1</div>
    </div>
    <div class="col">
     <div class="p-3 border rounded bg-light">Content 2</div>
    </div>
    <div class="col">
     <div class="p-3 border rounded bg-light">Content 3</div>
    </div>
    <div class="col">
     <div class="p-3 border rounded bg-light">Content 4</div>
    </div>
    <div class="col">
     <div class="p-3 border rounded bg-light">Content 5</div>
    </div>
    <div class="col">
     <div class="p-3 border rounded bg-light">Content 6</div>
    </div>
  </div>
</div -->
<!-- div class="grid-container">
  <img src="https://static2-viaggi.corriereobjects.it/wp-content/uploads/2019/11/1-1.jpg?v=353239" class="rounded img-fluid" alt="...">
  <img src="https://www.lamialiguria.it/images/2020/manarola_AG_m.jpg" class="rounded img-fluid" alt="...">
  <img src="https://fotocomefare.com/wp-content/uploads/2020/03/consigli-fotografia-inverno.jpg" class="rounded img-fluid" alt="...">
  <img src="https://www.keblog.it/wp-content/uploads/2019/07/fotografo-mostra-trucchi-foto-creative-jordi-puig-21.jpg" class="rounded img-fluid" alt="...">
  <img src="https://www.keblog.it/wp-content/uploads/2019/12/le-piu-belle-foto-del-2019-15.jpg" class="rounded img-fluid" alt="...">
  <img src="https://static2-viaggi.corriereobjects.it/wp-content/uploads/2020/05/Gesamtsieger_K2_1_peter_lindel_a_hares_dream-1080x720.jpg?v=382917" class="rounded img-fluid" alt="...">
</div-->


<div class="container">
  <figure>
    <img src="https://assets.codepen.io/12005/windmill.jpg" class="rounded img-fluid" alt="A windmill" />
    <figcaption><a href="#">1</a></figcaption>
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/suspension-bridge.jpg" class="rounded img-fluid" alt="The Clifton Suspension Bridge" />
    <figcaption><a href="#">2</a></figcaption>
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/sunset.jpg" class="rounded img-fluid" alt="Sunset and boats" />
    <figcaption><a href="#">3</a></figcaption>
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/snowy.jpg" class="rounded img-fluid" alt="a river in the snow" />
    <figcaption><a href="#">4</a></figcaption>
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/bristol-balloons1.jpg" class="rounded img-fluid" alt="a single checked balloon" />
    <figcaption><a href="#">5</a></figcaption>
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/dog-balloon.jpg" class="rounded img-fluid" alt="a hot air balloon shaped like a dog" />
    <figcaption><a href="#">6</a></figcaption>
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/abq-balloons.jpg" class="rounded img-fluid" alt="View from a hot air balloon of other balloons" />
    <figcaption><a href="#">7</a></figcaption>
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/disney-balloon.jpg" class="rounded img-fluid" alt="a balloon fairground ride" />
    <figcaption><a href="#">8</a></figcaption>
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/bristol-harbor.jpg" class="rounded img-fluid" alt="sunrise over a harbor" />
    <figcaption><a href="#">9</a></figcaption>
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/bristol-balloons2.jpg" class="rounded img-fluid" alt="three hot air balloons in a blue sky" />
    <figcaption><a href="#">10</a></figcaption>
  </figure>
  <figure>
  <img src="https://assets.codepen.io/12005/toronto.jpg" class="rounded img-fluid" alt="the Toronto light up sign at night" />
    <figcaption><a href="#">11</a></figcaption>
  </figure>
</div>

<div class="page container-fluid mt-4">
  <div class="row">
    <div class="col">
        <google-map/>
    </div>
    <div class="col">
      <accordion :serviceDetails="serviceDetails"/>
    </div>
  </div>
</div>



</div>
</template>

<script>

import GoogleMap from '@/components/Map.vue'
import Accordion from '@/components/Accordion.vue'

export default {
  components: {
    GoogleMap,
    Accordion,
  },
   async asyncData({ $axios }) {
    // Database table to populate service name, image, description and opening hours.  
    const { data } = await $axios.get('/api/service/medical')
    return {
      serviceDetails: data,
      path: "service"
    }
  }

}
</script>

<style scoped>
/*
.grid-container {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-gap: 20px;
    text-align: center;
    margin-top: 1rem;
    grid-template-columns: repeat(3, 1fr);
} */

body {
  background-color: rgb(255, 255, 255);
  font: 1.1em Arial, Helvetica, sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
}

figure > img {
  grid-row: 1 / -1;
  grid-column: 1;
}

figure a {
  color: black;
  text-decoration: none;
}

figcaption {
  grid-row: 2;
  grid-column: 1;
  background-color: rgba(255,255,255,.5);
  padding: .2em .5em;
  justify-self: start;
}

.container {
  column-count: 4;
  column-gap: 10px;
}
</style>