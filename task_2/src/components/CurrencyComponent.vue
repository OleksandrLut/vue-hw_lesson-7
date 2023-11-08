<template>
    <div class="currency">
        <span>Оберіть валюту</span>
        <select v-model="currencyValue">
            <option value="UAH">Гривня</option>
            <option value="USD">Долар</option>
        </select>
        <div>{{ currencyValue }}</div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'CurrencyComponent',
        computed: {
            ...mapGetters(['getCurrencyVal']),
            currencyValue: {
                get () {
                    return this.getCurrencyVal
                },
                set (newVal) {
                    this.setNewCurrencyVal(newVal)
                },
            },
        },
        methods: {
            ...mapActions(['setNewCurrencyVal']),
        },
    }
</script>

<style lang="scss" scoped>
.currency {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    select {
        padding: 5px 10px;
        border-radius: 4px;
    }
}
</style>