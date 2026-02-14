<script setup>
import { ref } from 'vue';

const input = ref('')
const todos = ref([])

const addTodo = () => {
 if (input.value.trim() !== '') {
    todos.value.push(input.value)
    input.value = ''
}}

// const addTodoEnter =(event) => {
//      if (event.keyCode === 10) {
//         addTodo();
//     }
//     console.log(addTodoEnter.value);
    
// }

const deleteTodo = (event) => {
      event.target.parentNode.remove();  
}

</script>

<template>
    <input v-model="input" class=" ml-10 mt-10 border-2" type="text" placeholder="enter a Todo">
    <button @click="addTodo"
    class=" ml-1 border-2 bg-amber-400">submit</button>

    <ul>
        <li class=" ml-5" v-for="(todo , index) in todos" :key="index">{{ todo }} <button @click="deleteTodo" class=" ml-1 border-2 bg-red-400 mb-1.5 mt-1" >delete</button></li>
    </ul>

</template>

<style scoped>

</style>