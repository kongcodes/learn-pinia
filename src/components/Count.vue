<script setup lang="ts">
  import { mainStore } from '../store/index'
  import { storeToRefs } from 'pinia'
  const store = mainStore()
  // 失去响应式
  // const { count, text } = store
  // 不会失去响应式
  const { count, text } = storeToRefs(store)
</script>
  
<template>
  <h1>count: {{ store.count }}</h1>
  <p>解构 count：{{ count }}</p>
  <p>解构 text：{{ text }}</p>
  <h1>getters - doubleCount: {{ store.doubleCount }}</h1>
</template>
  
<style scoped>

</style>
  