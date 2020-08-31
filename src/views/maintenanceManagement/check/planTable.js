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
    title: '维修计划名称',
    key: 'name',
    minWidth: '50px'
  },
  {
    title: '计划负责人',
    key: 'operator',
    minWidth: '50px'
  },
  {
    title: '维修申请编号',
    key: 'application_id',
    minWidth: '50px'
  },
  {
    title: '计划完工时间',
    key: 'plan_complete_time',
    showOverflowTooltip: true
  },
  {
    title: '计划小时',
    key: 'repair_time'
  },
  {
    title: '审核状态',
    key: 'check_status'
  },
  {
    title: '处理状态',
    key: 'process_status'
  },
  {
    title: '创建时间',
    key: 'create_time',
    sortable: true
  },
  {
    title: '更新时间',
    key: 'update_time'
  }
]

const rowHandle = {
  minWidth: '85px',
  fixed: 'right',
  align: 'center',
  custom: [
    {
      icon: 'el-icon-close',
      text: '',
      type: 'danger',
      size: 'small',
      circle: true,
      emit: 'refuse-handle'
    },
    {
      icon: 'el-icon-check',
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
