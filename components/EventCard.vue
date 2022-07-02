<!-- 

    Component: Card
    Description: Classic bootstrap card with some hover effected added 
                 (different from component Card in its layout and content)
    Use: events
    Props: 
      title -> name of a specific topic
      img -> img of a specific topic
      description -> description of a specific topic
      location -> location of a specific event
      date -> date of a specific event
      path -> clicking on the card redirect to this path  
         
-->
<template>
    <div class="card" @click="goTo(path)">

        <!-- Layout definition using bootstrap row-cols -->

        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col-md-6">
                <img :src="img" class="img-fluid rounded-start img-card" alt="No Image">
            </div>
            <div class="col-md-6">
                <div class="card-body pe-2 me-2">
                    <div class="">
                        <h5 class="card-title vl second-title">{{ title }}</h5>
                    </div>
                    <hr class="me-5">

                    <!-- Bootstrap row-cols to have an icond and a text in a line -->

                    <div class="row row-cols-2">
                        <div class="icon-item col-1">
                            <span :class="locationIcon"></span>
                        </div>
                        <div class="col-8 event-card-text ms-1">
                            <span>{{ location }}</span>
                        </div>
                    </div>

                    <!-- Bootstrap row-cols to have an icond and a text in a line -->

                    <div class="row row-cols-2">
                        <div class="icon-item col-1">
                            <span :class="dateIcon"></span>
                        </div>
                        <div class="col event-card-text ms-1">
                            <span class="">{{ date }}</span>
                        </div>
                    </div>
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
            // Icons imported from material design icons css
            locationIcon: 'mdi mdi-map-marker',
            dateIcon: 'mdi mdi-calendar',
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
            required: true
        },
    },
    methods: {
        goTo(path) {
            this.$router.push(path);
        },
    }
}
</script>
 
<style lang="scss" scoped>

// Fixed dimension for height

.card {
    width: 100%;
    height: 200px;
    transition: all 0.2s ease;
    cursor: pointer;
}

// On hover -> shadow effect 
.card:hover {
    box-shadow: 6px 6px 6px 6px #e9ecef;
    transform: scale(1.005);
}

// Fixed img height
.img-card {
    height: 200px;
    /* Change it based upon requirement */
    object-fit: cover;
}

// Text style
.icon-item {
    font-size: 25px;
}

.event-card-text {
    padding-top: 6px;
}

// Changing dimension of card of responsiveness

@media only screen and (max-width: 800px) {
    .img-card {
        height: 100%;
        /* Change it based upon requirement */
        object-fit: cover;
    }

    .card {
        width: 100%;
        height: 100%;
        transition: all 0.2s ease;
        cursor: pointer;
    }
}
</style>