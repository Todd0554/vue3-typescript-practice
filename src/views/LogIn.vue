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
            <button :disabled="isClick" @click="handleLogIn">Log in</button>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref,computed } from 'vue'
import InputGroup from '@/components/InputGroup.vue';
import axios from '../api/index'
import {useRouter} from 'vue-router'

// react attribute
const phone = ref("15679671921")
const btnTitle = ref("Get SMS Code")
const disabled = ref(false)
const phoneError = ref("")

const verifyCode = ref("542972")
const codeError = ref("")

const router = useRouter()

// computed attribute
const isClick = computed(()=>{
    if(!phone.value || !verifyCode.value) return true;
    else return false;
})


// method
const handleLogIn = async ()=>{
    // log in and navigate to another router
    phoneError.value = "";
    codeError.value = "";
    // check the sms code
    try {
        const res = await axios.post("/api/posts/sms_back", {
        phone: phone.value,
        code: verifyCode.value
        })
        if (res.data.msg === '验证成功'){
            // save token then navigate
            console.log(res.data)
            localStorage.setItem("token", res.data.user._id)
            router.push('/')
        }
    } catch (error:any) {
        console.log(error)
        if (error.response.data.msg === "验证码有误"){
            codeError.value = "incorrect verify code"
        }
        
    }
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
        // 15679671921
        // 542972
    }
}

</script>