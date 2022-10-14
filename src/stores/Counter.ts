import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),

  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    incrementValue() {
      this.count += 5
    },
    decrementValue() {
      this.count -= 5
    },
    setValue() {
      this.count = 100
    },
    resetValue() {
      this.count = 0
    },
  },
})
