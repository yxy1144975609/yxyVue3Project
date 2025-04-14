<template>
    <div>
        <h1>表单与表格的练习最好</h1>
        <el-form :model="form" label-width="auto" style="max-width: 600px">
            <el-form-item label="Activity name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="form.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                    <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
                </el-col>
                <el-col :span="2" class="text-center">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="11">
                    <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
                </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery">
                <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox value="Online activities" name="type">
                        Online activities
                    </el-checkbox>
                    <el-checkbox value="Promotion activities" name="type">
                        Promotion activities
                    </el-checkbox>
                    <el-checkbox value="Offline activities" name="type">
                        Offline activities
                    </el-checkbox>
                    <el-checkbox value="Simple brand exposure" name="type">
                        Simple brand exposure
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                    <el-radio value="Sponsor">Sponsor</el-radio>
                    <el-radio value="Venue">Venue</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>

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

        const formItem = {
            regionOptions: [
                { label: 'Zone one', value: 'shanghai' },
                { label: 'Zone two', value: 'beijing' },
            ]
        }

        // do not use same name with ref 不要使用相同的名称与ref
        const form = reactive({
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
        })

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

        const onSubmit = () => {
            console.log('submit!', form)
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
            form,
            onSubmit,
        };
    }
})
</script>
<style lang="">


</style>