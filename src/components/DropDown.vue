<script>
export default {
  name: 'DropMenu',
  functional: true,
  props: {
    title: {
      type: String,
      default: '标题'
    },
    titleStyle: {
      type: String,
      default: 'color: #000;'
    },
    icon: {
      type: String,
      default: 'el-icon-caret-bottom'
    },
    items: {
      type: Array,
      default: () => []
    },
    callback: {
      type: Function,
      default: () => {}
    }
  },
  render(h, context) {
    const { title, titleStyle, items, icon, callback } = context.props
    return (
      <el-dropdown onCommand={callback}>
        <div style={titleStyle + 'cursor: pointer;'}>
          <span>{title}</span>
          <i class={icon}></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          {items.map((item) => {
            return (
              <el-dropdown-item
                command={item.command}
                disabled={item.disabled || false}
                divided={item.divided || false}
                icon={item.icon}>
                {item.title}
              </el-dropdown-item>
            )
          })}
        </el-dropdown-menu>
      </el-dropdown>
    )
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
