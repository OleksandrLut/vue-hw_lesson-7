import { createStore } from 'vuex'
import { productsList } from '../constants/dataProducts'

export default createStore({
    state: {
        productsList: [],
        toBuyProductsList: [],
        currentUsdRate: 38,
        currencyVal: null,
    },
    getters: {
        getProductsList(state) {
            return state.productsList
        },
        getToBuyProductsList(state) {
            return state.toBuyProductsList
        },
        getToBuyProductsListByRate(state) {
            if (!state.currencyVal || state.currencyVal === 'UAH') return state.toBuyProductsList
            else {
                const copiedProductsList = state.toBuyProductsList.map((product) => ({ ...product }))
                for (let i = 0; i < copiedProductsList.length; i++) {
                    copiedProductsList[i].price /= state.currentUsdRate
                }
                return copiedProductsList
            }
        },
        getCurrencyVal(state) {
            return state.currencyVal
        },
        getProductsListByRate(state) {
            if (!state.currencyVal || state.currencyVal === 'UAH') return state.productsList
            else {
                const copiedProductsList = state.productsList.map((product) => ({ ...product }))
                for (let i = 0; i < copiedProductsList.length; i++) {
                    copiedProductsList[i].price /= state.currentUsdRate
                }
                return copiedProductsList
            }
        },
    },
    mutations: {
        setProductsList(state, newProductsList) {
            state.productsList = newProductsList
        },
        addToBuyProductsList(state, newProductId) {
            const currentProduct = state.productsList.find((product) => product.id === newProductId)
            if (!state.toBuyProductsList.includes(currentProduct)) {
                state.toBuyProductsList.push(currentProduct)
            }
        },
        delProductFromToBuyList(state, newProductId) {
            state.toBuyProductsList = state.toBuyProductsList.filter((product) => product.id !== newProductId)
        },
        setCurrencyVal(state, newVal) {
            state.currencyVal = newVal
        },
    },
    actions: {
        loadProductsList({ commit }) {
            commit('setProductsList', productsList)
        },
        setToBuyProductsList({ commit }, productId) {
            commit('addToBuyProductsList', productId)
        },
        delProduct({ commit }, productId) {
            commit('delProductFromToBuyList', productId)
        },
        setNewCurrencyVal({ commit }, newVal) {
            commit('setCurrencyVal', newVal)
        },
    },
})
