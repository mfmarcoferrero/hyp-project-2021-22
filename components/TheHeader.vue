<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-header">
    <div class="container-fluid">
      <nuxt-link class="navbar-brand" to="/">
        <img class="logo-img p-1" src="@/static/dam-logo.png" alt="HOME">
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav nav-links mr-auto">
          <li v-for="(item, index) of primaryMenu" :key="index" class="nav-item">
            <nuxt-link class="nav-link active text-center" aria-current="page" :to="item.path">{{item.name}}</nuxt-link>
          </li>
        </ul>
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
.nav-links {
  font-weight: 600;
}

.nav-link {
  text-decoration: none;
  /*Increasing transition time animation can be smoother*/
  transition: all ease-in-out 400ms;
}

.nav-link:hover {
  color: black !important;
  background-color: #fff;
  border-radius: 50px;
}
</style>

