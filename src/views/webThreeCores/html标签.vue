<template>
    <div>

        <body>

            <head></head>
            <nav>导航</nav>

            <title><time datetime=""></time></title>

            <main>文档主要内容</main>

            <section>
                通用内容分区
                <div>
                    <p> <span></span> </p>
                    <br>
                    <hr>
                    <q>行内引用</q>
                </div>

                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>

                <!-- <dl>
                    <dt></dt>
                    <dd></dd>
                </dl> -->

                <article>
                    <dialog></dialog>
                </article>
            </section>

            <aside>侧边栏或附加内容</aside>

            <footer></footer>
        </body>

    </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, onMounted } from 'vue';

onMounted(() => {
    console.log('html 标签')
})


</script>
<style lang="">

</style>