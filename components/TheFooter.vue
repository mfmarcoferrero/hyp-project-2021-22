<template>
  <footer class="footer bg-header">
    <div class="footer-content">
      <!-- Company Icon -->
      <img class="logo" src="~/static/dam-logo.png" alt="VISIT-DAM" />
      <div class="footer-label">&copy; 2022 Visit DAM </div>

      <!-- Social list -->
      <div class="icon-list">
        Follow us:
        <div
          v-for="(item, itemIndex) of socialList"
          :key="'icon-item-' + itemIndex"
          class="icon-item"
        >
          <a
            :href="item.link"
            target="_blank"
            rel="noopener"
            :aria-label="item.name"
          >
            <span :class="item.icon"></span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialList: [
        {
          name: 'Facebook',
          icon: 'mdi mdi-facebook',
          link: 'http://www.facebook.com/',
        },
        {
          name: 'Twitter',
          icon: 'mdi mdi-twitter',
          link: 'http://www.twitter.com/',
        },
        {
          name: 'Linkedin',
          icon: 'mdi mdi-linkedin',
          link: 'http://www.linkedin.com/',
        },
      ],
    }
  },
}
</script>

<style scoped>
/* Positioning and colors of the whole component */
.footer {
  width: 100vw;
  /* background: rgba(229, 229, 229); */
  height: 100px;
  bottom: 0;
}
/* Foreground components black */
.footer * {
  color: white;
}
/* Main footer containers */
.footer-content {
  margin-left: 8vw;
  width: 84vw;
  height: inherit;
  margin-right: 8vw;
}
.footer-label,
.icon-list {
  display: inline-flex;
  align-items: center;
  height: inherit;
}
.icon-item {
  margin-left: 1.5vw;
  font-size: 25px;
}
.icon-list {
  float: right;
  margin-left: 10px;
}
/* Colored social icons on mouse hover */
.mdi-twitter:hover {
  color: #00d9ff;
}
.mdi-facebook:hover {
  color: #005eff;
}
.mdi-linkedin:hover {
  color: #137ffa;
}
/* Footer logo layout */
img.logo {
  height: 50px;
  border-radius: 10%;
  margin: 10px;
}
</style>