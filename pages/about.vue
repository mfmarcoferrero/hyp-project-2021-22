<template>
  <div class="page-container position-relative">
    <!-- ABOUT INFORMATION -->
    <div class="section-container">
      <h2 class="second-title vl mt-5 mb-5">{{ aboutUs }}</h2>

      <div class="row row-cols-1 row-cols-lg-2 justify-content-center">
        <div class="col">
          <p class="fs-5 mb-3">
            {{ visitDam }}
            <br /><br />
            {{ nbtc }}
          </p>
        </div>

        <div class="col ps-5">
          <img
            src="https://s8.gifyu.com/images/77376_fullimage_nbtc-default-logo-nl.jpg"
            alt="No img"
            class="img-fluid border border-dark border-3 about-img"
          />
        </div>
      </div>
      <div class="d-grid gap-2 p-5 section-container">
        <a
          href="https://www.nbtc.nl/en/site.htm"
          target="_blank"
          class="btn btn-outline-dark"
          type="button"
        >
          {{ readMore }}
        </a>
      </div>
      <hr class="mb-5" />
    </div>

    <!-- CONTACT US FORM -->
    <div class="section-container">
      <p class="text-center fs-5">
        {{ info }}
      </p>
      <div class="row justify-content-center">
        <div class="d-grid gap-2 btn-contact col">
          <nuxt-link class="btn btn-outline-dark" type="button" to="/contacts">
            {{ contactUs }}
          </nuxt-link>
        </div>
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
      title: 'Visit-DAM | About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A brief overview of the Netherlands Board of Tourism & Conventions that menages the development, branding and marketing of the Netherlands as a destination. Visit-DAM is part of the NBTC and is part of a program for management organisation of and for the Netherlands',
        },
      ],
    }
  },
  data() {
    // strings are stored in data to facilitate edits and future translation implementations
    return {
      visitDam: "Visit DAM is an association that is part of the NBTC, the Netherlands Board of Tourism & Conventions.",
      nbtc: `NBTC is all about the development, branding and marketing of the Netherlands as a destination.
            As the national destination management organisation of and for the Netherlands, NBTC provides a national
            vision
            for tourism based on relevant knowledge and insights. We use this vision to inspire, connect and facilitate
            cities, regions, business owners and other stakeholders. To make our country a liveable, popular and
            valuable
            destination for residents, visitors and companies.`,
      aboutUs: "About us",
      readMore: "Read more about NBTC",
      info: `If we want to receive any information or ask us some questions about
            your travel in Amsterdam:`,
      contactUs: "Contact Us",
      
    }
  }
}
</script>

<style scoped>

/* Image and button styling */

.about-img {
  width: 600px;
  height: auto;
}

.btn-contact {
  max-width: 200px;
}
</style>