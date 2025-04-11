<template>
  <div>
    <h1>TypeScript 学习</h1>
    <hr />
    <h3>1. TypeScript 基础类型</h3>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    let name: string = 'Alice'
    let age: number = 18
    let isActive: boolean = true
    let nothing: null = null
    let notDefined: undefined = undefined

    return {
      name,
      msg: 'Hello TypeScript',
    }
  },

  mounted() {
    console.log('TypeScript mounted')
  },
  methods: {
    test() {
      console.log('TypeScript test')
    },
  },
  computed: {
    testComputed() {
      return 'TypeScript testComputed'
    },
  },
  watch: {
    testWatch(newVal: string, oldVal: string) {
      console.log('TypeScript testWatch', newVal, oldVal)
    },
  },
}
</script>
<style></style>
