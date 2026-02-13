<script setup>
import { ref } from 'vue'

const count = ref(0)
function increament() {
  count.value++
}
function reset() {
  count.value = 0
}
function decreament() {
  count.value--
}
</script>

<template>

  <h1>Count: {{ count }}</h1>
  <button @click="increament">Increase</button>
  <button @click="reset">Reset</button>
  <button @click="decreament">Decrease</button>
  
  </template>
<style scoped></style>
