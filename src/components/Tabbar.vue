<template>
    <div class="tabbar-component">
        <router-link 
            class="tab-item" 
            v-for="(item,index) in data" 
            :to="item.path" 
            :key="index"
        >
            <div class="tab-item-icon">
                <i :class="'fa fa-'+item.icon"></i>
            </div>
            <div class="tab-item-lable">{{item.title}}</div>
        </router-link>
    </div>
</template>

<script lang='ts' setup>
import {  } from 'vue'
interface tabbarDataProps {
    title: string;
    icon: string;
    path: string;
}
defineProps<{data:tabbarDataProps[]}>(

)
</script>