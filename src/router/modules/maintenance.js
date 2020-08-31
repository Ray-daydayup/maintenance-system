export default {
  path: 'maintenance',
  name: 'maintenance',
  meta: { title: '维修管理', icon: 'el-icon-s-tools' },
  redirect: { name: 'Application' },
  component: () =>
    import(/* webpackChunkName: "about" */ '@/views/maintenanceManagement'),
  children: [
    {
      path: 'application',
      name: 'Application',
      meta: { title: '维修申请' },
      component: () => import('@/views/maintenanceManagement/application')
    },
    {
      path: 'plan',
      name: 'Plan',
      meta: { title: '维修计划' },
      component: () => import('@/views/maintenanceManagement/plan')
    },
    {
      path: 'check',
      name: 'Check',
      meta: { title: '维修审核' },
      component: () => import('@/views/maintenanceManagement/check')
    },
    {
      path: 'record',
      name: 'Record',
      meta: { title: '项目记录' },
      component: () => import('@/views/maintenanceManagement/record')
    },
    {
      path: 'end',
      name: 'End',
      meta: { title: '维修验收' },
      component: () => import('@/views/maintenanceManagement/end')
    }
  ]
}
