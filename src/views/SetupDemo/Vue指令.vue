<template>
    <div>
        <h1>Vue 指令</h1>
        <hr>

        <form @submit.prevent="addTodo">
            <input type="text" v-model="newTodo">
            <button>add todo</button>
        </form>

        <ul>
            <li v-for="todo in filteredTodos" :key="todo.id">
                <input type="checkbox" v-model="todo.done">&nbsp;
                <span :class="{ done: todo.done }">{{ todo.id }} -{{ todo.text }}</span>
                &nbsp;
                <button @click="removeTodo(todo.id)">X</button>
            </li>
        </ul>

        <button @click="hideCompleted = !hideCompleted">
            {{ hideCompleted ? 'Show all' : 'Hide completed' }}
        </button>

    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { computed } from 'vue'

let id = 0
const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
    { id: id++, text: 'Learn HTML', done: true },
    { id: id++, text: 'Learn JavaScript', done: true },
    { id: id++, text: 'Learn Vue', done: false }
])

// 过滤已经完成的 todo
const filteredTodos = computed(() => {
    return hideCompleted.value ? todos.value.filter((item) => !item.done) : todos.value
})

function addTodo() {
    todos.value.push({ id: id++, text: newTodo.value, done: false })
    newTodo.value = ''
}

function removeTodo(todoId: number) {
    // way 1
    // const removeIndex = todos.value.findIndex((item) => item.id === todoId)
    // todos.value.splice(removeIndex, 1)

    // way 2
    todos.value = todos.value.filter((item) => item.id !== todoId)
}


</script>
<style lang="scss">
.done {
    text-decoration: line-through;
}
</style>