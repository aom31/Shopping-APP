<template>
  <navbar_product_component />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import navbar_product_component from "./components/navbar-product.vue";
import { onMounted } from "vue";

import { useProductStore } from "./store/product-store"

const product_store = useProductStore()

onMounted(() => {
  product_store.getProducts()
})
</script>

<style></style>
