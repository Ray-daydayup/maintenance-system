<template>
  <div class="user-area">
    <drop-down
      :title="user.name"
      title-style="color: #fff;"
      :items="dropItems"
      :callback="handle"
    ></drop-down>
    <el-avatar style="margin-left: 20px;" :size="40" :src="user.img">
    </el-avatar>
  </div>
</template>

<script>
import DropDown from '@/components/DropDown'
export default {
  name: 'User',
  components: {
    DropDown
  },
  data() {
    return {
      user: {
        img:
          'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        name: '张三'
      },
      dropItems: [
        {
          command: 1,
          title: '个人信息'
        },
        {
          command: 2,
          title: '退出登录'
        }
      ]
    }
  },
  methods: {
    handle(e) {
      console.log(e, this.user)
    }
  }
}
</script>

<style lang="scss">
.user-area {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
