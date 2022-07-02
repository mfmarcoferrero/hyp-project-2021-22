<!-- 

    Component: TopicCard
    Description: Simple card with image, a title on it and some hover effected added
    Use: homepage, attractions, itineraries
    Props: 
      title -> title for the card
      img -> img for the card
      path -> clicking on the card redirect to this path 
      imgHeight -> default value for height is 15 vw, but a custom value can be specified
         
-->
<template>
    <div class="topic-card position-relative" @click="goTo(path)">
        <img class="topic-card-img" :style="'height:' + imgHeight + ';'" :src="img" alt="Card image cap">

        <!-- Some styling class are specified to place title in the middle of the image -->

        <h2 class="text-center text-white fw-bold position-absolute top-50 start-50 translate-middle">{{
                swapDashesAndCapitalize(title)
        }}</h2>
    </div>
</template>
 
<script>
import CommonMixin from '~/mixins/common';
export default {
    mixins: [CommonMixin],
    name: 'TopicCardComponent',
    props: {
        title: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true
        },
        imgHeight: {
            type: String,
            default: "15vw"
        }
    },
    methods: {
        goTo(path) {    
            this.$router.push(path);
        },
    }
}
</script>
 
<style scoped>

/* Solid border definition */
.topic-card {
    transition: all 0.2s ease;
    cursor: pointer;
    border-style: solid;
    border-color: black;
    width: 100%;
}

/* Brightness changed to see title clearly */
.topic-card-img {
    width: 100%;
    object-fit: cover;
    filter: brightness(75%)
}

/* Shadows when hover */
.topic-card:hover {
    box-shadow: 5px 6px 6px 2px #e9ecef;
    transform: scale(1.03);
}
</style>