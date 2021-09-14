import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Qweet from '../views/Qweet.vue'
import Explore from '@/components/Explore.vue'
import Notification from '@/components/Notification.vue'
import Message from '@/components/Message.vue'
import Bookmark from '@/components/Bookmark.vue'
import List from '@/components/List.vue'
import Profile from '@/components/Profile.vue'
import More from '@/components/More.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/qweet/:id',
    name: 'qweet',
    component: Qweet
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/notifications',
    name: 'Notification',
    component: Notification
  },
  {
    path: '/messages',
    name: 'Message',
    component: Message
  },{
    path: '/bookmarks',
    name: 'Bookmark',
    component: Bookmark
  },
  {
    path: '/lists',
    name: 'List',
    component: List
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/more',
    name: 'More',
    component: More
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
