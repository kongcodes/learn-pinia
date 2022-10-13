<script setup lang="ts">
  import { mainStore } from '../store/index'
  const store = mainStore()
</script>
  
<template>
  <h3>UserList</h3>
  <ul>
    <li v-for="item in store.userList">{{ item }}</li>
  </ul>
</template>
  
<style scoped>

</style>
  