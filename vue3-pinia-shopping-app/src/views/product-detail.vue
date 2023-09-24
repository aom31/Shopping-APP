<template>
  <div class="d-flex justify-content-center" v-if="!load_product">
    <h2>กำลังโหลดข้อมูลสินค้า...</h2>
  </div>
  <div class="row mt-3" v-else>
    <div class="col-md-6">
      <img :src="product.image" alt="" class="img-fluid" />
    </div>
    <div class="col-md-6">
      <h1>{{ product.title }}</h1>
      <p>
        {{ product.description }}
      </p>
      <h4>ราคา {{ product.price }} บาท</h4>

      <div class="d-flex mt-3">
        <div class="btn-group me-auto">
          <button class="btn btn-outline-primary">เพิ่มสินค้า</button>
          <button class="btn btn-outline-primary">0</button>
          <button class="btn btn-outline-primary">ลบสินค้า</button>
        </div>
        <button class="btn btn-primary">เพิ่มสินค้า</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const product = ref({});
const route = useRoute();
const load_product = ref(false)
const product_detail = async () => {
  await axios
    .get(`${import.meta.env.VITE_API_GET_PRODUCTS}/${route.params.id}`)
    .then((response) => {
      product.value = response.data
      load_product.value = true
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => product_detail());
</script>

<style></style>
