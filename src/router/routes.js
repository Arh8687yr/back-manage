const routes = [
  {
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name:'login',
    component: () => import('@/views/Login.vue')
  }
]

export default routes