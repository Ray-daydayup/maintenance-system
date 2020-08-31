<template>
  <div style="width: 100%;" class="side-menu">
    <side-menu-item
      v-for="item in routeArr"
      :key="item.name"
      :routeObj="item"
      :basePath="basePath"
    ></side-menu-item>
  </div>
</template>

<script>
// import MenuItem from './MenuItem'
import SideMenuItem from './SideMenuItem'
export default {
  name: 'SideMenu',
  props: {
    routeArr: {
      type: Array,
      default: () => []
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  components: {
    SideMenuItem
  }
}
</script>
