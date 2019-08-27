import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: () => import('./views/Frontpage')
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
