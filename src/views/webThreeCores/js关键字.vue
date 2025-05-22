<template lang="">
    <div>
        <h1>JavaScript 25个关键字</h1>
        <div class="message">
            JavaScript 的关键字数量随着语言版本的更新而变化。
            截至 ECMAScript 2022（ES13），JavaScript 共有 37 个关键字。
            以下是关键字的分类和详细列表：
        </div>

        <div class="card">
            <h2>1. ES5 及之前的关键字（26 个）</h2>
            <div>
                <h3>控制流与基本操作</h3>
            </div>
        </div>

        <div class="card">
            <h2>2. ES6（ES2015）新增关键字（9 个）</h2>
            <div>
                <h3>块级作用域和模块化：</h3>
            </div>
        </div>

        <div class="card">
            <h2>3.ES2017 新增关键字（2 个）</h2>
            <div>
                <h3>异步编程支持</h3>
                {{ JavaScriptKeyWordsC }}
            </div>
        </div><hr>

        <h1>完整关键字列表（按字母排序）</h1>
    </div>
</template>
<script setup>

// 控制流和基本操作：
const JavaScriptKeyWordsA = [
    'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'finally', 'for', 'function', 'if', 'in', 'instanceof', 'new', 'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'
]
// 块级作用域和模块化：
const JavaScriptKeyWordsB = [
    'calss', 'const', 'extends', 'export', 'import', 'let', 'static', 'super', 'yield'
]
// 异步编程支持：
const JavaScriptKeyWordsC = ['async', 'await']

</script>
<style lang="scss"></style>