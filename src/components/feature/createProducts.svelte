<script>
	import { goto } from '$app/navigation';
	import { productsService } from '../../services/products';

	let productName = '';
	let productPrice = '';
	let productDescription = '';

	function handleSubmit() {
		const productData = {
			name: productName,
			price: Number(productPrice),
			description: productDescription
		};
		const createProduct = productsService;
		createProduct.createProduct(productData);
		goto('/produtos');
	}
</script>

<main>
	<h1>Cadastro de Produto</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<div>
			<label for="productName">Nome do Produto:</label>
			<input type="text" id="productName" bind:value={productName} required />
		</div>
		<div>
			<label for="productPrice">Preço do Produto:</label>
			<input type="number" id="productPrice" bind:value={productPrice} required />
		</div>
		<div>
			<label for="productDescription">Descrição do Produto:</label>
			<textarea id="productDescription" bind:value={productDescription} required></textarea>
		</div>
		<button type="submit">Cadastrar Produto</button>
	</form>
</main>

<style>
	main {
		max-width: 400px;
		margin: auto;
	}
	label {
		display: block;
		margin-bottom: 5px;
	}
	input,
	textarea {
		width: 100%;
		padding: 8px;
		margin-bottom: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
		resize: vertical;
	}
	button {
		padding: 10px 20px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s;
	}
	button:hover {
		background-color: #0056b3;
	}
</style>
