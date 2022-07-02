<!-- 

    Component: Breadcrumbs
    Description: Classic breadcrumbs that shows current position in the directory structure of the website
    Use: deafult layout (all pages except homepage)
         
-->

<template>
  <ol vocab="http://schema.org/" typeof="BreadcrumbList" class="mb-0 bg-light">
    <li property="itemListElement" typeof="ListItem">
      <meta property="position" content="1" />
    </li>
    <li v-for="(crumb, index) in crumbs" :key="index" property="itemListElement" typeof="ListItem">
      <nuxt-Link property="item" typeof="WebPage" :to="crumb.path">
        <span property="name">
          {{ crumb.title }}
        </span>
      </nuxt-Link>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
</template>

<script>
import CommonMixin from '~/mixins/common';
export default {
  mixins: [CommonMixin],

  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath // Save the full path into a const
      let params,trimPath

      //Different beahviours if in the fullpath it's present the fragment identifier ('#')
      if (fullPath.indexOf('#') === -1) {
        params = fullPath.substring(1).split('/') // Remove the '/' character and save each item of the path into an array
      } else {
        trimPath = fullPath.slice(0, fullPath.indexOf('#')); // Remove from the fullPath the fragment idetifier after the '#' character
        params = trimPath.substring(1).split('/') // Remove the '/' character and save each item of the path into an array
      }

      const crumbs = []
      let path = ''

      // Generation of an array of page names for current path

      params.forEach((param, index) => {
        let regex = /\?id=[0-9]*/
        param = param.replace(regex, '')
        regex = /%20/g
        param = param.replace(regex, ' ')
        path = `${path}/${param}`
        const match = this.$router.match(path)

        if (match.name !== null) {
          crumbs.push({
            // Common mixins used to capitalize first letter of each page name
            title: this.capitalizeFirstLetter(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      })
      return crumbs
    },
  },
}
</script>

<style scoped>

/* Styling for colors and arrows for the ordered list and list elements */

ol {
  list-style: none;
}

li {
  display: inline;
}

li:after {
  content: ' » ';
  display: inline;
  font-size: 0.9em;
  color: #aaa;
  padding: 0 0.0725em 0 0.15em;
}

li:last-child:after {
  content: '';
}

li a {
  color: black;
}
</style>
