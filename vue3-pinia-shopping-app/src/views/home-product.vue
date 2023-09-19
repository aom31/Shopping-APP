<template>
  <div class="d-flex justify-content-center" v-if="!product_store.load_products">
    <h2>กำลังโหลดข้อมูลสินค้า...</h2>
  </div>
  <div class="row mt-3" v-else>
    <div
      class="col mb-3"
      v-for="(product, index) in listproduct"
      :key="index"
    >
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top mx-auto"
          :src="product.image"
          alt=""
          style="width: 17rem; height: 12rem"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">หมวดหมู่ {{ product.category }}</p>
          <p class="card-text">ราคา {{ product.price }}</p>
          <button class="btn btn-primary mx-2">รายละเอียด</button>
          <button class="btn btn-success">เพิ่มลงตะกล้า</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

//use product store
import { useProductStore } from "../store/product-store";
const product_store = useProductStore();

const listproduct = computed(() => product_store.productlist);
</script>

<style></style>
