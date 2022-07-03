<template>

    <!-- RENDERING OF ALL POIS WITH CARDS -->

    <div class="page-container">
        <cover-image :img="img" title="Attractions and Experiences" class="mb-5" />

        <div class="section-container">
            <h2 class="second-title vl m-5"> {{ topSights }} </h2>
            <div class="row row-cols-1 row-cols-lg-4">
                <div class="col mb-4" v-for="(poi, poiIndex) of topList" :key="`poi-index-${poiIndex}`">
                    <card :name="poi.name" :img="poi.img" :path="'/attractions/' + poi.name" class="mb-3" />
                </div>
            </div>
            <hr />
        </div>

        <div class="section-container">
            <h2 class="second-title vl m-5"> {{ museumAndArts }} </h2>
            <div class="row row-cols-1 row-cols-lg-4">
                <div class="col mb-4" v-for="(poi, poiIndex) of artList" :key="`poi-index-${poiIndex}`">
                    <card :name="poi.name" :img="poi.img" :path="'/attractions/' + poi.name" class="mb-3" />
                </div>
            </div>
            <hr />
        </div>

        <div class="section-container">
            <h2 class="second-title vl m-5"> {{ experiences }} </h2>
            <div class="row row-cols-1 row-cols-lg-4">
                <div class="col mb-4" v-for="(poi, poiIndex) of experienceList" :key="`poi-index-${poiIndex}`">
                    <card :name="poi.name" :img="poi.img" :path="'/attractions/' + poi.name" class="mb-3" />
                </div>
            </div>
            <hr class="" />
        </div>

        <div class="section-container">
            <h2 class="second-title vl m-5"> {{ buildingAndChurches }} </h2>
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
        // strings are stored in data to facilitate edits and future translation implementations
        return {
            name: "Museum",
            img: "https://s8.gifyu.com/images/gaurav-jain-2K2SR19RLg8-unsplash.jpg",
            topSights: "Top Sights",
            museumAndArts: "Museums and Arts",
            experiences: "Experiences",
            buildingAndChurches: "Buildings and Churches"
        }
    },

    head() {
        return {
            title: 'Visit-DAM | All Attractions',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: "Here you can find all the most popular attractions and experiences in Amsterdam: museums and arts, top sights, buildings and churches.",
                },
            ],
        }
    },

    // Data pulling from DB
    async asyncData({ $axios }) {
        let topList = []
        let artList = []
        let experienceList = []
        let buildingList = []
        const { data } = await $axios.get('/api/pois')
        // Data sorting based on category
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
