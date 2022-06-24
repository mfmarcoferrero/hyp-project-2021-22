<template>
    <div class="card mb-3" @click="goTo(path)">
        <div class="row g-4">
            <div class="col-md-6">
                <img :src="img" class="img-fluid rounded-start img-card" alt="No Image">
            </div>
            <div class="col-md-6">
                <div class="card-body">
                    <div class="">
                        <h5 class="card-title vl second-title">{{ title }}</h5>
                    </div>
                    <hr class="me-5">
                    <div class="row row-cols-2">
                        <div class="icon-item col-1">
                            <span :class="locationIcon"></span>
                        </div>
                        <div class="col event-card-text ms-1">
                            <span>{{ location }}</span>
                        </div>
                    </div>

                    <div class="row row-cols-2">
                        <div class="icon-item col-1">
                            <span :class="dateIcon"></span>
                        </div>
                        <div class="col event-card-text ms-1">
                            <span class="">{{ date }}</span>
                        </div>
                    </div>

                    <p class="card-text mt-2"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import CommonMixin from '~/mixins/common';
export default {
    mixins: [CommonMixin],
    scrollToTop: true,
    name: 'EventCard',
    data() {
        return {
            locationIcon: 'mdi mdi-map-marker',
            dateIcon: 'mdi mdi-timer',
        }
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            //required: true,
        },
        location: {
            type: String,
        },
        date: {
            type: String,
        },
        path: {
            type: String,
            //required: true
        },
        // goToPath: {
        //   type: Boolean,
        //   required: true
        // } 
    },
    methods: {
        goTo(path) {
            this.$router.push(path);
        },
    }
}
</script>
 
<style lang="scss" scoped>
.card {
    width: 100%;
    transition: all 0.2s ease;
    cursor: pointer;
}

.card:hover {
    box-shadow: 6px 6px 6px 6px #e9ecef;
    transform: scale(1.005);
}

.img-card {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.icon-item {
    font-size: 25px;
}

.event-card-text {
    padding-top: 6px;
}
</style>