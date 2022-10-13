<template>
  <div class="text-center w-96">
    <h1 class="font-medium">{{ valueHeading }}</h1>
    <div class="flex w-full justify-between">
      <input
        type="text"
        class="input p-3 border-green-100 outline-none focus:border-blue-500"
        placeholder="Please input"
        v-model="valueInput"
      />
      <button
        @click="valueHeading = valueInput"
        class="px-2 py-4 rounded-lg bg-green-500"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Ref, ref } from 'vue'

  const valueInput: Ref<string> = ref('')
  const valueHeading: Ref<string> = ref('')
</script>

<style scoped></style>
