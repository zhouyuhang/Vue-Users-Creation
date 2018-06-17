import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import UsersList from '@/components/UsersList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'User',
      component: User
    },
    {
      path: '/userslist',
      name: 'UsersList',
      component: UsersList
    }
  ]
})
