<!-- 

    Component: CoverImage
    Description: Component used in each introductory page to have a fullscreen width image and a title
    Use: In attractions, events, itineraries, services
    Props: 
          title -> cover title
          img -> cover image

 -->

<template>
    <div class="container-cover">
        <img :src="img" alt="no image" class="cover-img">

        <!-- Positioning for the title in the middle of the cover image
            Additional styling using bootstrap classes for shadows and font size -->

        <p class="fs-1 text-center fw-bold position-absolute top-50 start-50 translate-middle shadow-plg cover-title">
            {{ title }} </p>
    </div>
</template>

<script>
import CommonMixin from '~/mixins/common';

export default {
    name: 'CoverImageComponent',
    mixins: [CommonMixin],
    props: {
        title: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        }
    },
}
</script>

<style scoped>

/* Fix dimension for cover image */
.cover-img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}

/* Container holding the image and the text */
.container-cover {
    position: relative;
    text-align: center;
    color: white;
}

/* Text shadows and color */
.cover-title {
    text-shadow: 0 0 16px rgba(0, 0, 0, .75);
    color: #fff;
}
</style>