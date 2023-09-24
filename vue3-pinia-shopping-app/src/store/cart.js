import { defineStore } from 'pinia';

import { ref } from 'vue';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export const useCartStore = defineStore('useCartStore', () => {

    // สร้างตัวแปรเก็บสินค้าที่ต้องการสั่งซื้อ
    const cart = ref([])

    //สร้าง function และ set default value =1
    const add_cart = (id, price, quantity = 1) => {

        const data = {
            id,
            price,
            quantity
        }
        //เช็คค่าซ้ำที่ถูกเพิ่ม
        const findId = cart.value.find(elementt => elementt.id === data.id)

        if (findId) {
            //ถ้าเจอการเพิ่มสินค้านี้แล้วให้ alert
            alert_add_cart_failed()
        } else {

            //เพิ่มค่าเข้าไปในตัวแปรของ data ด้วย push
            cart.value.push(data)
            saveToLocalStorage()
            alert_add_cart()
        }

    }

    const saveToLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart.value))
    }

    //local storage
    const loadFromLocalStorage  = () => {
        if(localStorage.getItems('cart')) {
            cart.value = JSON.parse(localStorage.getItems('cart'))
        }
    }

    const alert_add_cart = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'เพิ่มสินค้าสำเร็จ',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const alert_add_cart_failed = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'สินค้าถูกเพิ่มไปแล้ว',
            showConfirmButton: false,
            timer: 1500
        })
    }


    return { add_cart ,loadFromLocalStorage}
})