<script setup lang="ts">
  import { mainStore } from '../store/index'
  const store = mainStore()

  function handleDoubleCount() {
    console.log(store.doubleCount)
  }
  function handleAddCount() {
    store.count++
  }
</script>
  
<template>
  <button @click="handleDoubleCount">读取doubleCount</button>
  <button @click="handleAddCount">count + 1</button>
</template>
  
<style scoped>
button {
  display: inline-block;
  margin: 0 5px;
}
</style>
  