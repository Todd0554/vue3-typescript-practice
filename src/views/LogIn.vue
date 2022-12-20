<template>
    <div class="login-component">
        <div class="logo">
            <img src="@/assets/logo.png" alt="my log in image">
        </div>
        <InputGroupVue 
        type="number" 
        v-model="phone" 
        placeholder="phone number" 
        :btn-title="btnTitle"
        :disabled="disabled"
        :error="phoneError"
        />
        <InputGroupVue 
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
import InputGroupVue from '@/components/InputGroup.vue';

const phone = ref("")
const btnTitle = ref("Get SMS Code")
const disabled = ref(false)
const phoneError = ref("")

const verifyCode = ref("")
const codeError = ref("")
</script>