<template>
<div>  
<div class="container">
  <div v-for="(item, itemIndex) of photoList">
    <nuxt-link :to="`/${path}/${item.name}`">
    <figure>
        <img :src="item.img" class="rounded img-fluid" :alt="item.name" />
        <figcaption>{{ item.name }}</figcaption>
    </figure>
    </nuxt-link>
  </div>
</div>


</div>
</template>

<script>
export default {
name: 'Masonry',
  props: {
    photoList: {
        type: Array,
        required: true
    },
    path: {
        type: String,
        required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<!-->
  TO DO: trovare un modo per cambiare lo stile del testo del figcaption (blu link sottolineato)
<-->

<style scoped>

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