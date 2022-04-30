<template>

   <div class="row">
    <div class="column">
    <img class="zoom" src="https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="width:100%">
    <img class="zoom" src="https://images.pexels.com/photos/1510610/pexels-photo-1510610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="width:100%">
    <img class="zoom" src="https://images.pexels.com/photos/2816903/pexels-photo-2816903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="width:100%">
  </div>
  <div class="column">
    <img class="zoom" src="https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="width:100%">
    <img class="zoom" src="https://images.pexels.com/photos/2187427/pexels-photo-2187427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="width:100%">
    <img class="zoom" src="https://images.pexels.com/photos/707670/pexels-photo-707670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="width:100%">
  </div>  
  <div class="column">
    <img class="zoom" src="https://images.pexels.com/photos/2187419/pexels-photo-2187419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="width:100%">
    <img class="zoom" src="https://images.pexels.com/photos/2187427/pexels-photo-2187427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="width:100%">
    <img class="zoom" src="https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="width:100%">
  </div>
  <div class="column">
    <img class="zoom" src="https://images.pexels.com/photos/2187427/pexels-photo-2187427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="width:100%">
    <img class="zoom" src="https://images.pexels.com/photos/1510610/pexels-photo-1510610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="width:100%">
    <img class="zoom" src="https://images.pexels.com/photos/707670/pexels-photo-707670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style="width:100%">
  </div>
</div>

</template>

<script>
  export default {
    name: 'Collage',
    
    methods: {
      //...photo getters?
    }
  }
</script>

<style scoped>

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}

.zoom {
  transition: transform .2s; /* Animation */
}

.zoom:hover {
  transform: scale(1.2); 
}
</style>


