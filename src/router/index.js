import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由跳转权限
router.beforeEach((to,from,next) => {
  // 如果用户访问的登录页，直接放行
  if(to.path ==='/login') return next()
  // 取出用户保存的 token 
  const token = window.sessionStorage.getItem('token')
  // 如果用户访问的不是登录页，先判断是否有token，如果有，放行
  if(token) return next()
  // 没有token，强制跳转到登录页
  next('/login')
})

export default router
