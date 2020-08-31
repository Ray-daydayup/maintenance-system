<template>
  <div
    class="head-menu-item"
    :class="{ active: isActive }"
    @click="handleMenuClick"
  >
    <i :class="routeObj.meta.icon"></i>
    <span slot="title">{{ routeObj.meta.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'HeadMenuItem',
  props: {
    routeObj: {
      type: Object,
      default: () => ({})
    },
    basePath: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActive() {
      return this.$route.fullPath.indexOf(this.routeObj.path) !== -1
    }
  },
  methods: {
    handleMenuClick() {
      const routePath = this.basePath + '/' + this.routeObj.path
      if (!this.isActive) {
        this.$router.push(routePath)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.head-menu-item {
  height: 100%;
  cursor: pointer;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-radius: 1px;
  & > i {
    margin-right: 5px;
    font-size: 20px;
  }
  &.active,
  &:hover {
    font-weight: 600;
    background-color: $head-bar-menu-bgc;
  }
}
</style>
