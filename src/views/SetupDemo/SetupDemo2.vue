<template>
    <div>
        <div>script setup 语法 {{ ifDisabled }} {{ isDelivery }}</div>
        <h1>表单</h1>
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
                <el-button @click="oneEdit">isEdit</el-button>
            </el-form-item>
        </el-form>

        <h1>表格</h1>
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

<script lang="ts" setup>
import { ref, unref, reactive, toRaw } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import { computed, watch } from 'vue';

defineProps({
    loading: {
        type: Boolean,
    },
    width: {
        type: String as PropType<string>,
        default: '100%',
    },
    height: {
        type: String as PropType<string>,
        default: '280px',
    },
});

// const emit = defineEmits(['success', 'register']);

const ifDisabled = ref<boolean>(false);

const formItem: FormSchema[] = [
    {
        field: 'region',
        label: '地区',
        component: 'Select',
        colProps: { span: 8 },
        componentProps: {
            placeholder: '请选择是否政府采购',
            options: [
                { label: 'Zone one', value: 'shanghai' },
                { label: 'Zone two', value: 'beijing' },
            ],
        },
    },
]

// do not use same name with ref
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
]

// 1.生命周期
onMounted(() => {
    console.log("this is unMounted");
})

onUnmounted(() => {
    console.log("this is onUnmounted");
});

// 2.计算属性
const isDelivery = computed(() => {
    return form.delivery ? 'Yes' : 'No'
});

const zhResources = computed(() => {
    return function fun(value: unknown) {
        switch (value) {
            case 'Sponsor':
                return '赞助商';
                break;
            case 'Venue':
                return '会场';
                break;
            default:
                break;
        }
    };
});

// 3.监听
// watch(
//     () => props.year,
//     (newVal, oldVal) => {
//         init();
//     },
// );

const oneEdit = () => {
    ifDisabled.value = !unref(ifDisabled)
}

const onSubmit = () => {
    console.log('submit!', form)
}
const onReset = () => {
    console.log('onReset!')
}



const handleClick = () => {
    console.log('click')
}
</script>

<style lang="less" scoped></style>