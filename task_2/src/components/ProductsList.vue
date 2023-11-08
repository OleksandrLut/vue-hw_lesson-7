<template>
    <div class="products">
        <div class="products__container">
            <h2 class="products__title">Список товарів</h2>
            <ul class="products__list">
            <li class="products__item item-product" v-for="product in getProductsListByRate" :key="product.id">
                <div class="item-product__title">{{ product.name }}</div>
                <div class="item-product__price">
                {{ (product.price.toFixed(2)) }}
                <span class="price-currency">{{ setCurrencyVal }}</span>
                </div>
                <button class="item-product__btn" @click="onClick(product.id)">Купити</button>
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { productsList } from '../constants/dataProducts';

export default {
    name: 'ProductsList',
    computed: {
        ...mapGetters(['getProductsList', 'getToBuyProductsList', 'getProductsListByRate', 'getCurrencyVal']),
        setCurrencyVal(){
            if (!this.getCurrencyVal || this.getCurrencyVal === 'UAH')
                return 'грн'
            else return 'usd'
        }
    },
    methods: {
        ...mapActions(['loadProductsList', 'setToBuyProductsList']),
        onClick(productId) {
        this.setToBuyProductsList(productId);
        }
    },
    created() {
        this.loadProductsList(productsList);
    },
}
</script>

<style lang="scss" scoped>
.products {
    border: 1px solid black;
// .products__container
&__container {
    min-width: 450px;
    padding: 10px;
}
// .products__title
&__title {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
}
// .products__list
&__list {
    display: flex;
    flex-direction: column;
    // align-items: center;
    gap: 20px;
}
// .products__item
&__item {}
}
.item-product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
// .item-product__title
&__title {
    flex: 1 1 200px;
}
// .item-product__price
&__price {
    display: flex;
    align-items: center;
    gap: 5px;
}
// .item-product__btn
&__btn {
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