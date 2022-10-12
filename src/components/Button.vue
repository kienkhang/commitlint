<template>
  <button @click="clickMe" class="inline-block p-2 text-white bg-red-500">
    Add Task
  </button>
</template>

<script setup lang="ts">
  function clickMe() {
    console.log('Hello World')
  }
</script>

<style scoped></style>
