<template>
    <div class="cart">
        <div class="cart__conrainer">
            <h2 class="cart__title">Корзина</h2>
            <ul class="cart__list">
                <li 
                v-for="product in getToBuyProductsListByRate"
                :key="product.id"
                class="cart__item item-cart">
                <div class="item-cart__title">{{ product.name }}</div>
                <div class="item-cart__price">
                    {{  (product.price.toFixed(2)) }}
                    <span class="price-currency">{{ setCurrencyVal }}</span>
                </div>
                <button @click="delProduct(product.id)" class="item-cart__button">Відмовитись</button>
                </li>
            </ul>
            <div class="cart__total total-cart">
                <span class="total-cart__title">Разом до оплатти</span>
                <span class="total-cart__price">
                    {{ getSumPrices.toFixed(2) }}
                    <span class="price-currency">{{ setCurrencyVal }}</span>
                </span>
                <button class="total-cart__button">Оплатити</button>
            </div>
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'CartComponent',
        computed: {
            ...mapGetters(['getToBuyProductsList', 'getToBuyProductsListByRate', 'getCurrencyVal']),
            getSumPrices(){
                let totalPrice = 0
                if (this.getToBuyProductsListByRate.length !== 0)
                totalPrice = this.getToBuyProductsListByRate.reduce((sum, product) => sum + product.price, 0);
                else 
                totalPrice = 0
                return totalPrice
            },
            setCurrencyVal(){
            if (!this.getCurrencyVal || this.getCurrencyVal === 'UAH')
                return 'грн'
            else return 'usd'
        }
        },
        methods: {
            ...mapActions(['delProduct']),
        },
    }
</script>

<style lang="scss" scoped>
.cart {
    border: 1px solid black;
// .cart__conrainer

&__conrainer {
    min-width: 450px;
    padding: 10px;
}

// .cart__title

&__title {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
}

// .cart__list

&__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
}

// .cart__item

&__item {
}

// .cart__total

&__total {
}
}
.item-cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

// .item-cart__title

&__title {
    flex: 1 1 200px;
}

// .item-cart__price

&__price {
    display: flex;
    align-items: center;
    gap: 5px;
}

// .item-cart__button

&__button {
    padding: 5px 15px;
    border-radius: 6px;
    background-color: rgb(255, 0, 81);
    color: #fff;
    transition: all 0.5s ease 0s;
    &:hover {
        background-color: rgb(203, 2, 66);
        box-shadow: 0 0 8px #fff;
    }
}
}
.total-cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

// .total-cart__title

&__title {
    flex: 1 1 200px;
}

// .total-cart__price

&__price {
    display: flex;
    align-items: center;
    gap: 5px;
}

// .total-cart__button

&__button {
    min-width: 125px;
    padding: 5px 15px;
    border-radius: 6px;
    background-color: rgb(255, 0, 81);
    color: #fff;
    transition: all 0.5s ease 0s;
    &:hover {
        background-color: rgb(203, 2, 66);
        box-shadow: 0 0 8px #fff;
    }
}
}

</style>