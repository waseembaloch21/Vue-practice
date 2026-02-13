<script setup>
import { ref } from 'vue';


const name = ref('')

</script>

<template>
    <input v-model="name"/>
    <p>Your name is : {{ name }}</p>

</template>

<style scoped>

</style>