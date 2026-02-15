<script setup>
import { ref } from 'vue';

const emoji = ref("😍")
const status_code = ref("200")
const status_message = ref("Server is running")
const button_text = ref("good bye")

// const input = ref('')
// const todos = ref([])

// const addTodo = () => {
//  if (input.value.trim() !== '') {
//     todos.value.push(input.value)
//     input.value = ''
// }}

// const addTodoEnter =(event) => {
//      if (event.keyCode === 10) {
//         addTodo();
//     }
//     console.log(addTodoEnter.value);
    
// }

// const deleteTodo = (event) => {
//       event.target.parentNode.remove();  
// }

</script>

<template>

    <span>{{ emoji }}</span>
    <h1>{{ status_code }}</h1>
    <p>{{ status_message }}</p>
    <a href="#" target="_blank">{{ button_text }} →</a>



    <!-- <input v-model="input" class=" ml-10 mt-10 border-2" type="text" placeholder="enter a Todo">
    <button @click="addTodo"
    class=" ml-1 border-2 bg-amber-400">submit</button>

    <ul>
        <li class=" ml-5" v-for="(todo , index) in todos" :key="index">{{ todo }} <button @click="deleteTodo" class=" ml-1 border-2 bg-red-400 mb-1.5 mt-1" >delete</button></li>
    </ul> -->

</template>

<style scoped>

</style>