<template>
    <div class="page-container">
        <cover-image :img="img" title="Attractions and Experiences" class="mb-5" />

        <div class="section-container">
            <h2 class="second-title vl m-5"> Top Sights</h2>
            <div class="row row-cols-1 row-cols-lg-4">
                <div class="col mb-4" v-for="(poi, poiIndex) of topList" :key="`poi-index-${poiIndex}`">
                    <card :name="poi.name" :img="poi.img" :path="'/attractions/' + poi.name" class="mb-3" />
                </div>
            </div>
            <hr />
        </div>

        <div class="section-container">
            <h2 class="second-title vl m-5"> Museums and Arts </h2>
            <div class="row row-cols-1 row-cols-lg-4">
                <div class="col mb-4" v-for="(poi, poiIndex) of artList" :key="`poi-index-${poiIndex}`">
                    <card :name="poi.name" :img="poi.img" :path="'/attractions/' + poi.name" class="mb-3" />
                </div>
            </div>
            <hr />
        </div>

        <div class="section-container">
            <h2 class="second-title vl m-5"> Experiences </h2>
            <div class="row row-cols-1 row-cols-lg-4">
                <div class="col mb-4" v-for="(poi, poiIndex) of experienceList" :key="`poi-index-${poiIndex}`">
                    <card :name="poi.name" :img="poi.img" :path="'/attractions/' + poi.name" class="mb-3" />
                </div>
            </div>
            <hr class="" />
        </div>

        <div class="section-container">
            <h2 class="second-title vl m-5"> Buildings and Churches </h2>
            <div class="row row-cols-1 row-cols-lg-4">
                <div class="col mb-4" v-for="(poi, poiIndex) of buildingList" :key="`poi-index-${poiIndex}`">
                    <card :name="poi.name" :img="poi.img" :path="'/attractions/' + poi.name" class="mb-3" />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import CommonMixin from '~/mixins/common';
import Card from '~/components/Card.vue';
import CardCarousel from '~/components/CardCarousel.vue';
import TopicCard from '~/components/TopicCard.vue'
import CoverImage from '~/components/CoverImage.vue';

export default {
    name: 'AttractionsPage',
    title: 'Attractions',
    mixins: [CommonMixin],
    scrollToTop: true,
    components: {
        Card,
        CardCarousel,
        TopicCard,
        CoverImage
    },
    data() {
        return {
            name: "Museum",
            img: "https://s8.gifyu.com/images/gaurav-jain-2K2SR19RLg8-unsplash.jpg"
        }
    },
    // Note: This happens on backend (server) side
    async asyncData({ $axios }) {
        let topList = []
        let artList = []
        let experienceList = []
        let buildingList = []
        const { data } = await $axios.get('/api/pois')
        for (var item of data) {
            if (item.category === 'top') {
                topList.push(item)
            } else if (item.category === 'museum') {
                artList.push(item)
            } else if (item.category === 'experience') {
                experienceList.push(item)
            } else if (item.category === 'building') {
                buildingList.push(item)
            }
        }
        return {
            topList: topList,
            artList: artList,
            experienceList: experienceList,
            buildingList: buildingList
        }
    },
    methods: {
        backHome() {
            this.$router.push("/");
        }
    }
}
</script>

<style>
</style>