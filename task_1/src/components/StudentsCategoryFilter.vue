<template>
    <div class="filter-container">
        <label>
            <span>Категорія</span>
            <select name="students-category" v-model="studentsCategory">
                <option :value="10">Відмінник</option>
                <option :value="7">Хорошист</option>
                <option :value="4">Трійочник</option>
                <option :value="1">Двійочник</option>
                <option :value="13">Блатник</option>
            </select>
        </label>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'StudentsCategoryFilter',
        computed: {
            ...mapGetters(['getStudentCategory']),
            studentsCategory: {
                get() {
                    return this.getStudentCategory
                },
                set(newValue) {
                    this.setStudentCategoryValue(newValue)
                }
            }
        },
        methods: {
            ...mapActions(['setStudentCategoryValue']),
        },
    }
</script>

<style lang="scss" scoped>
 .filter-container {
        padding: 15px;
        label {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
        }
        select {
            padding: 4px 8px;
            border-radius: 4px;
        }
        span {
            font-size: 20px;
            font-weight: 600;
            color: #67d65f;
        }
    }
</style>