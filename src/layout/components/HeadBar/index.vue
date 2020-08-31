<template>
  <div class="app-header">
    <nav class="header-left">
      <logo></logo>
      <head-menu></head-menu>
    </nav>
    <nav class="header-right">
      <user></user>
    </nav>
  </div>
</template>

<script>
import Logo from './Logo'
import HeadMenu from './HeadMenu'
import User from './User'
export default {
  name: 'HeadBar',
  components: {
    Logo,
    HeadMenu,
    User
  }
}
</script>

<style lang="scss">
.app-header {
  // color: rgba(0, 0, 0, 0.85);
  height: 66px;
  background-color: $head-bar-bgc;
  color: $head-bar-text-color;

  display: flex;
  justify-content: space-between;
  .header-left,
  .header-right {
    padding: 0 1vw;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
