export default {
  path: 'user',
  name: 'User',
  redirect: { name: 'Users' },
  meta: { title: '用户与权限', icon: 'el-icon-user-solid' },
  component: () => import('@/views/userManagement'),
  children: [
    {
      path: 'users',
      name: 'Users',
      meta: { title: '用户管理' },
      component: () => import('@/views/userManagement/users')
    },
    {
      path: 'roles',
      name: 'Roles',
      meta: { title: '角色管理' },
      component: () => import('@/views/userManagement/roles')
    },
    {
      path: 'permission',
      name: 'Permission',
      meta: { title: '权限管理' },
      component: () => import('@/views/userManagement/permission')
    }
  ]
}
