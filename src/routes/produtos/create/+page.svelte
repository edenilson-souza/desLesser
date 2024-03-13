<script>
	import CreateProducts from '../../../components/feature/createProducts.svelte';
</script>

<svelte:head>
	<title>Produtos</title>
</svelte:head>

<div class="text-column">
	<CreateProducts />
</div>

<style>
	.text-column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
