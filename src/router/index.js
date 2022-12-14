import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutPageView from '../views/AboutPageView.vue'
import ProductsPageView from '../views/ProductsPageView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPageView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsPageView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
