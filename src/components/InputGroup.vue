<template>
    <div class="text-group">
        <div class="input-group" :class="{'is-invalid': error}">
            <input @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)" :type="type" :value="modelValue" :placeholder="placeholder" />
            <button @click="$emit('btnClick')" v-if="btnTitle" :disabled="disabled">{{btnTitle}}</button>
        </div>
        <div v-if="error" class="invalid-feedback">{{error}}</div>
    </div>
</template>

<script lang='ts' setup>
import {  } from 'vue'
interface PropsType{
    type:string,
    modelValue:string,
    placeholder:string,
    btnTitle?:string,
    disabled?:boolean,
    error:string
}
// withDefaults 用来设置默认值， 配合defineProps使用
withDefaults(defineProps<PropsType>(),{
    type:"",
    modelValue:"",
    placeholder:"",
    btnTitle:"",
    disabled:false,
    error:""
});
defineEmits([
    "btnClick",
    "update:modelValue"
])
</script>