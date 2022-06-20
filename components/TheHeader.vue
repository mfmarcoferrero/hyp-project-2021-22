<!--template>
  <div>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <ul class="nav justify-content-center">
          <li v-for="(navItem, navItemIndex) of headerList" :key="`navItem${navItemIndex}`" class="nav-item">
            <nuxt-link :to="navItem.path" class="nav-link text-light active">
              {{ navItem.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dam">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/">
          <img class="logo-img mb-1 " src="@/static/dam-logo-resize.png" alt="HOME">
        </nuxt-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <nuxt-link class="navbar-about" to="/about">
          <img class="about-img mb-1 mr-2" src="@/static/icons8-info-24.png" alt="ABOUT">
        </nuxt-link>
      </div>
    </nav>
  </div>
</template-->


<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <nuxt-link class="navbar-brand position-absolute top-50 start-50 translate-middle" to="/">
        <img class="logo-img p-1" src="@/static/dam-logo.png" alt="HOME">
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav nav-links mr-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link active" aria-current="page" to="/attractions">Attractions</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link active" to="/itineraries">Itineraries</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link active" to="/events">Events</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link active" to="/services">Services</nuxt-link>
          </li>
        </ul>
        <ul class="navbar-nav nav-links ms-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/contacts">Contacts</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">About</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style scoped>
/* .navbar-brand {
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
} */

/* Styling Navigation Links*/

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

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
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
    }
  },
}
</script>
