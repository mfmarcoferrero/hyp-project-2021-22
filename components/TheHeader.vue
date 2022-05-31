<!--template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dam px-3 header sticky-top">
    <a class="navbar-brand" href="/">
      <img class="logo-img mb-1 " src="@/static/dam-logo-resize.png" alt="HOME">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
      aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarToggler">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li v-for="(navItem, navItemIndex) of headerList" :key="`navItem${navItemIndex}`" class="nav-item">
          <nuxt-link :to="navItem.path" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template-->

<template>
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
</template>

<style scoped>
.logo-img {
  height: 20px;
  object-fit: cover;
}

.bg-dam {
  background-color: rgb(253, 0, 13, 255);
  opacity: 0.9;
}

.bg-dam:hover {
  opacity: 1;
}

.navbar-brand {
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
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
        },
      ],
    }
  },
}
</script>
