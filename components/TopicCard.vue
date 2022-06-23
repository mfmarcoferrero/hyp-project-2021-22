<template>
    <div class="topic-card position-relative" @click="goTo(path)">
        <img class="topic-card-img" :style="'height:'+imgHeight+';'" :src="img" alt="Card image cap">
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
.topic-card {
    transition: all 0.2s ease;
    cursor: pointer;
    border-style: solid;
    border-color: black;
    width: 100%;
}

.topic-card-img {
    width: 100%;
    /* height: 15vw; */
    object-fit: cover;
    filter: brightness(75%)
}

.topic-card:hover {
    box-shadow: 5px 6px 6px 2px #e9ecef;
    transform: scale(1.03);
}
</style>