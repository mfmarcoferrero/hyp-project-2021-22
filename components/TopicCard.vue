<template>
    <nuxt-link :to="path">
        <div class="topic-card position-relative" style="width: 100%;">
            <img class="topic-card-img" :src="img" alt="Card image cap">
            <h2 class="text-center text-light fw-bold position-absolute top-50 start-50 translate-middle">{{
                    swapDashesAndCapitalize(title)
            }}</h2>
        </div>
    </nuxt-link>
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
        }
    }
}
</script>
 
<style lang="scss" scoped>
.topic-card {
    transition: all 0.2s ease;
    cursor: pointer;
    border-style: solid;
    border-color: black;
    width: 100%;
    opacity: 0.95;
    filter: alpha(opacity=40);
}

.topic-card-img {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

.topic-card:hover {
    box-shadow: 5px 6px 6px 2px #e9ecef;
    transform: scale(1.03);
    opacity: 1.0;
    filter: alpha(opacity=100);
}
</style>