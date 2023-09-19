import { defineStore } from 'pinia';
import axios from 'axios';
import {ref, computed} from 'vue';

export const useProductStore = defineStore('useProductStore', () => {
    //สร้างตัวแปรมาเก็บข้อมูลที่ได้จาก api
    const products = ref({})


    // ทุกครั้งที่ค่าจาก api มีการเรียกใช้งานมา ตัว computed ก็จะถูกเรียกใช้งาน
    const productlist = computed(() => products.value)


    //ถ้า api ยังโหลดข้อมูลไม่เสร็จ จะให้ขึ้นว่า กำลังโหลดข้อมูล
    const load_products = computed(() => products.value.length >0)

    const getProducts = async () => {
        //call api
        await axios.get(`${import.meta.env.VITE_API_GET_PRODUCTS}`)
        .then((response) => {
            products.value = response.data
        }).catch((err) => {
            console.log(err)
        })
    }

    // return ค่าที่ได้จาก api ใน ตัวแปรที่จะเอาออกไปใช้ข้างนอก
    return {getProducts, productlist, load_products}
})