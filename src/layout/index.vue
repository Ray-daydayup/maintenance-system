<template>
  <el-container class="main-container">
    <el-header style="padding: 0;height:66px;">
      <head-bar></head-bar>
    </el-header>
    <el-container class="main-app">
      <el-aside v-show="isShow" width="200px">
        <sidebar :isShow.sync="isShow"></sidebar>
      </el-aside>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeadBar from './components/HeadBar'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'
export default {
  name: 'Layout',
  components: {
    HeadBar,
    Sidebar,
    AppMain
  },
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  height: 100vh;
}
</style>
<style lang="scss">
.main-container * {
  box-sizing: border-box;
}
.main-container {
  .main-app {
    display: flex;
    height: calc(100vh - 66px);
    .main-aside {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      background-color: $side-bgc;
      color: #fff;
      .side-menu {
        flex: auto;
      }
    }
  }
}
</style>
