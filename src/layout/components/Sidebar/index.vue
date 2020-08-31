<template>
  <div class="main-aside">
    <side-menu :routeArr="routeArr" :basePath="basePath"></side-menu>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import SideMenu from './SideMenu'
import BottomInfo from './BottomInfo'
export default {
  name: 'Sidebar',
  components: {
    SideMenu,
    BottomInfo
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      routeInfo: []
    }
  },
  computed: {
    targetParentRoute() {
      const matchedRoute = this.$route.matched
      const parentName = matchedRoute[matchedRoute.length - 2].name
      const targetRoute = this.routeInfo.find(
        (item) => item.name === parentName
      )
      this.$emit('update:isShow', Boolean(targetRoute))
      return targetRoute
    },
    basePath() {
      const matchedRoute = this.$route.matched
      return matchedRoute[matchedRoute.length - 2].path
    },
    routeArr() {
      if (this.targetParentRoute && this.targetParentRoute.children) {
        return this.targetParentRoute.children
      } else {
        return []
      }
    }
  },
  created() {
    const routes = this.$router.options.routes
    const targetRoute = routes.find((item) => item.name === 'Layout')
    this.routeInfo = targetRoute.children
  }
}
</script>

<style lang="scss">
.main-aside {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #545c64;
  color: #fff;
  .side-menu {
    flex: auto;
    display: flex;
    flex-direction: column;
  }
}
</style>
