<template>
  <footer class="footer bg-header">
    <div class="footer-content row row-cols-1 row-cols-md-2 justify-content-center justify-content-md-between">

      <div class="col col-footer">
        <!-- Company Icon -->
        <img class="logo" src="~/static/dam-logo-resize.png" alt="VISIT-DAM" />
        <div class="footer-label">&copy; 2022 Visit DAM </div>
      </div>

      <div class="col col-footer">
        <!-- Social list -->
        <div class="icon-list">
          Follow us:
          <div v-for="(item, itemIndex) of socialList" :key="'icon-item-' + itemIndex" class="icon-item">
            <a :href="item.link" target="_blank" rel="noopener" :aria-label="item.name">
              <span :class="item.icon"></span>
            </a>
          </div>
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
          icon: 'mdi mdi-github',
          link: 'http://www.github.com/',
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
  min-height: 100px;
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

.col-footer {
  height: 100px;
  width: auto;
}

.footer-label,
.icon-list {
  display: inline-flex;
  align-items: center;
  height: inherit;
  margin-left: 10px;
}

.icon-item {
  margin-left: 1.5vw;
  font-size: 25px;
}

/* Footer logo layout */
img.logo {
  width: 100px;
  border-radius: 0%;
  margin: 10px;
}
</style>