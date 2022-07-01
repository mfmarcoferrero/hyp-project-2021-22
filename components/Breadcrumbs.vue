<template>
  <ol vocab="http://schema.org/" typeof="BreadcrumbList" class="mb-0 bg-light">
    <li property="itemListElement" typeof="ListItem">
      <nuxt-Link property="item" typeof="WebPage" to="/">
      </nuxt-Link>
      <meta property="position" content="1" />
    </li>
    <li v-for="(crumb, index) in crumbs" :key="index" property="itemListElement" typeof="ListItem">
      <nuxt-Link property="item" typeof="WebPage" :to="crumb.path">
        <span property="name">
          {{ $route.fullPath === crumb.path && title !== null ? title : crumb.title }}
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
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath // Save the full path into a const
      // console.log("FULL PATH: " + fullPath)
      let params,trimPath

      //Different beahviours if it's present in the fullpath the fragment identifier ('#')
      if (fullPath.indexOf('#') === -1) {
        params = fullPath.substring(1).split('/') // Remove the '/' character and save each item of the path into an array
      } else {
        trimPath = fullPath.slice(0, fullPath.indexOf('#')); // Remove from the fullPath the fragment idetifier after the '#' character
        params = trimPath.substring(1).split('/') // Remove the '/' character and save each item of the path into an array
      }
      // console.log("TRIM PATH: " + trimPath)
      // console.log("PARAMS: " + params)

      const crumbs = []
      let path = ''

      params.forEach((param, index) => {
        let regex = /\?id=[0-9]*/
        param = param.replace(regex, '')
        regex = /%20/g
        param = param.replace(regex, ' ')
        path = `${path}/${param}`
        const match = this.$router.match(path)

        if (match.name !== null) {
          crumbs.push({
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

li a.nuxt-link-exact-active.nuxt-link-active {
  color: grey;
}
</style>
