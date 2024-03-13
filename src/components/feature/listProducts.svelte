<!-- src/routes/ProductList.svelte -->
<script>
	import { productsService } from '../../services/products';
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	let products = [];

	onMount(async () => {
		products = await productsService.getProducts();
	});
</script>

<main>
	<h1>Lista de Produtos</h1>
	{#if products.length === 0}
		<p>Nenhum produto disponível no momento.</p>
	{:else}
		<ul>
			{#each products as product}
				<li>
					<h2>{product.name}</h2>
					<p>Preço: R${product.price}</p>
					<p>{product.description}</p>
				</li>
			{/each}
		</ul>
	{/if}
</main>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		margin-bottom: 20px;
		border-bottom: 1px solid #ccc;
		padding-bottom: 10px;
	}
</style>
