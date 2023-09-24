<template>
  <h1>ตะกร้าสินค้า</h1>

  <table class="table">
    <thead>
      <tr>
        <th>สินค้า</th>
        <th>ราคา</th>
        <th>จำนวน</th>
        <th>รวม</th>
        <th>ลบสินค้า</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="index in 20">
        <td>
          <img
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt=""
            class="img-thumbnail"
            width="100"
          />
        </td>
        <td>150 บาท</td>
        <td>
          <button class="btn btn-sm btn-secondary">-</button>
          <span class="mx-2">1</span>
          <button class="btn btn-sm btn-secondary">+</button>
        </td>
        <td>1000 บาท</td>
        <td>
          <button class="btn btn-danger">ลบ</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup></script>

<style lang="scss" scoped></style>
