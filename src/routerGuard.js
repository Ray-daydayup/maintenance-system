import router from '@/router'
import { getToken } from '@/utils/token'

router.beforeEach((to, from, next) => {
  if (to.name === 'Login') {
    const token = getToken()
    if (token) {
      next({ name: 'Home' })
    }
  }

  next()
})
