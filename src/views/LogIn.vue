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
            <button>Log in</button>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import InputGroup from '@/components/InputGroup.vue';

// react attribute
const phone = ref("")
const btnTitle = ref("Get SMS Code")
const disabled = ref(false)
const phoneError = ref("")

const verifyCode = ref("")
const codeError = ref("")

// method
const validatePhoneNumber = ()=>{
    if (!phone.value){
        phoneError.value = "phone number can't be empty!"
        return false
    } else if (!/^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/.test(phone.value)){
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
const getVerifyCode = ()=>{
    // validate phone number
    if (validatePhoneNumber()){
        // setTime
        handleCounter()
    }
}

</script>