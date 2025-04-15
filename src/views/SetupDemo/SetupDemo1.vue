<template>
    <div>
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
                    <el-button link type="primary" size="small" @click="handleClick">
                        Detail
                    </el-button>
                    <el-button link type="primary" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, reactive, unref, computed, watch } from 'vue';

// interface 接口可以写这里 也可以写setup里
interface ReviewItem {
    key: number;
    no: '一审' | '二审' | '三审';
    auditPersons: string;
    suggestion: string;
}
export default defineComponent({
    name: 'setupDemo1',
    components: {
    },

    setup(props) {

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
            {
                date: '2016-05-04',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
                tag: 'Home',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
                tag: 'Office',
            },
        ]

        let userTypeA: {
            id: string;
            name: string;
            age: number;
            sex: string;
            phone: string;
        } = {
            id: '001',
            name: 'Alice',
            age: 18,
            sex: 'man',
            phone: '17691194175'
        }

        type userTypeB = {
            id: string;
            name: string;
        }

        // 1.生命周期
        onMounted(() => {
            console.log("this is onMounted")
        });

        // 2.计算属性
        const acceptType = computed(() => {
            if (userTypeA.phone) {
                return userTypeA.phone.slice(0, 5)
            } else {
                return ''
            }
        });
        // computed 实现过滤器
        const phoneFormat = computed(() => {
            if (userTypeA.phone) {
                return userTypeA.phone.slice(0, 5)
            }
            return '-';
        });


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
        const handleSubmit = () => {

        }

        const handleReset = () => {

        }

        const handleEdit = (record: any) => {
        };

        function handleSuccess() {
            // 刷新表格
        }

        return {
            acceptType,
            tableData,
        };
    }
})
</script>
<style lang="">


</style>