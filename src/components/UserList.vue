<script setup lang="ts">
  import { useUserStore } from '../store/user'
  const userStore = useUserStore()
</script>
  
<template>
  <h3>当前有 {{userStore.userNum}} 个用户 </h3>
  <ul>
    <li v-for="item in userStore.userList">{{ item }}</li>
  </ul>
</template>
  
<style scoped>

</style>
  