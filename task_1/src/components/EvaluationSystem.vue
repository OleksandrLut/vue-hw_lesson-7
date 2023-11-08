<template>
    <div class="evaluation-container">
        <label>
            <span>Система оцінювання</span>
            <select name="type-score" v-model="currentType">
                <option :value="12">12</option>
                <option :value="5">5</option>
            </select>
        </label>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


    export default {
        name: 'EvaluationSystem',
        props: {
        },
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters(['getScoreType']),
            currentType: {
                get() {
                    return this.getScoreType
                },
                set(newVal) {
                    this.setScoreTypeVal(newVal)
                },
            },
            
        },
        methods: {
            ...mapActions(['setScoreTypeVal'])
        },
    }
</script>

<style lang="scss" scoped>
    .evaluation-container {
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