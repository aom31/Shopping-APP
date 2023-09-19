import { defineStore } from 'pinia';
import axios from 'axios';
import {ref, computed} from 'vue';

export const useProductStore = defineStore('useProductStore', () => {
    //สร้างตัวแปรมาเก็บข้อมูลที่ได้จาก api
    const products = ref({})

    const getProducts = async () => {
        //call api
        await axios.get(`${import.meta.env.VITE_API_GET_PRODUCTS}`)
        .then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }

    // return ค่าที่ได้จาก api ใน ตัวแปรที่จะเอาออกไปใช้ข้างนอก
    return {getProducts}
})