<template>
    <div class="login-component">
        <div class="logo">
            <img src="@/assets/logo.png" alt="my log in image">
        </div>
        <InputGroup 
        type="number" 
        v-model="phone" 
        placeholder="phone number" 
        :btn-title="btnTitle"
        :disabled="disabled"
        :error="phoneError"
        @btnClick="getVerifyCode"
        />
        <InputGroup 
        type="number" 
        v-model="verifyCode" 
        placeholder="SMS Code" 
        :error="codeError"
        />

        <div class="login-des">
            <p>I agree <span>User Service Protocol</span></p>
        </div>
        <div class="login-btn">
            <button :disabled="isClick" @click="handleClick">Log in</button>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref,computed } from 'vue'
import InputGroup from '@/components/InputGroup.vue';
import axios from '../api/index'

// react attribute
const phone = ref("")
const btnTitle = ref("Get SMS Code")
const disabled = ref(false)
const phoneError = ref("")

const verifyCode = ref("")
const codeError = ref("")

// computed attribute
const isClick = computed(()=>{
    if(!phone.value || !verifyCode.value) return true;
    else return false;
})


// method
const handleClick = ()=>{
    // log in and navigate to another router
    console.log(phone.value)
    console.log(verifyCode.value)
}

const validatePhoneNumber = ()=>{
    if (!phone.value){
        phoneError.value = "phone number can't be empty!"
        return false
    } else if (
        // Australian phone number regex
        // !/^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/.test(phone.value)
        // Chinese phone number regex
        !/^1[345678]\d{9}$/.test(phone.value)
        ){
        phoneError.value = "this number is not validated!"
        return false
    } else {
        phoneError.value = ""
        return true
    }
}
const handleCounter = ()=>{
    let time = 60
    let timer = setInterval(()=>{
        if (time == 0){
            clearInterval(timer);
            btnTitle.value = "Get SMS Code"
            disabled.value = false
        } else {
            btnTitle.value = "Retry after " + time + "s";
            disabled.value = true
            time--
        }
    }, 1000)
}
const getVerifyCode = async ()=>{
    // validate phone number
    if (validatePhoneNumber()){
        // setTime
        handleCounter()
        // send request to sms api
        await axios.post("/api/posts/sms_send", {
            phone: phone.value
        })
        // 542972
    }
}

</script>