<template>
    <div class="text-group">
        <div class="input-group" :class="{'is-invalid': error}">
            <input :type="type" :value="value" :placeholder="placeholder" />
            <button v-if="btnTitle" :disabled="disabled">{{btnTitle}}</button>
        </div>
        <div v-if="error" class="invalid-feedback">{{error}}</div>
    </div>
</template>

<script lang='ts' setup>
import {  } from 'vue'
interface PropsType{
    type:string,
    value:string,
    placeholder:string,
    btnTitle?:string,
    disabled?:boolean,
    error:string
}
withDefaults(defineProps<PropsType>(),{
    type:"",
    value:"",
    placeholder:"",
    btnTitle:"",
    disabled:false,
    error:""
})
</script>