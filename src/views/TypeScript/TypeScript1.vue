<template>
  <div>
    <h1>TypeScript 学习</h1>
    <hr />
    <h3>1. TypeScript 基础类型</h3>
  </div>
</template>
<script lang="ts">
export enum RequestEnum {
  GIT = 'GIT',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export default {
  setup() {
    // TypeScript 基础类型
    let name: string = 'Alice'
    let age: number = 18
    let isActive: boolean = true
    let nothing: null = null
    let notDefined: undefined = undefined

    // 复杂类型
    let numbers: number[] = [1, 2, 3, 4, 5]
    let tuple: [string, number] = ['Alice', 18]
    let obj: { name: string; age: number } = { name: 'Alice', age: 18 }
    let basicRequest: RequestEnum = RequestEnum.GIT

    basicRequest = RequestEnum.POST
    console.log('basicRequest', basicRequest)
    console.log('RequestEnum', RequestEnum.GIT, RequestEnum.POST)

    /**
     * 特殊类型
     * any: 任意类型，可以赋值为任意类型，使用时不进行类型检查
     * unknown: 任意类型，但使用时需要进行类型检查
     * void: 表示没有返回值的函数类型
     * never: 表示永远不会有返回值的函数类型，通常用于抛出异常或无限循环的函数
     */

    type Answer = 'yes' | 'no';

    // 联合类型

    let unionType: string | number = 'Alice'

    // 交叉类型
    type Admin = { role: string }
    type User = { name: string }
    type SuperUser = Admin & User
    const superUser: SuperUser = {
      role: 'admin',
      name: 'Alice',
    }

    let intersectionType: { name: string } & { age: number } = {
      name: 'Alice',
      age: 18,
    }

    // interface 接口
    interface Person {
      name: string
      age: number
    }
    // 接口可以继承
    interface Student extends Person {
      grade: number
    }
    const xiaoming: Student = {
      name: 'Alice',
      age: 18,
      grade: 3,
    }
    // 接口可选属性

    return {
      name,
      unionType,
      msg: 'Hello TypeScript',
    }
  },

  mounted() {
    console.log('TypeScript mounted', this.format(this.unionType))
  },
  methods: {
    test() {
      console.log('TypeScript test')
    },

    format(value: string | number) {
      if (typeof value === 'string') {
        return value.toUpperCase()
      }
      return value.toFixed(2)
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
