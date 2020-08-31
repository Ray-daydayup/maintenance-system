<template>
  <div class="head-menu">
    <head-menu-item
      v-for="item in routeArr"
      :key="item.name"
      :routeObj="item"
      :basePath="basePath"
    ></head-menu-item>
  </div>
</template>

<script>
import HeadMenuItem from './HeadMenuItem'
export default {
  name: 'Menu',
  components: {
    HeadMenuItem
  },
  data() {
    return {
      routeArr: [],
      basePath: ''
    }
  },
  created() {
    const routes = this.$router.options.routes
    const targetRoute = routes.find((item) => item.name === 'Layout')
    this.routeArr = targetRoute.children
  }
}
</script>

<style lang="scss">
.head-menu {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
