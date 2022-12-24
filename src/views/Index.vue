<template>
    <div class="index">
        <router-view></router-view>
        <Tabbar :data="tabbarData"/>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import Tabbar from '@/components/Tabbar.vue'

const tabbarData = ref([
    {
        icon:"home",
        title:"Home",
        path:"/home"
    },
    {
        icon:"user",
        title:"Me",
        path:"/me"
    },
    {
        icon:"file-text-o",
        title:"Order",
        path:"/order"
    },
])

</script>