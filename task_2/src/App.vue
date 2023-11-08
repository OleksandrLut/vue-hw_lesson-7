<template>
	<div class="app">
		<div class="app__container">
			<h1 class="app__title">Lesson-7_task-2</h1>
			<currency-component />
			<div class="app__body">
				<products-list />
				<cart-component />
			</div>
		</div>
	</div>
</template>

<script>
import ProductsList from "@/components/ProductsList";
import CartComponent from "./components/CartComponent.vue";
import CurrencyComponent from "./components/CurrencyComponent.vue";
export default {
	name: "App",
	components: {
    ProductsList,
    CartComponent,
    CurrencyComponent
},
};
</script>

<style lang="scss">
@import url(@/assets/reset.scss);
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
body {
	background-color: grey;
}
.app {
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
// .app__container
&__container {
	max-width: 1440px;
	padding: 20px;
	border-radius: 6px;
	background-color: rgb(166, 163, 163);
}
// .app__title
&__title {
	text-align: center;
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 50px;
}
// .app__body
&__body{
	display: flex;
	align-items: flex-start;
	gap: 60px;
}
}
</style>
