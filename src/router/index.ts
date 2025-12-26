import { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Events from '../views/Events.vue'
import Organizers from '../views/Organizers.vue'
import Partners from '../views/Partners.vue'
import Videos from '../views/Videos.vue'
import EventDetails from '../views/EventDetails.vue'
import Blogs from '../views/Blogs.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
  {
    path: '/events/:id',
    name: 'event-details',
    component: EventDetails
  },
  {
    path: '/our-team',
    name: 'organizers',
    component: Organizers
  },
  {
    path: '/partners',
    name: 'partners',
    component: Partners
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
]