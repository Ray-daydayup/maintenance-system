<template>
  <div class="bottom-info">
    <time>{{ time }}</time>
    <time>{{ date }}</time>
  </div>
</template>

<script>
import moment from 'moment'
let timeInterval = null
export default {
  name: 'BottomInfo',
  data() {
    return {
      time: '',
      date: '',
      timeInterval: null
    }
  },
  created() {
    this.init()
    this.date = moment().format('YYYY 年 MM 月 DD 日')
  },
  beforeDestroy() {
    timeInterval = null
  },
  methods: {
    init() {
      if (timeInterval) {
        return
      }
      timeInterval = setInterval(() => {
        this.time = moment().format('hh:mm:ss')
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.bottom-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-size: 18px;
  line-height: 1;
  font-weight: 200;
  margin-bottom: 35px;
  h6,
  time {
    margin: 5px 0;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
