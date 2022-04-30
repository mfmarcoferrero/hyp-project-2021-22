<template>
  <div>
    <div>
      <carousel/>
    </div>
    <div>
      <div class="header">
      <h1>Guide to the City!</h1>
      <p>These are the most searched things</p>
      </div>
      <b-card-group deck>
        <b-card img-src="@/static/pictures/city.jpg"
                img-top>
          <p class="card-text 1">
            Testo
          </p>
          <div slot="footer">
            <b-btn variant="primary" block>Button 1</b-btn>
          </div>
        </b-card>

        <b-card img-src="@/static/pictures/city.jpg"
                img-top>
          <p class="card-text 1">
            Testo
          </p>
          <div slot="footer">
            <b-btn variant="primary" block>Button 2</b-btn>
          </div>
        </b-card>

        <b-card img-src="@/static/pictures/city.jpg"
                img-top>
          <p class="card-text 1">
            Testo
          </p>
          <div slot="footer">
            <b-btn variant="primary" block>Button 2.5</b-btn>
          </div>
        </b-card>

        <b-card img-src="@/static/pictures/city.jpg"
                img-top>
          <p class="card-text 1">
            Testo
          </p>
          <div slot="footer">
            <b-btn variant="primary" block>Button 3</b-btn>
          </div>
        </b-card>
        
      </b-card-group>  

      <div class="header">
        <h1>Some photos from the city</h1>
      </div>
      <div>
        <collage/>
      </div>

      <div class="header">
        Travel information
      </div>
      <div class="row">
      <div class="zoom">
        <p>test1</p>
      </div>
      <div class="zoom">
        <p>test2</p>
      </div>
      <div class="zoom">
        <p>test3</p>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Collage from '@/components/Collage.vue'
export default {
  components: {
    Carousel,
    Collage
  },
  name: 'IndexPage',
}
</script>

<style scoped>
  .header {
    text-align: center;
    padding: 32px;
  }
  .zoom {
  padding: 50px;
  background-color: rgb(109, 151, 109);
  transition: transform .2s; 
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.zoom:hover {
  background-color: rgb(80, 111, 80);
  transform: scale(1.2); 
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}
</style>
