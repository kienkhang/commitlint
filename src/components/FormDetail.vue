<template>
  <div class="justify-center">
    <p class="font-medium mb-3">Add</p>
    <input
      v-model="message"
      placeholder="add new"
      id="inputName"
      class="border-solid border border-black outline-none p-1 rounded mb-3"
    />
    <button class="block bg-red-400 p-2 rounded-md mb-3" @click="addItem()">
      ADD
    </button>
    <ul class="list-disc list-inside">
      <!-- <li></li> -->
      <li class="flex w-44 justify-between" v-for="item in list">
        <span> {{ item }}</span>
        <button>x</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  let list: string[] = []
  let message = ref('')
  function addItem() {
    // event.$refs.anyName.reset()
    list.push(message.value)
    console.log(list)
    message.value = ''
  }
</script>
