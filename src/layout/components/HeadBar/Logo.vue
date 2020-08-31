<template>
  <div class="logo-area">
    <img class="logo-img" src="../../../assets/car-w.png" />
    <span class="logo-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      title: '车辆维修管理系统'
    }
  }
}
</script>

<style lang="scss">
.logo-area {
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 20px;
  .logo-img {
    font-size: 18px;
    height: 1.3em;
    width: 1.3em;
    margin-right: 10px;
  }
  .logo-title {
    font-weight: 600;
    font-size: 18px;
  }
}
</style>
