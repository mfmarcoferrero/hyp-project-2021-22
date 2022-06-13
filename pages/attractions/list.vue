<template>
    <div class="row justify-content-center">
        <overlay-card v-for="(poi, poiIndex) of poiList" class="col-lg-11 m-3" :key="`poi-index-${poiIndex}`"
            :name="poi.name" :img="poi.img" :description="poi.description" path="attractions" />
    </div>
</template>

<script>
import CommonMixin from '~/mixins/common';
import OverlayCard from '~/components/OverlayCard.vue';
import Card from '~/components/Card.vue';
import CardCarousel from '~/components/CardCarousel.vue';

export default {
    name: 'AttractionsPage',
    title: 'Attractions',
    mixins: [CommonMixin],
    components: {
        OverlayCard,
        Card,
        CardCarousel
    },
    data() {
        return {
            name: "Museum",
            img: "https://s8.gifyu.com/images/frans-ruiter-jfPGunIH_9M-unsplash.jpg"
        }
    },
    // Note: This happens on backend (server) side
    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/pois')
        return {
            poiList: data,
        }
    },
}
</script>

<style>
</style>