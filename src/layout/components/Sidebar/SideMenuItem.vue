<template>
  <div
    class="side-menu-item"
    :style="inlineStyle"
    :class="{ active: isActive }"
    @click="handleMenuClick"
  >
    <i :class="routeObj.meta.icon"></i>
    <span slot="title">{{ routeObj.meta.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'SideMenuItem',
  props: {
    routeObj: {
      type: Object,
      default: () => ({})
    },
    basePath: {
      type: String,
      default: ''
    },
    inlineStyle: {
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
.side-menu-item {
  width: 100%;
  cursor: pointer;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  border-radius: 1px;
  font-size: 18px;
  & > i {
    margin-right: 10px;
    font-size: 20px;
  }
  &.active,
  &:hover {
    background-color: $side-item-bgc-hover;
  }
}
</style>
