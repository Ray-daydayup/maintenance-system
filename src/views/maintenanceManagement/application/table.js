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
    title: '车辆ID',
    key: 'vehicleId',
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
    title: '申请人ID',
    key: 'applicantId',
    minWidth: '40px'
  },
  {
    title: '申请时间',
    key: 'createTime',
    sortable: true
  },
  {
    title: '更新时间',
    key: 'updateTime',
    sortable: true
  }
]

const rowHandle = {
  minWidth: '85px',
  fixed: 'right',
  align: 'center',
  remove: {
    icon: 'el-icon-delete',
    size: 'small',
    text: '',
    circle: true,
    confirm: true
  },
  custom: [
    {
      icon: 'el-icon-edit',
      text: '',
      type: 'primary',
      size: 'small',
      circle: true,
      emit: 'edit-handle'
    },
    {
      icon: 'el-icon-success',
      text: '',
      type: 'success',
      size: 'small',
      circle: true,
      emit: 'commit-handle'
    }
  ]
}

export default {
  options,
  columns,
  indexRow,
  rowHandle
}
