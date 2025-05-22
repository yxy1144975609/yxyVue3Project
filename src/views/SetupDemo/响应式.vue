<template>
    <div>
        <h1>ref</h1>
        <hr>
        <h3>{{ message }}</h3>
        <input type="text" v-model="message">


        <h1>reactive </h1>
        <hr>
        <button @click="countAdd">add</button>
        <p><span>counter is: {{ counter }}</span> <button @click="reset">reset</button></p>
        <button @click="countSubtract">subtract</button>


    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'

const counter = reactive({ count: 0 })
const message = ref('Hello Word')


const countAdd = () => {
    counter.count += 1
}

const countSubtract = function () {
    counter.count -= 1
}

function reset() {
    counter.count = 0
}

</script>
<style lang="">

</style>