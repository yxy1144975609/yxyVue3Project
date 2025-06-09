<template>
    <div>
        <h1>ES6+ 新特性练习</h1>
    </div>
</template>
<script lang="ts" setup>

async function asy1() {
    console.log(1)
    await asy2();
    console.log(2)
}

const asy2 = async () => {
    await setTimeout(() => {
        Promise.resolve().then(() => {
            console.log(3);
        });
        console.log(4);
    }, 0);
}

const asy3 = async () => {
    Promise.resolve().then(() => {
        console.log(5);
    });
}

// asy1();
// console.log(6);
// asy3()
// 1 6 5 2 4 3

</script>
<style lang="less" scoped></style>