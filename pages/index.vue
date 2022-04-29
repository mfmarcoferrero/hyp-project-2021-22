<template>
  <div>
    <div>
      <carousel/>
    </div>
    <div>
      <h1>Guide to the City</h1>
    <b-row>
      <b-card-group>
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
            <b-btn variant="primary" block>Button 3</b-btn>
          </div>
        </b-card>
        
      </b-card-group>  
    </b-row>  
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
export default {
  components: {
    Carousel
  },
  name: 'IndexPage',
}
</script>
