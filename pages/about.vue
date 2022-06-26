<template>
  <div class="container position-relative">

    <h2 class="second-title vl ms-5 mt-5 mb-5">About us</h2>

    <div class="row m-5">
      <div class="col">

        <p class="fs-5">
          Visit DAM is an association that is part of the NBTC, the Netherlands Board of Tourism & Conventions.
          <br><br>
          NBTC is all about the development, branding and marketing of the Netherlands as a destination.
          As the national destination management organisation of and for the Netherlands, NBTC provides a national
          vision
          for tourism based on relevant knowledge and insights. We use this vision to inspire, connect and facilitate
          cities, regions, business owners and other stakeholders. To make our country a liveable, popular and
          valuable
          destination for residents, visitors and companies.
        </p>
        <div class="d-grid gap-2 p-3">
          <a href="https://www.nbtc.nl/en/site.htm" target="_blank" class="btn btn-outline-dark" type="button"> Read
            more about NBTC </a>
        </div>
      </div>

      <div class="col">
        <img src="https://s8.gifyu.com/images/77376_fullimage_nbtc-default-logo-nl.jpg" alt="No img"
          class="img-fluid border border-dark border-3 about-img">
        <!--img src="https://s8.gifyu.com/images/I_amsterdam_visitor_center-4b34ab60fba54a21acba6b33ef187d55.jpg"
          alt="No img" class="img-fluid border border-dark border-3 about-img"-->
      </div>
    </div>

    <hr>
    
    <div class="container">
      <div class="d-grid gap-2 p-5">
        <nuxt-link class="btn btn-outline-dark" type="button" to="/contacts">
          Contact Us </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'AboutPage',
  components: {
    CustomPage,
  },

  head() {
    return {
      title: 'Visit-DAM | About Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '',
        },
      ],
    }
  },
  // data() {
  //   return {}
  // },
  // async asyncData({ $axios }) {
  //   const { data } = await $axios.get('/api/page-info/about')
  //   const title = data.title
  //   const image = data.image
  //   const description = data.description
  //   return {
  //     title,
  //     description,
  //     image,
  //   }
  // },
}
</script>

<style scoped>
.about-img {
  width: 600px;
  height: 100%;
  object-fit: cover;
}

.intro-div {
  background-color: antiquewhite;
}
</style>