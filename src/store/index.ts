import { defineStore } from "pinia"

export const mainStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
      text: '文字',
      userList: Array<String>()
    }
  },
  getters: {
    doubleCount(state) {
      console.log('读取doubleCount -------')
      return state.count * 2
    }
  },
  actions: {
    addUser() {
      this.count++
    }
  }
})