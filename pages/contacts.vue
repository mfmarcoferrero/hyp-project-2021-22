<template>
  <div class="page-container">
    <div class="section-container">
      <h2 class="second-title vl ms-5 mt-5 mb-5">Contact us</h2>

      <div class="row row-cols-1 row-cols-lg-2">

        <div class="col mb-3">
          <google-map query="i amsterdam visitor center" height="300px" class="" />
        </div>

        <div class="col">
          <div class="row mb-3 justify-content-center">
            <span class="p-3">Amsterdam main official tourist office is in the center of the city. This office not only inform you
              about the city in a professional way but
              can also give you free small maps and folders with information about the city.</span>
          </div>

          <div class="row row-cols-2 justify-content-center">
            <div class="icon-item col-1">
              <span :class="locationIcon"></span>
            </div>
            <div class="col icon-text ms-1">
              <span>{{ location }}</span>
            </div>
          </div>

          <div class="row row-cols-2 mt-3 justify-content-center">
            <div class="icon-item col-1">
              <span :class="phoneIcon"></span>
            </div>
            <div class="col icon-text ms-1">
              <span>{{ phone }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>


    <hr class="m-5">

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 col-lg-6">
          <contact-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue';
import GoogleMap from '@/components/Map.vue';
export default {
  head() {
    return {
      title: "Visit-DAM | Contact Us",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
    };
  },
  data() {
    return {
      locationIcon: 'mdi mdi-map-marker',
      location: 'De Ruijterkade 28, 1012 AA Amsterdam, Netherlands',
      phoneIcon: 'mdi mdi-phone',
      phone: '+31 20 702 60 00',
    };
  },
  components: {
    ContactForm,
    GoogleMap
  }
}
</script>

<style>
.icon-item {
  font-size: 30px;
}

.icon-text {
  padding-top: 7px;
}
</style>