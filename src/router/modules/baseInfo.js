export default {
  path: 'baseinfo',
  name: 'BaseInfo',
  redirect: { name: 'Vehicle' },
  meta: { title: '基础信息', icon: 'el-icon-s-order' },
  component: () => import('@/views/baseInfo'),
  children: [
    {
      path: 'vehicle',
      name: 'Vehicle',
      meta: { title: '车辆信息' },
      component: () => import('@/views/baseInfo/vehicle')
    },
    {
      path: 'resource',
      name: 'resource',
      meta: { title: '资源信息' },
      component: () => import('@/views/baseInfo/resource')
    },
    {
      path: 'department',
      name: 'Department',
      meta: { title: '部门信息' },
      component: () => import('@/views/baseInfo/department')
    }
  ]
}
