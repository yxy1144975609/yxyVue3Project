<template>
  <div>
    <h1>Scss语法学习</h1>
    <hr />
    <div class="card">
      <div>{{ count }}</div>
    </div>
    <div class="card">
      <button class="btn" @click="countAdd">Button add</button>
      <button class="btn" @click="countSub">Button Sub</button>
      <button class="btn" @click="countReset">Button Reset</button>
    </div>

    <div class="card">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>

    <div class="card" id="nav">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </div>

    <div class="card">
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup(props) {

    // 自动推断：当初始化值明确时，无需手动标注。
    let count = ref(0)

    // 显式泛型：初始化值为 null 或需要明确类型时使用 <Type>。
    let demo = ref<number>(null)

    interface ApiData {
      code: number;
      result: unknown;
    }
    let apiData = ref<ApiData>()


    onMounted(() => {
      console.log()
    })

    const countAdd = () => {
      count.value += 1
    }
    const countSub = () => {
      count.value -= 1
    }
    const countReset = () => {
      count.value = 0
    }




    return {
      count,
      countAdd,
      countSub,
      countReset,
      apiData,
      demo,
    }

  },

}) 
</script>

<style lang="scss" scoped>
//模块化导入 @use
@use '../assets/scss/mixins' as ListScss; // 引入混入文件

// 定义变量
$primary-color: #3498db;
$success-color: #2ecc71;
$warning-color: #f39c12;
$error-color: #e74c3c;

$padding: 10px;
$margin: 20px;

// 定义混入(带参数) Mixins
@mixin basic-card($card-padding, $card-margin, $card-bgc: #f0f0f0) {
  padding: $card-padding;
  margin: $card-margin;
  background-color: $card-bgc;
  border-radius: 5px;
}

// 继承
%basic-box {
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
}

// ********************************************************************

h1 {
  color: $primary-color;
  font-style: italic;
}

.card {
  .btn {
    margin: $padding;
    border-radius: 5px;

    &:first-child {
      background-color: $primary-color;
    }

    &:nth-child(2) {
      background-color: $success-color;
    }

    &:last-child {
      background-color: $warning-color;
    }
  }
}

.card {
  &:first-of-type {
    @include basic-card(10px, 20px);
  }

  &:nth-of-type(2) {
    @include basic-card(10px, 20px, #e0e0e0);
  }

  &:nth-of-type(3) {
    @include basic-card(10px, 20px, #d0d0d0);

    // 多属性叠写
    border: {
      color: $success-color;
      width: 3px;
      style: dashed;
      radius: 30px;
    }
  }
}

.card {
  .box {
    @extend %basic-box;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-of-type {
      background-color: $primary-color;

      &:hover {
        font-size: 32px;
        font-weight: bold;
      }
    }

    &:nth-of-type(2) {
      background-color: $success-color;
    }

    &:last-of-type {
      background-color: $warning-color;
    }
  }
}
</style>
