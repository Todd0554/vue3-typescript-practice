<template>
  <h1>Im h1</h1>
  <Index></Index>
  <HelloWorld :msg="'heyhey'"></HelloWorld>
</template>

<script setup lang="ts">
import Index from "@/views/Index.vue"
import HelloWorld from "@/components/HelloWorld.vue"
</script>



