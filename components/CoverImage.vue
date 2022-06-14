<template>
    <div>
        <img :src="img" alt="no image" class="main-img">
        <h1 class="title"> {{ title }} </h1>
    </div>
</template>

<script>
import CommonMixin from '~/mixins/common';

export default {
    name: 'CoverImage',
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

<style>
.main-img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}
</style>