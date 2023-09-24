import { createRouter, createWebHistory } from 'vue-router'
import HomeProductView from '../views/home-product.vue'
import ProductDetailView from '../views/product-detail.vue'
const routes = [
  {
    path: '/',
    name: 'HomeProductView',
    component: HomeProductView
  },
  {
    path: '/product/detail/:id',
    name: 'ProductDetailView',
    component: ProductDetailView,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router