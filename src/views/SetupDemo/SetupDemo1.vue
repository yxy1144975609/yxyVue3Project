<template>
  <div>
    <input type="text" ref="inputEl" />
    <h1>表单与表格的练习最好</h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="600" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations" min-width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"> Detail </el-button>
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, reactive, unref, computed, watch } from 'vue'

// interface 接口可以写这里 也可以写setup里
interface ReviewItem {
  key: number
  no: '一审' | '二审' | '三审'
  auditPersons: string
  suggestion: string
}
export default defineComponent({
  name: 'setupDemo1',
  components: {},
  props: {
    // foo: {
    //   type: Object as PropType<ReviewItem>,
    // },
  },
  emits: ['success', 'register'],
  setup(props) {
    // 1. 基础类型（自动推断）
    let count = ref(0) // 自动推断为 Ref<number>
    let message = ref('Hello Vue3') // 自动推断为 Ref<string>

    // 2. 显式指定泛型类型
    // 显式标注为 User 类型，初始值为 null
    interface user {
      id: number
      name: string
    }
    const user = ref<user | null>(null)
    // 后续赋值时类型安全
    user.value = { id: 1, name: 'Alice' }
    // user.value = 'Bob'

    // 3. 引用 DOM 元素
    const inputEl = ref<HTMLInputElement | null>(null)
    setTimeout(() => {
      inputEl.value?.focus()
    }, 3000)

    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
      },
    ]

    let userTypeA: {
      id: string
      name: string
      age: number
      sex: string
      phone: string
    } = {
      id: '001',
      name: 'Alice',
      age: 18,
      sex: 'man',
      phone: '17691194175',
    }

    type userTypeB = {
      id: string
      name: string
    }

    // 1.生命周期
    onMounted(() => {
      console.log('this is onMounted')
    })

    // 2.计算属性
    const acceptType = computed(() => {
      if (userTypeA.phone) {
        return userTypeA.phone.slice(0, 5)
      } else {
        return ''
      }
    })
    // computed 实现过滤器
    const phoneFormat = computed(() => {
      if (userTypeA.phone) {
        return userTypeA.phone.slice(0, 5)
      }
      return '-'
    })

    // 3.监听
    // watch(
    //     () => largeScreenRef.value,
    //     (nv) => {
    //         const maxLength = nv ? 10 : 5;
    //         pageRef.value.pageSize = maxLength;
    //     },
    // );

    // 4.methods 方法
    const handleClick = () => {
      console.log('click')
    }
    const handleEdit = (record: any) => {}

    function handleSuccess() {
      // 刷新表格
    }

    return {
      acceptType,
      tableData,
      inputEl,
      handleClick,
    }
  },
})
</script>
<style lang=""></style>
