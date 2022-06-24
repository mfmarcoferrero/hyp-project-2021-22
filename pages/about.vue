<template>
  <!--custom-page :title="title" :image="image" :description="description" /-->
  <div class="page-container">
    <h2 class="second-title vl ms-5 mt-5 mb-4">About us</h2>
    <p class="m-4 p-2">
      This is a project for the
      <a
        href="https://www4.ceda.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2019&k_cf=225&k_corso_la=481&k_indir=T2A&codDescr=089318&lang=IT&semestre=2&idGruppo=3925&idRiga=239684"
        >Hypermedia Applications</a
      >
      exam at <a href="www.polimi.it">Politecnico di Milano</a>. The project was
      made by Milan-Delft group, composed of
      <strong>Marco Ferrero</strong> (<i>mfmarcoferrero</i>),
      <strong>Davide Franchi</strong> (<i>Vega98</i>),
      <strong>Daniele Ferracuti</strong> (<i>Ferra21</i>) and
      <strong>Emile Lampe</strong>. The website was developed using
      <a href="https://nuxtjs.org/">Nuxt</a>, which is based on the Vue
      framework. To see the code and read the documentation,
      <a href="https://github.com/mfmarcoferrero/hyp-project-2021-22"
        >visit our Github repository</a
      >. Thank you for reading!
    </p>
  </div>
</template>

<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'AboutPage',
  components: {
    CustomPage,
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
