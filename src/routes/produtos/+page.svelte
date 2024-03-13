<script>
	import Button from '../../components/basic/Button.svelte';
	import Products from '../../components/feature/listProducts.svelte';
	import { goto } from '$app/navigation';

	function handleClick() {
		goto('/produtos/create');
	}
</script>

<svelte:head>
	<title>Produtos</title>
	<meta name="Create product" content="Product" />
</svelte:head>

<div class="text-column">
	<h1>PRODUTOS</h1>
	<Button text="Novo Produto" onClick={handleClick} />
	<Products />
</div>

<style>
	.text-column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
