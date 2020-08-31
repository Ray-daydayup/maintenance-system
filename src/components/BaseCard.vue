<template>
  <div class="base-card">
    <el-tabs
      :class="{ 'not-tabs': !isTabs }"
      value="0"
      @tab-click="handleClick"
    >
      <slot></slot>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    isTabs: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(tab, event) {}
  }
}
</script>

<style lang="scss">
.base-card {
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  .el-tabs {
    margin: 0 20px;
    min-height: 100%;

    display: flex;
    flex-direction: column;
    .el-tabs__item {
      font-weight: bold;
      font-size: 18px;
      margin: 10px 0;
    }
    .el-tabs__content {
      flex: auto;
    }
    &.not-tabs {
      .el-tabs__active-bar {
        display: none;
      }
      .el-tabs__item {
        &.is-disabled {
          color: inherit;
        }
      }
    }
  }
}
</style>
