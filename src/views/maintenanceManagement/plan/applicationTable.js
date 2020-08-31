/**
 * 表格配置项
 */
const options = {
  maxHeight: '650',
  border: true,
  size: 'medium',
  highlightCurrentRow: true,
  emptyText: '未获取到数据',
  tooltipEffect: 'dark'
}
const indexRow = {
  title: '序号',
  fixed: 'left',
  align: 'center'
}
/**
 * 列配置项
 */
const columns = [
  {
    title: '任务名称',
    key: 'name',
    minWidth: '40px'
  },
  {
    title: '车牌',
    key: 'licenseNumber',
    minWidth: '40px'
  },
  {
    title: '车型',
    key: 'vehicleType',
    minWidth: '40px'
  },
  {
    title: '故障描述',
    key: 'troubles',
    showOverflowTooltip: true
  },
  {
    title: '期望完工时间',
    key: 'expectCompleteTime'
  },
  {
    title: '申请时间',
    key: 'createTime',
    sortable: true
  },
  {
    title: '更新时间',
    key: 'updateTime'
  }
]

const rowHandle = {
  width: '65px',
  fixed: 'right',
  align: 'center',
  custom: [
    {
      icon: 'el-icon-plus',
      text: '',
      type: 'primary',
      size: 'small',
      circle: true,
      emit: 'add-handle'
    }
  ]
}

export default {
  options,
  columns,
  indexRow,
  rowHandle
}
