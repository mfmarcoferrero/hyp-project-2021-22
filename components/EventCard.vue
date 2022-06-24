<template>
    <div class="card mb-3" @click="goTo(path)">
        <div class="row g-4">
            <div class="col-md-6">
                <img :src="img" class="img-fluid rounded-start img-card" alt="No Image">
            </div>
            <div class="col-md-6">
                <div class="card-body">
                    <h5 class="card-title">{{title}}</h5>
                    <p class="card-text m-0">Location: </p>
                    <p class="card-text">Date: </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        <!--img class="card-img-left" :src="img" alt="Card image cap">
      <div-- class="card-body">
        <h5 class="card-title">{{ swapDashesAndCapitalize(title) }}</h5>
        <p class="card-text">{{ description }}</p>
      </div-->
    </div>
</template>
 
<script>
import CommonMixin from '~/mixins/common';
export default {
    mixins: [CommonMixin],
    scrollToTop: true,
    name: 'EventCard',
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
            // if(goToPath){
            //   this.$router.push(path);
            // }
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
</style>