<script setup lang="ts">
  import defineProps from '*.vue'
  defineProps<{ msg: string }>()
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>HelloWorld aa</p>
</template>

<style scoped></style>
