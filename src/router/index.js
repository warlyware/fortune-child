import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Home from '../pages/Home.vue'
// import Tour from '../pages/Tour.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: '/tour',
  //   name: 'Tour',
  //   component: Tour
  // },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: { name: 'Home' } 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
