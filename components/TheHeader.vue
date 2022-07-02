<!-- 

    Component: TheHeader
    Description: Classic header with 4 main topics, contacts and about. It is present in each page of the website
    Use: default, nocrumbs, error layouts
    Props: No props only static data defined
      
-->

<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-header">
    <div class="container-fluid">

      <!-- Logo definition -->

      <nuxt-link class="navbar-brand" to="/">
        <img class="logo-img p-1" src="@/static/dam-logo.png" alt="HOME">
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">

        <!-- 4 main topics buttons (attractions, itineraries, events, services) -->
        
        <ul class="navbar-nav nav-links mr-auto">
          <li v-for="(item, index) of primaryMenu" :key="index" class="nav-item">
            <nuxt-link class="nav-link active text-center" aria-current="page" :to="item.path">{{item.name}}</nuxt-link>
          </li>
        </ul>

        <!-- Contacts and about buttons -->

        <ul class="navbar-nav nav-links ms-auto">
          <li v-for="(item, index) of secondaryMenu" :key="index" class="nav-item">
            <nuxt-link class="nav-link text-center" :to="item.path">{{item.name}}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      // On left
      primaryMenu: [
        {
          name: 'Attractions',
          path: '/attractions',
        },
        {
          name: 'Itineraries',
          path: '/itineraries',
        },
        {
          name: 'Events',
          path: '/events',
        },
        {
          name: 'Services',
          path: '/services',
        }
      ],
      // On right
      secondaryMenu: [
        {
          name: 'Contacts',
          path: '/contacts',
        },
        {
          name: 'About',
          path: '/about',
        }
      ]
    }
  },
}
</script>


<style scoped>
/* Font style */
.nav-links {
  font-weight: 600;
}

.nav-link {
  text-decoration: none;
  /*Increasing transition time animation can be smoother*/
  transition: all ease-in-out 400ms;
}

/* Animation when hover on buttons */
.nav-link:hover {
  color: black !important;
  background-color: #fff;
  border-radius: 50px;
}
</style>

