import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Detail from '../components/lists/Detail.vue'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})

export default router
