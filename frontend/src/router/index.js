import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home-page.vue'
import profile from '../views/user-profile.vue'
import logIn from '../views/log-in.vue'
import create from '../views/create-post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: logIn,
    },
  {
    path: '/user/:id/home',
    name: 'home-page',
    component: home,

  },
  {
    path: '/user/:id',
    name: 'profile',
    component: profile
  },
 
{
  path: '/user/:id/create',
  name: 'create',
  component: create,
}

]

const router = new VueRouter({
  routes
})

export default router
