<script setup lang="ts">
  import { mainStore } from '../store/index'
  import { useUserStore } from '../store/user'
  const store = mainStore()
  const userStore = useUserStore()

  function handleDoubleCount() {
    console.log(store.doubleCount)
  }
  function handleAddCount() {
    store.count++
  }
  function handleAddAction() {
    store.addUser()
  }
  function handlePatch1() {
    store.$patch({
      count: 99,
      text: store.text === '文字' ? 'text' : '文字'
    })
  }
  function handlePatch2() {
    store.$patch(state => {
      if (state.count > 10) {
        state.count--
      } else if(state.count < 5) {
        state.count++
      } else {
        state.count = 15
      }
    })
  }
  // setup stores
 function handleAddUser() {
    userStore.addUser('用户')
  }
  function handleResetUser() {
    userStore.resetUser()
  }
</script>
  
<template>
  <button @click="handleDoubleCount">读取doubleCount</button>
  <button @click="handleAddCount">count + 1</button>
  <button @click="handleAddAction">调用action</button>
  <button @click="handlePatch1">$patch修改值</button>
  <button @click="handlePatch2">$patch接收函数</button>
  <br/>
  <button @click="handleAddUser">添加用户</button>
  <button @click="handleResetUser">清空用户</button>
</template>
  
<style scoped>
button {
  display: inline-block;
  margin: 15px 5px;
}
</style>
  