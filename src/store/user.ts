import { defineStore } from "pinia"
import { computed, reactive } from "vue"

type userT = string | number

export const useUserStore = defineStore('user', () => {
  // state
  const count = 1
  let userList: userT[] = reactive([])
  // getters
  const userNum = computed(() => userList.length)
  // actions
  function addUser(userName:userT) {
    userList.push(userName)
  }
  function resetUser() {
    userList.length = 0
  }

  return {
    count,
    userList,
    userNum,
    addUser,
    resetUser
  }
})