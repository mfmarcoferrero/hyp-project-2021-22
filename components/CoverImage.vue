<template>
    <div class="container-cover">
        <img :src="img" alt="no image" class="cover-img">
        <p class="fs-1 text-center text-dark fw-bold position-absolute top-50 start-50 translate-middle shadow-plg"> {{title}} </p>
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
</style>