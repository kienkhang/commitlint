<template>
  <div class="w-[500px] h-[300px] box-border bg-gray-900 p-3">
    <p class="font-medium text-lg text-white">Count : {{ count }}</p>
    <button
      class="px-4 py-1 bg-emerald-500 text-white outline-none border-none rounded-lg m-2 hover:bg-emerald-600 text-lg"
      @click="increment"
    >
      Increment
    </button>
    <button
      class="px-4 py-1 bg-emerald-500 text-white outline-none border-none rounded-lg m-2 hover:bg-emerald-600 text-lg"
      @click="decrement"
    >
      Decrement
    </button>
    <button
      class="px-4 py-1 bg-emerald-500 text-white outline-none border-none rounded-lg m-2 hover:bg-emerald-600 text-lg"
      @click="incrementValue"
    >
      Increment (+5)
    </button>
    <button
      class="px-4 py-1 bg-emerald-500 text-white outline-none border-none rounded-lg m-2 hover:bg-emerald-600 text-lg"
      @click="decrementValue"
    >
      Decrement (+5)
    </button>
    <button
      class="px-4 py-1 bg-emerald-500 text-white outline-none border-none rounded-lg m-2 hover:bg-emerald-600 text-lg"
      @click="setValue"
    >
      Set (100)
    </button>
    <button
      class="px-4 py-1 bg-emerald-500 text-white outline-none border-none rounded-lg m-2 hover:bg-emerald-600 text-lg"
      @click="resetValue"
    >
      Reset
    </button>
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '@/stores/Counter'
  import { storeToRefs } from 'pinia'
  import { ref, watch } from 'vue'

  // const {
  //   count,
  //   increment,
  //   decrement,
  //   incrementValue,
  //   decrementValue,
  //   setValue,
  //   resetValue,
  // } = useCounterStore()

  const {
    increment,
    decrement,
    incrementValue,
    decrementValue,
    setValue,
    resetValue,
  } = useCounterStore()

  const { count } = storeToRefs(useCounterStore())

  watch(count, (val) => console.log(val))
</script>

<style scoped></style>
