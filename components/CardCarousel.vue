<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <!--div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div-->
        <div class="carousel-inner">
            <div v-for="index in 2" :key="index" v-bind:class="[carouselClass, index == 1 ? activeClass : '']">
                <div class="container pt-5">
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div v-for="index in 4" :key="index" class="col">
                            <div class="card shadow">
                                <img :src="img" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Individual</h5>
                                    <p class="card-text">The perfect plan for just you. Get all the fresh fruit and
                                        vegatables
                                        you need without waste.</p>
                                    <a href="#" class="btn btn-success">Buy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
import CommonMixin from '~/mixins/common';
export default {
    mixins: [CommonMixin],
    name: 'CardCarousel',
    data() {
        return {
            name: "Museum",
            img: "https://s8.gifyu.com/images/frans-ruiter-jfPGunIH_9M-unsplash.jpg",
            carouselClass: 'carousel-item',
            activeClass: 'active',
            slide: 0,
            sliding: null,
        }
    },

    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
        goTo(id) {
            this.$router.push(`/`)
        }
    },
}
</script>

<style>

/*To import a different icon for controls*/
.carousel-control-prev-icon {
 background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

</style>